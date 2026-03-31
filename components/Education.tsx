'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Annamacharya Institute of Technology & Sciences',
    location: 'Rajampet, Andhra Pradesh',
    duration: '2021 - 2025',
    cgpa: '8.74/10',
    marks: null,
    percentage: '83%',
    color: 'blue',
  },
  {
    icon: BookOpen,
    degree: 'Intermediate (Class 12)',
    field: 'MPC (Mathematics, Physics, Chemistry)',
    institution: 'Narayana Junior College',
    location: 'Vijayawada, Andhra Pradesh',
    duration: '2019 - 2021',
    cgpa: null,
    marks: '969/1000',
    percentage: '97%',
    color: 'indigo',
  },
  {
    icon: School,
    degree: 'Secondary School (Class 10)',
    field: 'SSC - All Subjects',
    institution: 'N T R High School',
    location: 'Vijayawada, Andhra Pradesh',
    duration: '2018 - 2019',
    cgpa: '9.8/10',
    marks: null,
    percentage: '98%',
    color: 'purple',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-16 px-6 md:px-12 lg:px-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-6 border shadow-md hover:shadow-xl transition-all flex flex-col ${
                edu.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200' :
                edu.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-200' :
                'bg-gradient-to-br from-purple-50 to-white border-purple-200'
              }`}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className={`p-3 rounded-full mb-3 ${
                  edu.color === 'blue' ? 'bg-blue-600' :
                  edu.color === 'indigo' ? 'bg-indigo-600' :
                  'bg-purple-600'
                }`}>
                  <edu.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 min-h-[56px] flex items-center">{edu.degree}</h3>
                <p className={`text-sm font-semibold mb-2 min-h-[40px] flex items-center ${
                  edu.color === 'blue' ? 'text-blue-600' :
                  edu.color === 'indigo' ? 'text-indigo-600' :
                  'text-purple-600'
                }`}>{edu.field}</p>
              </div>
              
              <div className="space-y-2 text-sm flex-grow">
                <p className="text-gray-700 font-medium min-h-[40px]">{edu.institution}</p>
                <p className="text-gray-600">📍 {edu.location}</p>
                <p className="text-gray-600">📅 {edu.duration}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center min-h-[24px]">
                    <span className="text-gray-600 text-sm">CGPA:</span>
                    <span className="font-bold text-gray-900">{edu.cgpa || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center min-h-[24px]">
                    <span className="text-gray-600 text-sm">Marks:</span>
                    <span className="font-bold text-gray-900">{edu.marks || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center min-h-[24px]">
                    <span className="text-gray-600 text-sm">Percentage:</span>
                    <span className={`font-bold text-lg ${
                      edu.color === 'blue' ? 'text-blue-600' :
                      edu.color === 'indigo' ? 'text-indigo-600' :
                      'text-purple-600'
                    }`}>{edu.percentage}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border border-teal-200 shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-600 rounded-lg">
              <Award className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications & Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <span className="text-teal-600 mr-2 font-bold">✓</span>
                  AWS Cloud Practitioner Essentials (2025)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-teal-600 mr-2 font-bold">✓</span>
                  DevOps Tools & Cloud Infrastructure Training
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-teal-600 mr-2 font-bold">✓</span>
                  Kubernetes & Container Orchestration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-teal-600 mr-2 font-bold">✓</span>
                  Infrastructure as Code with Terraform
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
