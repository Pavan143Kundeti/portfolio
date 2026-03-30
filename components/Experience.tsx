'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Technovexa',
    role: 'Full Stack Development Intern',
    duration: 'Feb 2026 – Present',
    points: [
      'Developed full-stack web applications using React, Node.js, NestJS, HTML5, CSS3, and JavaScript',
      'Built CI/CD pipelines using Jenkins and GitHub Actions for automated deployments',
      'Managed Docker containers and provisioned AWS infrastructure (EC2, S3, IAM, VPC)',
      'Automated configuration management using Ansible and Terraform',
      'Developed REST APIs and integrated with MySQL and PostgreSQL databases',
      'Collaborated with teams using Git, Agile methodologies, and DevOps best practices',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 md:ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[4.5rem] top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + pointIndex * 0.1 }}
                      className="flex items-start text-gray-700"
                    >
                      <span className="text-blue-600 mr-3 mt-1">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
