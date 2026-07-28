import React, { useState } from 'react';

const ProjectDetail = ({ project, onBack }) => {
  // State untuk melacak index gambar slider saat ini
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  // Fungsi navigasi slider
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="pt-4 md:pt-8 max-w-5xl mx-auto animate-fade-in pb-12">
      {/* Tombol Back */}
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition mb-8 bg-white dark:bg-[#1e293b] px-4 py-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 w-fit"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Projects
      </button>

      {/* Header Project */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">{project.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          {project.shortDesc}
        </p>
      </div>

      {/* IMAGE SLIDER / CAROUSEL */}
      <div className="relative w-full h-64 md:h-[500px] bg-slate-100 dark:bg-slate-800 rounded-3xl mb-10 overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group">
        
        {/* Gambar yang tampil saat ini */}
        <img 
          src={project.images[currentImageIndex]} 
          alt={`${project.title} - Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/1200x600/0f172a/ffffff?text=${project.title.replace(/ /g, '+')}+Slide+${currentImageIndex + 1}`;
          }}
        />

        {/* Tombol Navigasi (Hanya tampil jika gambar lebih dari 1) */}
        {project.images.length > 1 && (
          <>
            {/* Tombol Prev */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            {/* Tombol Next */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
              {project.images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentImageIndex === index 
                      ? 'w-6 h-2 bg-white' 
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Info Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Kolom Kiri: Deskripsi & Fitur */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Project Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line text-justify">
              {project.fullDesc}
            </p>
          </div>
          
          {project.features && (
            <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Kolom Kanan: Meta Info & Action */}
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 bg-white dark:bg-[#1e293b] p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            {/* <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20"
            >
              Live Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a> */}
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium py-3.5 rounded-xl transition flex items-center justify-center gap-2"
            >
              Source Code
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            </a>
          </div>

          {/* Project Details */}
          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-5 shadow-sm">
             <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Role</h4>
               <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.role}</p>
             </div>
             <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</h4>
               <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.timeline}</p>
             </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;