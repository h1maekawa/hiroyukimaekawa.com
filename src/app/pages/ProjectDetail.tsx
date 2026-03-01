import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">プロジェクトが見つかりません</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </button>
        </div>

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <motion.div
            className="rounded-lg overflow-hidden aspect-[16/9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Project Info */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Title & Description */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Links */}
              {(project.url || project.github) && (
                <div className="flex gap-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right: Meta Info */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-widest text-gray-500 mb-3">CATEGORY</h3>
                  <p className="text-base">{project.category}</p>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest text-gray-500 mb-3">YEAR</h3>
                  <p className="text-base">{project.year}</p>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest text-gray-500 mb-3">ROLE</h3>
                  <p className="text-base">{project.role}</p>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest text-gray-500 mb-3">TECHNOLOGIES</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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
            </motion.div>
          </div>
        </section>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </section>
        )}

        {/* Next Project Navigation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-32">
          <div className="border-t border-gray-200 pt-12">
            <Link
              to="/"
              className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition-colors"
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
