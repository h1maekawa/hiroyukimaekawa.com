const content = {
  services: [
    {
      title: 'AI導入支援',
      summary: '問い合わせ対応、記事作成、社内業務の自動化まで。小さく検証して最短で成果を出します。',
      detail: 'ChatGPT API連携 / 業務フロー設計 / 社内運用ルール整備',
    },
    {
      title: 'HP制作',
      summary: '集客と信頼獲得を両立するコーポレートサイト・サービスサイトを設計から実装まで一貫対応。',
      detail: '構成設計 / UIデザイン / 実装 / 公開・運用サポート',
    },
    {
      title: '改善運用',
      summary: '公開して終わりではなく、アクセス解析と改善を回しながら成果を積み上げます。',
      detail: '表示速度改善 / SEO基盤整備 / CV導線改善',
    },
  ],
  flow: [
    'ヒアリング（現状と目標の整理）',
    '構成案・ワイヤー作成',
    'デザインと実装',
    '公開後の改善運用',
  ],
  cases: [
    {
      industry: '士業サイト',
      result: '公開3ヶ月でお問い合わせ数 2.1倍',
      outline: 'サービス導線を再設計し、検索流入と指名流入の双方でCVを改善。',
    },
    {
      industry: 'スクール事業',
      result: '運用工数 月20時間削減',
      outline: '資料請求対応の一部をAI化し、メール配信と顧客管理を自動連携。',
    },
    {
      industry: '店舗ビジネス',
      result: '予約導線の離脱率 35%改善',
      outline: 'スマホUIを再構成し、CTA配置と読み込み速度を最適化。',
    },
  ],
};

const $ = (selector) => document.querySelector(selector);

function renderServices() {
  const host = $('#service-grid');
  if (!host) return;

  host.innerHTML = content.services
    .map(
      (item) => `
        <article class="service-card reveal">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <p class="service-meta">${item.detail}</p>
        </article>
      `,
    )
    .join('');
}

function renderFlow() {
  const host = $('#flow-list');
  if (!host) return;

  host.innerHTML = content.flow
    .map(
      (step, index) => `
        <li class="flow-item reveal">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <p>${step}</p>
        </li>
      `,
    )
    .join('');
}

function renderCases() {
  const host = $('#case-list');
  if (!host) return;

  host.innerHTML = content.cases
    .map(
      (item) => `
        <article class="case-card reveal">
          <p class="section-index">${item.industry}</p>
          <h3>${item.result}</h3>
          <p>${item.outline}</p>
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
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.15,
    },
  );

  targets.forEach((node) => observer.observe(node));
}

function setupHeader() {
  const header = $('.site-header');
  const menu = $('[data-nav]');
  const toggle = $('.menu-toggle');

  if (toggle && menu) {
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

  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 16) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function init() {
  renderServices();
  renderFlow();
  renderCases();
  setupHeader();
  setupRevealAnimations();
}

init();
