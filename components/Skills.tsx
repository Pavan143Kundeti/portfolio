'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Bootstrap', 'Material-UI'],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Python', 'Java'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Cloud & AWS',
    skills: ['EC2', 'S3', 'IAM', 'VPC', 'EKS', 'RDS', 'Lambda', 'CloudWatch'],
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
    color: 'from-indigo-400 to-blue-500',
  },
  {
    title: 'Data Science & AI/ML',
    skills: ['Python', 'NumPy', 'Pandas', 'Power BI', 'Machine Learning', 'Data Analysis'],
    color: 'from-teal-400 to-green-500',
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Linux', 'Bash', 'Postman', 'VS Code', 'Agile', 'Scrum'],
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold mb-4`}>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
