const Navbar = ({ activeTab, setActiveTab, darkMode, setDarkMode }) => (
  <header className="flex justify-between items-center py-6 px-6 md:px-16 w-full max-w-7xl mx-auto">
    <div className="text-xl font-bold cursor-pointer" onClick={() => setActiveTab('home')}>
      <span className="text-blue-600">Ade</span>.Dev ;
    </div>
    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      {['home', 'about', 'projects', 'skills', 'contact'].map((tab) => (
        <button 
          key={tab}
          onClick={() => setActiveTab(tab)} 
          className={`capitalize transition-colors ${activeTab === tab ? 'text-blue-600' : 'hover:text-blue-500'}`}
        >
          {tab}
        </button>
      ))}
      {/* Theme Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition">
        {darkMode ? (
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        ) : (
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        )}
      </button>
    </nav>
    {/* Mobile Nav Actions */}
    <div className="md:hidden flex items-center gap-4">
      <button onClick={() => setDarkMode(!darkMode)} className="p-2">
        {darkMode ? (
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        ) : (
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        )}
      </button>
    </div>
  </header>
);

export default Navbar;