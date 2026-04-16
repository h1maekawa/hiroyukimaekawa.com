const works = [
  {
    slug: 'finance-app',
    title: 'Kakeibo',
    subtitle: '家計簿アプリ',
    year: '2026',
    date: '2026-03-01',
    description: 'シンプルで美しい収支管理アプリ。カテゴリ分析、予算設定機能を搭載。',
    url: 'https://finance-gray-gamma.vercel.app/',
    icon: '💰',
    tags: ['React', 'Supabase', 'Chart.js'],
  },
  {
    slug: 'law-firm-site',
    title: 'DocGen',
    subtitle: '士業コーポレートサイト',
    year: '2026',
    date: '2026-02-10',
    description: '検索導線とお問い合わせ導線を再設計し、CV率改善を実施。',
    icon: '📄',
    tags: ['Next.js', 'Vercel'],
  },
  {
    slug: 'school-lp',
    title: 'Academy LP',
    subtitle: 'スクール事業LP',
    year: '2026',
    date: '2026-01-25',
    description: '講座案内の情報整理と申込導線の最適化を担当。',
    icon: '🎓',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    slug: 'clinic-web-renewal',
    title: 'Clinic Web',
    subtitle: 'クリニックサイトリニューアル',
    year: '2025',
    date: '2025-12-18',
    description: 'スマホUXを中心に、予約までの離脱ポイントを改善。',
    icon: '🏥',
    tags: ['WordPress', 'SEO'],
  },
  {
    slug: 'ecommerce-brand',
    title: 'Brand Store',
    subtitle: 'D2Cブランドサイト',
    year: '2025',
    date: '2025-10-03',
    description: 'ブランド表現と購入導線を両立したECフロントを構築。',
    icon: '🛍️',
    tags: ['Shopify', 'Liquid'],
  },
  {
    slug: 'saas-site',
    title: 'Service Portal',
    subtitle: 'SaaSサービスサイト',
    year: '2025',
    date: '2025-07-21',
    description: '機能訴求の情報設計とホワイトペーパ導線を設計。',
    icon: '⚙️',
    tags: ['Vue.js', 'Firebase'],
  },
  {
    slug: 'career-consulting',
    title: 'Career Lab',
    subtitle: 'キャリア・採用支援支援',
    year: '2026',
    date: '2026-04-15',
    description: 'AIを活用したキャリア戦略設計と、採用プロセスの自動化・効率化を支援。',
    icon: '🚀',
    tags: ['Career Strategy', 'AI Integration'],
  },
];

const NOTE_RSS_URL = 'https://note.com/note_career/rss/';

const $ = (selector) => document.querySelector(selector);

// Custom cursor logic
function setupCursor() {
  const cursor = $('#cursor');
  const ring = $('#cursorRing');
  if (!cursor || !ring) return;

  let cx = 0, cy = 0, rx = 0, ry = 0;
  
  document.addEventListener('mousemove', e => {
    cx = e.clientX; 
    cy = e.clientY;
    cursor.style.left = cx + 'px'; 
    cursor.style.top = cy + 'px';
  });

  function animRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px'; 
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => { 
      cursor.classList.add('hover'); 
      ring.classList.add('hover'); 
    });
    el.addEventListener('mouseleave', () => { 
      cursor.classList.remove('hover'); 
      ring.classList.remove('hover'); 
    });
  });
}

// Render Works with dynamic sizes
function renderFeaturedWorks() {
  const host = $('#featured-works');
  if (!host) return;

  const sorted = [...works].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  host.innerHTML = sorted
    .slice(0, 6)
    .map((work, index) => {
      const num = String(index + 1).padStart(2, '0');
      const thumbUrl = `https://images.unsplash.com/photo-${index + 1500000000000}?auto=format&fit=crop&q=80&w=800`; // Placeholder logic
      
      return `
        <a href="${work.url || '#'}" class="work-card fade-up">
          <div class="work-thumb">
            <img src="${thumbUrl}" alt="${work.title}" onerror="this.src='https://placehold.co/600x600/1a1d25/a8d8e8?text=${encodeURIComponent(work.title)}'">
          </div>
          <div class="work-body">
            <span class="work-num">Service ${num}</span>
            <h3 class="work-title">${work.title}</h3>
          </div>
        </a>
      `;
    })
    .join('');
}

// Render News
async function renderNews() {
  const host = $('#news-list');
  if (!host) return;

  host.innerHTML = '<div class="news-item"><p class="news-title">Loading news...</p></div>';
  
  try {
    const items = await fetchNoteItems();
    if (!items.length) throw new Error('No items');

    host.innerHTML = items
      .slice(0, 4)
      .map(item => `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="news-item">
          <span class="news-date">${formatDate(item.pubDate)}</span>
          <h3 class="news-title">${item.title}</h3>
          <span class="news-link">Read More →</span>
        </a>
      `).join('');
  } catch (err) {
    host.innerHTML = '<div class="news-item"><p class="news-title">RSS Feed currently unavailable.</p></div>';
  }
}

// Helpers for News
async function fetchNoteItems() {
  const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(NOTE_RSS_URL)}`;
  try {
    const response = await fetch(proxy);
    const text = await response.text();
    const xml = new DOMParser().parseFromString(text, 'text/xml');
    return [...xml.querySelectorAll('item')].map(item => ({
      title: item.querySelector('title')?.textContent,
      link: item.querySelector('link')?.textContent,
      pubDate: item.querySelector('pubDate')?.textContent,
    }));
  } catch (e) {
    return [];
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// Intersection Observer for animations
function setupAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // If it's the about section or contains skill filled bars, animate them
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// Nav Header Toggle
function setupNav() {
  const toggle = $('.menu-toggle');
  const nav = $('[data-nav]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'CLOSE' : 'MENU';
    
    if (open) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'fixed';
      nav.style.inset = '0';
      nav.style.background = 'var(--bg)';
      nav.style.justifyContent = 'center';
      nav.style.alignItems = 'center';
      nav.style.zIndex = '99';
      nav.style.gap = '2rem';
    } else {
      nav.style = '';
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      nav.style = '';
      toggle.textContent = 'MENU';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function init() {
  setupCursor();
  renderFeaturedWorks();
  renderNews();
  setupAnimations();
  setupNav();
}

window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('is-active');
    if (a.getAttribute('href').includes(current)) {
      a.classList.add('is-active');
    }
  });
});

init();
