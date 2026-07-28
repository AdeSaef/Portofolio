import React, { useState } from 'react';
import pp from '../assets/pp.jpg';
import itg from '../assets/School/itg.jpg';
import smk from '../assets/School/smkn.png';
import mts from '../assets/School/mts.jpg';
import sd from '../assets/School/sd.png';
import sert1 from '../assets/sertifikat/its.jpg'
import sert2 from '../assets/sertifikat/kominfo.jpg'
import sert3 from '../assets/sertifikat/kominfo1.jpg'
import sert4 from '../assets/sertifikat/learningx.jpg'
import sert5 from '../assets/sertifikat/ptesol.jpg'
import sert6 from '../assets/sertifikat/lp3b.jpg'

// Data Pendidikan
const educationData = [
  {
    id: 1,
    school: 'Institut Teknologi Garut',
    degree: 'S1 Teknik Informatika',
    gpa: '3.87',
    years: '2021 - 2025',
    logo: itg,
    desc: null,
  },
  {
    id: 2,
    school: 'SMKN 9 Garut',
    degree: 'Multimedia',
    gpa: null,
    years: '2018 - 2021',
    logo: smk,
    desc: null
  },
  {
    id: 3,
    school: 'MTs Attaufiq Cisurupan',
    degree: 'Madrasah Tsanawiyah',
    gpa: null,
    years: '2015 - 2018',
    logo: mts,
    desc: null
  },
  {
    id: 4,
    school: 'SDN 1 Sirnajaya',
    degree: 'SD Sederajat',
    gpa: null,
    years: '2009 - 2015',
    logo: sd,
    desc: null
  }
];

// Data Sertifikasi
const certificationsData = [
  {
    id: 1,
    title: 'Pelatihan Bahasa – Japan Internasional Indonesia',
    issuer: 'Japan Internasional Indonesia',
    date: 'Januari 2026 – Juni 2026',
    score: null,
    image: null
  },
  {
    id: 2,
    title: 'PTESOL',
    issuer: 'Balai Bahasa Universitas Pendidikan Indonesia (UPI)',
    date: 'Februari 2025 – Februari 2027',
    score: 'Skor: 503',
    image: sert5
  },
  {
    id: 3,
    title: 'Information Technology Specialist (IT Specialist): Databases',
    issuer: 'Certiport',
    date: 'Desember 2024',
    score: null,
    image: sert1
  },
  {
    id: 4,
    title: 'Using Artificial Intelligent and Mobile Technology in English Learning Vol. 1',
    issuer: 'LP3B ITG',
    date: 'Juni 2024',
    score: null,
    image: sert6
  },
  {
    id: 5,
    title: 'MBKM Course Batch 6 : Fullstack Web Development',
    issuer: 'LearningX',
    date: 'Februari 2024 – Mei 2024',
    score: null,
    image: sert4
  },
  {
    id: 6,
    title: 'Seminar Nasional dan Lokakarya Pandu Digital',
    issuer: 'Kominfo',
    date: 'Juli 2023',
    score: null,
    image: sert3
  },
  {
    id: 7,
    title: 'Literasi Digital : Untuk Indonesia Makin Cakap Digital',
    issuer: 'Kominfo',
    date: 'Oktober 2021',
    score: null,
    image: sert2
  }
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="pt-8 max-w-5xl mx-auto animate-fade-in relative">
      <h2 className="text-2xl font-bold mb-10 pb-2 border-b-4 border-blue-600 inline-block">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Kolom Kiri: Profil Singkat & Tombol CV */}
        <div className="w-full md:w-1/3">
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center sticky top-24">
            <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-6 overflow-hidden border-4 border-white dark:border-slate-700 shadow-sm">
              <img src={pp} alt="Ade Saep" className="w-full h-full object-cover" 
                   onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Ade+Saep&background=0D8ABC&color=fff"; }} />
            </div>
            
            <h3 className="font-bold text-xl mb-1 text-slate-800 dark:text-slate-100">Ade Saep Sulaiman</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-6 text-center">
              Software Engineer
            </p>

            <ul className="w-full space-y-4 text-sm mb-6">
              <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 pb-3">
                <span className="text-slate-500 dark:text-slate-400">Location</span>
                <span className="font-medium text-slate-700 dark:text-slate-200">Garut, Indonesia</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 pb-3">
                <span className="text-slate-500 dark:text-slate-400">Email</span>
                <span className="font-medium text-slate-700 dark:text-slate-200 truncate ml-4">adhesaef@gmail.com</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span className="text-slate-500 dark:text-slate-400">Status</span>
                <span className="font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-xs">Open to Work</span>
              </li>
            </ul>

            <a href="https://drive.google.com/file/d/11FuSU-SMCOoxMCDijUGVnVUC7XmCK9pD/view?usp=sharing" download className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white py-3 rounded-xl font-medium transition flex justify-center items-center gap-2 shadow-sm">
              Download CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Deskripsi, Pendidikan, Sertifikasi */}
        <div className="w-full md:w-2/3 space-y-8">
          
          {/* Background / Bio */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900/50 transition duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Background
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              <p>
                Lulusan S1 Teknik Informatika dengan IPK 3.87 dan pengalaman sebagai Frontend Developer di PT LSKK ITB. Memiliki pengalaman dalam pengembangan aplikasi web menggunakan React.js (Vite), Tailwind CSS, Laravel, Native PHP, Python, FastAPI, dan Flask. Terbiasa membangun antarmuka pengguna yang responsif, mengintegrasikan REST API, serta mengelola database MySQL dan noSQL dalam pengembangan aplikasi berbasis web. 
              </p>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900/50 transition duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
              Pendidikan
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row gap-5 items-start pb-6 border-b border-slate-100 dark:border-slate-800 last:border-b-0 last:pb-0">
                  <div className="w-16 h-16 shrink-0 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700">
                    <img 
                      src={edu.logo} 
                      alt={edu.school} 
                      className="max-w-full max-h-full object-contain" 
                      onError={(e) => { 
                        e.target.onerror = null; 
                        // Fallback icon jika gambar belum ada
                        e.target.src = `https://ui-avatars.com/api/?name=${edu.school.charAt(0)}&background=f1f5f9&color=64748b&font-size=0.5`; 
                      }} 
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">{edu.school}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">
                      {edu.degree}
                      {edu.gpa && <span className="text-slate-500 dark:text-slate-400 font-normal"> • {edu.gpa}</span>}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{edu.years}</p>
                    {edu.desc && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify mt-3">
                        {edu.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikasi & Penghargaan */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900/50 transition duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              Sertifikasi & Penghargaan
            </h3>
            
            <div className="space-y-6">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex gap-5 items-start pb-5 border-b border-slate-100 dark:border-slate-800 last:border-b-0 last:pb-0">
                  <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"></path></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">{cert.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {cert.issuer} • {cert.date} {cert.score && <span className="text-blue-600 dark:text-blue-400 font-medium">({cert.score})</span>}
                    </p>
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mt-2 hover:underline cursor-pointer"
                    >
                      View Detail Sertifikat <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL VIEW DETAIL SERTIFIKAT */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative">
            
            {/* Header Modal */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pr-4">{selectedCert.title}</h3>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Content: Gambar Sertifikat */}
            <div className="w-full h-72 sm:h-96 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x500/0f172a/ffffff?text=Certificate+Image+Preview";
                }}
              />
            </div>

            {/* Footer Detail */}
            <div className="mt-4 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <span>Penerbit: {selectedCert.issuer}</span>
              <span>{selectedCert.date}</span>
            </div>
            
          </div>
        </div>
      )}

    </section>
  );
};

export default About;