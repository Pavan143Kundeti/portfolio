'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Code, Cloud, Zap } from 'lucide-react';

const highlights = [
  { icon: Server, text: 'Built full-stack applications with React, Node.js, NestJS, and PostgreSQL', color: 'blue' },
  { icon: Cloud, text: 'Hands-on with Docker, Kubernetes, Jenkins, Terraform, and AWS services', color: 'indigo' },
  { icon: Zap, text: 'CI/CD pipelines, Infrastructure as Code, and cloud automation expertise', color: 'teal' },
  { icon: Code, text: 'AI/ML knowledge with Python, NumPy, Pandas, and data visualization tools', color: 'purple' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Full Stack Developer and DevOps Engineer with expertise in building scalable web applications and automating cloud infrastructure. 
            Proficient in React, Node.js, NestJS, Python, and modern DevOps tools including Docker, Kubernetes, Jenkins, and Terraform. 
            Strong foundation in AI/ML, Data Science, and cloud technologies (AWS). Passionate about creating efficient, production-ready systems 
            and implementing CI/CD best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-${item.color}-100 rounded-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-${item.color}-600`} size={24} />
                </div>
                <p className="text-gray-700 flex-1">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
