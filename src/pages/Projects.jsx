import React from 'react';


// DATA 1: TOP PROJECTS (Bisa klik detail)
const topProjectsData = [
  {
    id: 1,
    title: 'MONJA - AI Road Monitoring',
    shortDesc: 'An AI-based road monitoring system developed using a prototyping method.',
    fullDesc: 'MONJA is a comprehensive web platform designed to analyze and monitor road conditions using Artificial Intelligence. \n\nThe system utilizes machine learning models to detect potholes, cracks, and other road damages from video feeds or uploaded images. It provides an interactive dashboard for city officials to prioritize repairs based on the severity detected.',
    features: [
      'Real-time road damage detection',
      'Interactive mapping and dashboard',
      'Automated severity classification',
      'Comprehensive data reporting'
    ],
    techStack: ['React.js', 'Vite.js', 'FastAPI', 'Python', 'MongoDB', 'Tailwind CSS'],
    role: 'Frontend Developer',
    timeline: 'Juli 2024 - Maret 2025',
    thumbnail: '/projects/monja/1.png', // Ganti dengan gambar cover yang paling bagus
    images: [
      '/projects/monja/1.png',
      '/projects/monja/2.png',
      '/projects/monja/3.png',
      '/projects/monja/4.png',
    ],
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/Monja_new'
  },
  {
    id: 2,
    title: 'Manajemen Kependudukan Desa Hanjuang',
    shortDesc: 'A web-based population management system for digitizing citizen data and administrative processes.',
    fullDesc: 'This project is a dedicated population management information system built for Desa Hanjuang. \n\nIt aims to streamline village administration by digitizing citizen records, facilitating the automated creation of official letters (Surat Pengantar), and providing a demographic dashboard for village officials to make data-driven decisions.',
    features: [
      'Citizen data management (CRUD)',
      'Automated official letter generation',
      'Demographic statistics dashboard',
      'Secure user authentication for officials'
    ],
    techStack: ['Laravel', 'PHP', 'HTML', 'MySQL'],
    role: 'Fullstack Developer',
    timeline: 'January 2025',
    thumbnail: '/projects/kependudukan/1.png',
    images: [
      '/projects/kependudukan/1.png',
      '/projects/kependudukan/2.png',
      '/projects/kependudukan/3.png',
      '/projects/kependudukan/4.png'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/Manajemen-kependudukan'
  },
  {
    id: 3,
    title: 'Sweeter - Simple Social Media',
    shortDesc: 'A lightweight, Twitter-like social media web application built with Python and Flask.',
    fullDesc: 'Sweeter is a microblogging platform designed as a simple social media concept. \n\nDeveloped using Flask, it allows users to create accounts, post short text updates, interact with a public timeline, and manage their personal profiles. The project focuses on rendering dynamic templates and handling backend routing efficiently.',
    features: [
      'User registration and authentication',
      'Posting and deleting "sweets" (updates)',
      'Public timeline feed',
      'Basic profile management'
    ],
    techStack: ['Flask', 'Python', 'Mongodb'],
    role: 'Fullstack Developer',
    timeline: 'February 2024',
    thumbnail: '/projects/sweeter/1.png',
    images: [
      '/projects/sweeter/1.png',
      '/projects/sweeter/2.png',
      '/projects/sweeter/3.png'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/sweeter'
  },
  {
    id: 4,
    title: 'Online Laundry System',
    shortDesc: 'A straightforward web application for managing laundry orders and customer transactions.',
    fullDesc: 'Built as part of a software engineering analysis project, this online laundry ordering system digitizes the traditional laundry workflow. \n\nThe website allows for recording customer details, tracking laundry status, and managing payment transactions, featuring a clean and responsive UI powered by Bootstrap.',
    features: [
      'Order and transaction tracking',
      'Customer data management',
      'Responsive UI design',
      'Service package selection'
    ],
    techStack: ['HTML', 'CSS', 'Bootstrap', 'PHP'],
    role: 'Fullstack Developer',
    timeline: 'January 2024',
    thumbnail: '/projects/laundry/6.png',
    images: [
      '/projects/laundry/1.png',
      '/projects/laundry/2.png',
      '/projects/laundry/3.png',
      '/projects/laundry/4.png',
      '/projects/laundry/5.png',
      '/projects/laundry/6.png',
      '/projects/laundry/7.png',
      '/projects/laundry/8.png',
      '/projects/laundry/9.png'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/laundry'
  }
];

// DATA 2: OTHER PROJECTS (Hanya Card + Tombol)

const otherProjectsData = [
  {
    id: 5,
    title: 'Library Member Registration',
    shortDesc: 'A simple web-based system for registering and managing library member data efficiently.',
    techStack: ['HTML', 'PHP'],
    thumbnail: '/projects/other/user.png',
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/member-perpus'
  },
  {
    id: 6,
    title: 'My Bucket List',
    shortDesc: 'A personal goal-tracking web application to save, manage, and complete life goals.',
    techStack: ['Flask', 'Python', 'HTML'],
    thumbnail: '/projects/other/main.png',
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/wishlist'
  },
  {
    id: 7,
    title: 'My Favorite Movies',
    shortDesc: 'A minimalist movie catalog application to store, display, and review your favorite films.',
    techStack: ['Flask', 'Python', 'HTML'],
    thumbnail: '/projects/other/movie-dash.png',
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/movies'
  },
  {
    id: 8,
    title: 'Random People Generator',
    shortDesc: 'A utility web app that generates random user profiles and dummy data for testing purposes.',
    techStack: ['Flask', 'Python', 'HTML'],
    thumbnail: '/projects/other/sensus.png',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 9,
    title: 'Block Volume Calculator',
    shortDesc: 'A straightforward web utility designed to quickly calculate the volume of a rectangular cuboid.',
    techStack: ['HTML'],
    thumbnail: '/projects/other/results.png',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 10,
    title: 'Mini Portfolio',
    shortDesc: 'A compact and responsive personal portfolio website built to showcase projects and skills.',
    techStack: ['HTML', 'Bootstrap'],
    thumbnail: '/projects/other/dashboard.png',
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/FGD'
  },
  {
    id: 11,
    title: 'Bakso Aci E-Commerce',
    shortDesc: 'An online store application to facilitate the ordering and sales management of Bakso Aci.',
    techStack: ['Flask', 'Bootstrap', 'HTML', 'MongoDB'],
    thumbnail: '/projects/other/main-MENU',
    demoLink: '#',
    githubLink: 'https://github.com/AdeSaef/Bakso-Aci'
  }
];

const Projects = ({ onSelectProject }) => (
  <section className="pt-8 animate-fade-in pb-12 max-w-6xl mx-auto">
    
    {/* ========================================== */}
    {/* SECTION: MY TOP PROJECTS                   */}
    {/* ========================================== */}
    <h2 className="text-2xl font-bold mb-8 pb-2 border-b-4 border-blue-600 inline-block">My Top Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {topProjectsData.map((project) => (
        <div 
          key={project.id} 
          onClick={() => onSelectProject(project)}
          className="bg-white dark:bg-[#1e293b] rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col h-full hover:-translate-y-1 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900/50 transition duration-300 cursor-pointer group"
        >
          {/* Thumbnail */}
          <div className="h-56 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6 overflow-hidden relative">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/0f172a/ffffff?text=${project.title.replace(/ /g, '+')}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition text-slate-800 dark:text-slate-100">{project.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
            {project.shortDesc}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200/50 dark:border-slate-700/50">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
               <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200/50 dark:border-slate-700/50">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          {/* Action Hint */}
          <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 gap-1 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
            View Project Details 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      ))}
    </div>



    {/* SECTION: OTHER PROJECTS                    */}
    <h2 className="text-xl font-bold mb-8 pb-2 border-b-4 border-slate-300 dark:border-slate-700 inline-block text-slate-700 dark:text-slate-300">Other Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {otherProjectsData.map((project) => (
        <div 
          key={project.id} 
          className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-md transition duration-300 group"
        >
          {/* Thumbnail */}
          <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-xl mb-5 overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/400x300/0f172a/ffffff?text=${project.title.replace(/ /g, '+')}`;
              }}
            />
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100 line-clamp-1">{project.title}</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 flex-grow line-clamp-3 leading-relaxed">
            {project.shortDesc}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 px-2 py-1 rounded text-[10px] font-medium border border-slate-100 dark:border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Tombol Aksi (Demo & GitHub) */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold py-2.5 rounded-lg transition text-center flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              Demo
            </a> */}
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold py-2.5 rounded-lg transition text-center flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>

  </section>
);

export default Projects;