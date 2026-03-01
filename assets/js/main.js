const works = [
  {
    slug: 'law-firm-site',
    title: '士業コーポレートサイト',
    year: '2026',
    date: '2026-02-10',
    description: '検索導線とお問い合わせ導線を再設計し、CV率改善を実施。',
  },
  {
    slug: 'school-lp',
    title: 'スクール事業LP',
    year: '2026',
    date: '2026-01-25',
    description: '講座案内の情報整理と申込導線の最適化を担当。',
  },
  {
    slug: 'clinic-web-renewal',
    title: 'クリニックサイトリニューアル',
    year: '2025',
    date: '2025-12-18',
    description: 'スマホUXを中心に、予約までの離脱ポイントを改善。',
  },
  {
    slug: 'ecommerce-brand',
    title: 'D2Cブランドサイト',
    year: '2025',
    date: '2025-10-03',
    description: 'ブランド表現と購入導線を両立したECフロントを構築。',
  },
  {
    slug: 'saas-site',
    title: 'SaaSサービスサイト',
    year: '2025',
    date: '2025-07-21',
    description: '機能訴求の情報設計とホワイトペーパ導線を設計。',
  },
];

const $ = (selector) => document.querySelector(selector);

function sortedWorks() {
  return [...works].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function renderFeaturedWorks() {
  const host = $('#featured-works');
  if (!host) return;

  host.innerHTML = sortedWorks()
    .slice(0, 3)
    .map(
      (work) => `
        <article class="work-card reveal">
          <div class="work-thumb" aria-hidden="true"></div>
          <div class="work-body">
            <p class="work-year">${work.year}</p>
            <h3 class="work-title">${work.title}</h3>
            <p class="work-desc">${work.description}</p>
          </div>
        </article>
      `,
    )
    .join('');
}

function setupRevealAnimations() {
  const targets = [...document.querySelectorAll('.reveal')];
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
  );

  targets.forEach((node) => observer.observe(node));
}

function setupHeader() {
  const menu = $('[data-nav]');
  const toggle = $('.menu-toggle');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'CLOSE' : 'MENU';
  });

  menu.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'MENU';
  });
}

function setupSectionTracker() {
  const sideLabel = $('#side-label');
  const sections = [...document.querySelectorAll('.section-track')];
  const navItems = [...document.querySelectorAll('[data-nav-id]')];
  if (!sideLabel || !sections.length) return;

  const setActive = (id, label) => {
    sideLabel.textContent = label;
    navItems.forEach((item) => {
      item.classList.toggle('is-active', item.getAttribute('data-nav-id') === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const section = visible.target;
      if (!(section instanceof HTMLElement)) return;

      const id = section.id || 'footer';
      const label = section.dataset.section || 'HOME';
      setActive(id, label);
    },
    {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: '-20% 0px -20% 0px',
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  renderFeaturedWorks();
  setupHeader();
  setupRevealAnimations();
  setupSectionTracker();
}

init();
