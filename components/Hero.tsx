'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [null, Math.random() * 1080],
              x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : [null, Math.random() * 1920],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Pavan Kumar Kondeti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-6"
            >
              DevOps Engineer | Cloud Infrastructure Specialist | Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl"
            >
              Automating cloud infrastructure and building CI/CD pipelines with AWS, Kubernetes, and Terraform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/Pavan_Kondeti_DevOps_Engineer.pdf`}
                download
                className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-lg">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile.jpg`}
                alt="Pavan Kumar Kondeti" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
