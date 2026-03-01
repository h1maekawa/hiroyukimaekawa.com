import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              前川弘行（まえかわ ひろゆき）<br />
              Web Developer & Application Creator
            </p>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <h2 className="text-xs tracking-widest text-gray-500 mb-6">INTRODUCTION</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  ユーザー体験を第一に考え、美しく機能的なウェブサイトとアプリケーションを開発しています。
                  デザインから実装まで、一貫したクオリティでプロジェクトを形にします。
                </p>
                <p>
                  クライアントのビジョンを理解し、それを実現可能な技術に落とし込むことを大切にしています。
                  ユーザビリティとパフォーマンスを両立させ、ビジネスゴールを達成するプロダクトを作ります。
                </p>
                <p>
                  最新の技術トレンドをキャッチアップしながらも、プロジェクトに本当に必要な技術選定を心がけています。
                  保守性と拡張性を考慮した、長く使い続けられるシステム構築を目指します。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <h2 className="text-xs tracking-widest text-gray-500 mb-12">SKILLS & EXPERTISE</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Motion / Animation</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-4">Backend Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Node.js / Express</li>
                  <li>RESTful API Design</li>
                  <li>Database Design</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>Authentication & Security</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-4">Tools & Others</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Git / GitHub</li>
                  <li>Figma / UI Design</li>
                  <li>SEO Optimization</li>
                  <li>Performance Tuning</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <h2 className="text-xs tracking-widest text-gray-500 mb-12">SERVICES</h2>

            <div className="space-y-8">
              <ServiceItem
                title="ウェブサイト制作"
                description="コーポレートサイト、ランディングページ、プロモーションサイトなど、目的に応じた最適なウェブサイトを制作します。"
              />
              <ServiceItem
                title="ウェブアプリケーション開発"
                description="業務効率化ツール、管理システム、SaaSプロダクトなど、スケーラブルなウェブアプリケーションを開発します。"
              />
              <ServiceItem
                title="ECサイト構築"
                description="決済システムから在庫管理まで、包括的なECサイトソリューションを提供します。"
              />
              <ServiceItem
                title="UI/UXデザイン"
                description="ユーザーリサーチから情報設計、ビジュアルデザインまで、トータルでデザインをサポートします。"
              />
              <ServiceItem
                title="保守・運用サポート"
                description="サイト公開後の継続的な保守、機能追加、パフォーマンス改善をサポートします。"
              />
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="border-t border-gray-200 pt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Let's Create Something Together
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              新しいプロジェクトのご相談、ご質問など、<br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <a
              href="mailto:maekawa.hiroyuki@example.com"
              className="inline-block px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <h3 className="text-xl md:text-2xl font-light mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
