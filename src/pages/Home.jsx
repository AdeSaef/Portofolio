import React from 'react';

const Home = ({ setActiveTab }) => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-12 mt-6 animate-fade-in">
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-flex items-center gap-2">
        Hello, I'm 👋
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <span className="text-blue-600">Ade Saep Sulaiman</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
        Software Engineer
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
        I build responsive and user-friendly websites and apps with clean code.
      </p>
      
      {/* UPDATE: Tombol Action */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
        <button onClick={() => setActiveTab('projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto text-center">
          View Projects
        </button>
        {/* Tombol Download CV */}
        <a href="https://drive.google.com/file/d/11FuSU-SMCOoxMCDijUGVnVUC7XmCK9pD/view?usp=sharing" download className="border border-blue-600 text-blue-600 dark:border-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto flex items-center justify-center gap-2">
          Download CV
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        </a>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 dark:bg-slate-800/50 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-sm bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700/50">
        <div className="flex px-4 py-3 bg-slate-50 dark:bg-[#0f172a]/50 border-b border-slate-100 dark:border-slate-700/50">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center font-mono font-bold">&lt;/&gt;</div>
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end mt-4">
            <div className="flex-1 space-y-2 flex flex-col items-end">
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
            </div>
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg flex items-center justify-center font-mono font-bold">&#123;&#125;</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;