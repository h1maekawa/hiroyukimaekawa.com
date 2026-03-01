import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';

export function Home() {
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
              Web Developer<br />
              & Application<br />
              Creator
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              ユーザー体験を第一に考えた、美しく機能的な<br className="hidden md:block" />
              ウェブサイトとアプリケーションを開発しています。
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-sm tracking-widest text-gray-500 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            SELECTED WORK
          </motion.h2>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link to={`/project/${project.id}`} className="block group">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-lg aspect-[16/10]">
            <motion.img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Info */}
          <div className="lg:col-span-4 lg:pt-2">
            <p className="text-xs tracking-widest text-gray-500 mb-3">
              {project.category} / {project.year}
            </p>
            <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:opacity-60 transition-opacity">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 border border-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
