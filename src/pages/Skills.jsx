import React from "react";

const Skills = () => (
  <section className="pt-8 max-w-4xl mx-auto animate-fade-in">
    <h2 className="text-2xl font-bold mb-10 pb-2 border-b-4 border-blue-600 inline-block">
      Tech Stack & Skills
    </h2>

    <div className="space-y-10">
      {/* Frontend */}
      <div>
        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          Frontend Development
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            "React.js",
            "Vite.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Bootstrap",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm text-sm font-medium flex items-center gap-2 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Backend & Database */}
      <div>
        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            ></path>
          </svg>
          Backend & Database
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Python", "PHP", "FastAPI", "MySQL", "MongoDB"].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm text-sm font-medium flex items-center gap-2 hover:border-green-300 dark:hover:border-green-700 transition cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-green-500"></div> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning
      <div>
        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          Currently Learning
        </h3>
        <div className="flex flex-wrap gap-4">
          {['NestJS', 'TypeScript'].map((skill) => (
            <div key={skill} className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm text-sm font-medium flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:border-amber-300 dark:hover:border-amber-700 transition cursor-default">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div> {skill}
            </div>
          ))}
        </div>
      </div> */}

      {/* Languages */}
      <div>
        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <svg
            className="w-5 h-5 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            ></path>
          </svg>
          Languages
        </h3>
        <div className="flex flex-wrap gap-4">
          {/* Bahasa Indonesia */}
          <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm flex items-center gap-3 hover:border-purple-300 dark:hover:border-purple-700 transition cursor-default">
            <span className="text-lg" aria-label="Indonesia flag">
              🇮🇩
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Bahasa Indonesia
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Native / Bilingual
              </p>
            </div>
          </div>

          {/* English */}
          <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm flex items-center gap-3 hover:border-purple-300 dark:hover:border-purple-700 transition cursor-default">
            <span className="text-lg" aria-label="UK flag">
              🇬🇧
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                English
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Basic B2 Level
              </p>
            </div>
          </div>

          {/* Japanese */}
          <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm flex items-center gap-3 hover:border-purple-300 dark:hover:border-purple-700 transition cursor-default">
            <span className="text-lg" aria-label="Japan flag">
              🇯🇵
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Japanese
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Elementary (JLPT N4)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
