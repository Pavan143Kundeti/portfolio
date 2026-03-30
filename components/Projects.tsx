'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Campus Maintenance Management System',
    description: 'Full-stack campus management application with building hierarchy and maintenance tracking',
    stack: ['React', 'NestJS', 'PostgreSQL', 'JWT', 'Cloudinary'],
    features: [
      'JWT authentication with role-based access control',
      'PostgreSQL database with proper relationships',
      'Cloudinary integration for image management',
      'Real-time notifications and ticket system',
    ],
    liveUrl: 'https://campus-maintenance-web.onrender.com',
    githubUrl: 'https://github.com/Pavan143Kundeti/campus-maintenance-web',
    featured: true,
    images: [
      `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/campus-project.png`,
      `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/campus-project-2.png`,
      `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/campus-project-3.png`
    ],
  },
  {
    title: 'Terraform Infrastructure as Code',
    description: 'Comprehensive IaC course with reusable Terraform modules for AWS infrastructure',
    stack: ['Terraform', 'AWS', 'IaC', 'DevOps'],
    features: [
      'Terraform modules for EC2, VPC, S3, and RDS',
      'Remote state with S3 backend and DynamoDB locking',
      'Security best practices with IAM and encryption',
      'CI/CD integration for automated deployments',
    ],
    githubUrl: 'https://github.com/Pavan143Kundeti/terraform-zero-to-hero',
    featured: true,
  },
  {
    title: 'AWS EKS Production Deployment',
    description: 'Production-grade containerized application deployment on AWS EKS with Fargate',
    stack: ['Kubernetes', 'AWS EKS', 'Fargate', 'Helm'],
    features: [
      'ALB Ingress Controller configured using Helm',
      'Secure private subnet deployment architecture',
      'IAM OIDC provider for service account security',
      'High availability with 5 replicas and auto-scaling',
    ],
    githubUrl: 'https://github.com/Pavan143Kundeti/aws-eks-fargate-alb-project',
    featured: true,
  },
  {
    title: 'DevOps Learning Journey - 42 Days',
    description: 'Intensive DevOps training covering CI/CD, containerization, and monitoring tools',
    stack: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Prometheus'],
    features: [
      'Jenkins pipelines and Docker multi-stage builds',
      'Kubernetes KOPS setup and orchestration',
      'Prometheus and Grafana monitoring implementation',
      'Comprehensive documentation and hands-on projects',
    ],
    githubUrl: 'https://github.com/Pavan143Kundeti/devops-learning-journeyy',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const toggleImage = (projectTitle: string) => {
    setExpandedProject(expandedProject === projectTitle ? null : projectTitle);
    if (!currentImageIndex[projectTitle]) {
      setCurrentImageIndex({ ...currentImageIndex, [projectTitle]: 0 });
    }
  };

  const nextImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectTitle]: ((currentImageIndex[projectTitle] || 0) + 1) % totalImages,
    });
  };

  const prevImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectTitle]: ((currentImageIndex[projectTitle] || 0) - 1 + totalImages) % totalImages,
    });
  };

  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" />
                  Featured
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  GitHub
                </a>
                {project.images && (
                  <button
                    onClick={() => toggleImage(project.title)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    {expandedProject === project.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {expandedProject === project.title ? 'Hide' : 'Preview'}
                  </button>
                )}
              </div>

              {/* Expandable Image Carousel Section */}
              <AnimatePresence>
                {project.images && expandedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="relative h-[400px] md:h-[500px]">
                      <motion.img
                        key={currentImageIndex[project.title] || 0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        src={project.images[currentImageIndex[project.title] || 0]}
                        alt={`${project.title} preview ${(currentImageIndex[project.title] || 0) + 1}`}
                        className="w-full h-full object-contain rounded-lg shadow-lg border border-gray-200 bg-gray-50"
                      />
                      
                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(project.title, project.images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                          >
                            <ChevronLeft size={24} className="text-gray-800" />
                          </button>
                          <button
                            onClick={() => nextImage(project.title, project.images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                          >
                            <ChevronRight size={24} className="text-gray-800" />
                          </button>
                          
                          {/* Image Counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {(currentImageIndex[project.title] || 0) + 1} / {project.images.length}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Dot Indicators - Outside the fixed height container */}
                    {project.images && project.images.length > 1 && (
                      <div className="flex justify-center gap-2 mt-3">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex({ ...currentImageIndex, [project.title]: idx })}
                            className={`w-2 h-2 rounded-full transition-all ${
                              (currentImageIndex[project.title] || 0) === idx
                                ? 'bg-indigo-600 w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
