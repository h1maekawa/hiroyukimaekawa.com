const works = [
  {
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
    title: 'DocGen',
    subtitle: '士業コーポレートサイト',
    year: '2026',
    date: '2026-02-10',
    description: '検索導線とお問い合わせ導線を再設計し、CV率改善を実施。',
    icon: '📄',
    tags: ['Next.js', 'Vercel'],
  },
  {
    title: 'Academy LP',
    subtitle: 'スクール事業LP',
    year: '2026',
    date: '2026-01-25',
    description: '講座案内の情報整理と申込導線の最適化を担当。',
    icon: '🎓',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Clinic Web',
    subtitle: 'クリニックサイトリニューアル',
    year: '2025',
    date: '2025-12-18',
    description: 'スマホUXを中心に、予約までの離脱ポイントを改善。',
    icon: '🏥',
    tags: ['WordPress', 'SEO'],
  },
  {
    title: 'Brand Store',
    subtitle: 'D2Cブランドサイト',
    year: '2025',
    date: '2025-10-03',
    description: 'ブランド表現と購入導線を両立したECフロントを構築。',
    icon: '🛍️',
    tags: ['Shopify', 'Liquid'],
  },
  {
    title: 'Service Portal',
    subtitle: 'SaaSサービスサイト',
    year: '2025',
    date: '2025-07-21',
    description: '機能訴求の情報設計とホワイトペーパ導線を設計。',
    icon: '⚙️',
    tags: ['Vue.js', 'Firebase'],
  },
  {
    title: 'Career Lab',
    subtitle: 'キャリア・採用支援',
    year: '2026',
    date: '2026-04-15',
    description: 'AIを活用したキャリア戦略設計と、採用プロセスの自動化・効率化を支援。',
    icon: '🚀',
    tags: ['Career Strategy', 'AI Integration'],
  },
];

const host = document.querySelector('#all-works');

if (host) {
  const sorted = [...works].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Render all services as square cards
  host.innerHTML = sorted
    .map((work, index) => {
      const num = String(index + 1).padStart(2, '0');
      const thumbUrl = `https://images.unsplash.com/photo-${index + 1600000000000}?auto=format&fit=crop&q=80&w=800`; // Placeholder logic
      
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
