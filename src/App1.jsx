import { useState, useEffect } from "react";
import "./App.css";
import pp from "./assets/pp.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // 'home' | 'about'

  // Toggle dark mode class on HTML body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 relative pb-20 md:pb-0">
      {/* HEADER / NAVBAR */}
      <header className="flex justify-between items-center py-6 px-6 md:px-16 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-blue-600">Ade's</span> . Dev
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => setActiveTab("home")}
            className={`${activeTab === "home" ? "text-blue-600" : "hover:text-blue-500"}`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`${activeTab === "about" ? "text-blue-600" : "hover:text-blue-500"}`}
          >
            About
          </button>
          <button className="hover:text-blue-500">Projects</button>
          <button className="hover:text-blue-500">Skills</button>
          <button className="hover:text-blue-500">Contact</button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? (
              // Moon Icon
              <svg
                className="w-5 h-5 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            ) : (
              // Sun Icon
              <svg
                className="w-5 h-5 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            )}
          </button>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-10 md:pt-20">
        {/* --- HOME SECTION --- */}
        {activeTab === "home" && (
          <section className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-flex items-center gap-2">
                Hello, I'm 👋
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="text-blue-600">Ade Saep Sulaiman</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
                Software Developer
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
                I build responsive and user-friendly websites and apps with clean code.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto">
                  View Projects
                </button>
                <button className="border border-blue-600 text-blue-600 dark:border-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto">
                  Contact Me
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 text-slate-500 dark:text-slate-400">
                <a
                  href="https://github.com/AdeSaef/"
                  className="hover:text-slate-800 dark:hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-slate-800 dark:hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:adhesaef@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Ade,%20I%20found%20your%20portfolio."
                  className="hover:text-slate-800 dark:hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content / Illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
              {/* Background Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 dark:bg-slate-800/50 rounded-full blur-3xl -z-10"></div>

              {/* Code Editor Mockup */}
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
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center font-mono font-bold">
                      &lt;/&gt;
                    </div>
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
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg flex items-center justify-center font-mono font-bold">
                      &#123;&#125;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- ABOUT ME SECTION --- */}
        {activeTab === "about" && (
          <section className="flex flex-col items-center justify-center pt-8">
            <h2 className="text-2xl font-bold mb-10 pb-2 border-b-4 border-blue-600 self-start md:self-center">
              About Me
            </h2>

            <div className="w-full max-w-md flex flex-col items-center bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden ">
                <img
                  src={pp}
                  alt="foto profile"
                  class="w-full h-full object-cover"
                />
                ;
              </div>

              <p className="text-center text-slate-600 dark:text-slate-300 mb-8 mt-6 leading-relaxed">
                I'm a passionate Software Developer who loves building clean,
                modern, and performant websites and apps.
              </p>

              {/* Details List */}
              <ul className="w-full space-y-4 text-sm md:text-base">
                <li className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 w-24">
                    Name
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Ade Saep Sulaiman
                  </span>
                </li>
                <li className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 w-24">
                    Location
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Indonesia
                  </span>
                </li>
                <li className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 w-24">
                    Email
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 truncate">
                    adhesaef@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 w-24">
                    WhatsApp
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 truncate">
                    +62 821-2126-6405
                  </span>
                </li>
                <li className="flex items-center gap-4 pb-1">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 w-24">
                    Availability
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Open to work
                  </span>
                </li>
              </ul>
            </div>
          </section>
        )}
      </main>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-[#1e293b] border-t border-slate-200 dark:border-slate-800 flex justify-around items-center py-3 pb-safe">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-blue-600" : "text-slate-400"}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={`flex flex-col items-center gap-1 ${activeTab === "about" ? "text-blue-600" : "text-slate-400"}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span className="text-[10px] font-medium">About</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
          <span className="text-[10px] font-medium">Projects</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          <span className="text-[10px] font-medium">Skills</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-[10px] font-medium">Contact</span>
        </button>
      </div>
    </div>
  );
}

export default App;
