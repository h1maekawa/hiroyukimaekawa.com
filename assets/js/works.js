const works = [
  {
    title: '士業コーポレートサイト',
    year: '2026',
    date: '2026-02-10',
    description: '検索導線とお問い合わせ導線を再設計し、CV率改善を実施。',
  },
  {
    title: 'スクール事業LP',
    year: '2026',
    date: '2026-01-25',
    description: '講座案内の情報整理と申込導線の最適化を担当。',
  },
  {
    title: 'クリニックサイトリニューアル',
    year: '2025',
    date: '2025-12-18',
    description: 'スマホUXを中心に、予約までの離脱ポイントを改善。',
  },
  {
    title: 'D2Cブランドサイト',
    year: '2025',
    date: '2025-10-03',
    description: 'ブランド表現と購入導線を両立したECフロントを構築。',
  },
  {
    title: 'SaaSサービスサイト',
    year: '2025',
    date: '2025-07-21',
    description: '機能訴求の情報設計とホワイトペーパ導線を設計。',
  },
];

const host = document.querySelector('#all-works');

if (host) {
  host.innerHTML = [...works]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (work) => `
        <article class="work-card reveal is-visible">
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
