'use client';

import { motion } from 'framer-motion';
import { Mail, Heart, Code, Briefcase } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Code, href: 'https://github.com/Pavan143Kundeti', label: 'GitHub' },
    { icon: Briefcase, href: 'https://www.linkedin.com/in/pavankumarkondeti/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pavankumarkundeti237@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 mb-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-center mb-2"
          >
            Automating cloud infrastructure and streamlining deployments with DevOps excellence
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-sm flex items-center gap-2"
          >
            Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by Pavan Kumar Kondeti
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-xs mt-4"
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
