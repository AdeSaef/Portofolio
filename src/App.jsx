import { useState, useEffect } from "react";
import "./App.css";
import pp from "./assets/pp.jpg";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null); // <-- State untuk handle detail project

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fungsi khusus saat berpindah tab lewat Navbar/BottomNav
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedProject(null); // Pastikan detail project tertutup jika pindah menu lain
  };

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={handleTabChange} />;
      case "about":
        return <About />;
      case "projects":
        // Jika selectedProject terisi, tampilkan Detail. Jika tidak, tampilkan list
        return selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <Projects onSelectProject={setSelectedProject} />
        );
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 relative pb-20 md:pb-0">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-10 md:pt-14 pb-12">
        {renderPage()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
