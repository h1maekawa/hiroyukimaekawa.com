import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl mb-4">前川弘行</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              ユーザー体験を第一に考え、美しく機能的なウェブサイトと<br />
              アプリケーションを開発しています。
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-3">CONTACT</p>
              <a
                href="mailto:maekawa.hiroyuki@example.com"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                maekawa.hiroyuki@example.com
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:maekawa.hiroyuki@example.com"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 Hiroyuki Maekawa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
