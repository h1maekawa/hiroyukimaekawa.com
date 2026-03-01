export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  coverImage: string;
  images: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'ECサイトプラットフォーム',
    category: 'Web Application',
    year: '2026',
    description: 'フルスタックECサイト構築',
    longDescription: 'モダンなUIと高速なパフォーマンスを実現したECサイトプラットフォーム。ユーザー認証、商品管理、カート機能、決済システム、注文管理、管理画面まで含む完全なソリューションを提供。レスポンシブデザインにより、あらゆるデバイスで最適な体験を実現。',
    role: 'Full-stack Development, UI/UX Design',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    coverImage: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MjMxMDk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MjMxMDk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'task-management',
    title: 'タスク管理ダッシュボード',
    category: 'Web Application',
    year: '2026',
    description: 'チーム向けタスク管理システム',
    longDescription: 'プロジェクト管理とタスク追跡を効率化するダッシュボードアプリケーション。ドラッグ&ドロップによる直感的な操作、リアルタイム同期、詳細な進捗管理機能を実装。チームのコラボレーションを強化し、生産性を向上させます。',
    role: 'Frontend Development, System Design',
    technologies: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Recharts'],
    coverImage: 'https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMDAzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMDAzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'corporate-website',
    title: 'コーポレートサイト',
    category: 'Website',
    year: '2025',
    description: '企業ブランディングサイト',
    longDescription: '企業のビジョンとサービスを効果的に伝えるコーポレートウェブサイト。SEO最適化、アクセシビリティ対応、CMSによる容易なコンテンツ管理を実現。多言語対応により、グローバルな展開をサポート。',
    role: 'Web Design, Frontend Development',
    technologies: ['Next.js', 'Tailwind CSS', 'Headless CMS', 'SEO'],
    coverImage: 'https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MjI2NjEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MjI2NjEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'analytics-dashboard',
    title: 'データ分析ダッシュボード',
    category: 'Web Application',
    year: '2025',
    description: 'ビジネスインテリジェンスツール',
    longDescription: 'リアルタイムデータの可視化とインタラクティブな分析機能を提供するダッシュボード。複雑なデータセットを美しく、わかりやすく表示。WebSocketによるリアルタイム更新で、常に最新の情報を提供します。',
    role: 'Full-stack Development, Data Visualization',
    technologies: ['React', 'D3.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
    coverImage: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMzUyMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMzUyMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'booking-system',
    title: '予約管理システム',
    category: 'Web Application',
    year: '2025',
    description: 'オンライン予約プラットフォーム',
    longDescription: 'サロン、クリニック、レストランなど様々な業種に対応した予約管理システム。カレンダー連携、自動リマインダー、顧客管理機能を実装。直感的なUIで管理者とユーザー双方の利便性を追求。',
    role: 'Full-stack Development, System Architecture',
    technologies: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    coverImage: 'https://images.unsplash.com/photo-1729860646477-c0f603c0300b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwc3lzdGVtJTIwYXBwfGVufDF8fHx8MTc3MjM1MjM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1729860646477-c0f603c0300b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwc3lzdGVtJTIwYXBwfGVufDF8fHx8MTc3MjM1MjM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 'real-estate-platform',
    title: '不動産検索プラットフォーム',
    category: 'Web Application',
    year: '2025',
    description: '物件情報検索サイト',
    longDescription: '高度な検索機能とマップ統合により、理想の物件を見つけやすくした不動産プラットフォーム。バーチャルツアー、詳細なフィルタリング、お気に入り機能など、ユーザー体験を重視した設計。',
    role: 'Frontend Development, API Integration',
    technologies: ['React', 'Next.js', 'Google Maps API', 'MongoDB'],
    coverImage: 'https://images.unsplash.com/photo-1761166518430-18fa61b973e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcGxhdGZvcm18ZW58MXx8fHwxNzcyMzUyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1761166518430-18fa61b973e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcGxhdGZvcm18ZW58MXx8fHwxNzcyMzUyMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];
