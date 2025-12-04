import React, { useState } from 'react';
import {
  Menu, X, Github, Linkedin, Mail,
  Code, Database, Globe, Award, User, Layers, Palette, Terminal, Cpu,
  Layout, Server, Smartphone, FileCode, Figma, Triangle, Table, FileText, Atom, Flame, Send, Box,
  Phone, MapPin, Download, ExternalLink, Calendar 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA SKILLS ---
  const skills = [
    { name: "HTML5", icon: <FileCode size={28} />, color: "text-orange-500", bar: "bg-orange-500", progress: 95 },
    { name: "Tailwind CSS", icon: <Palette size={28} />, color: "text-cyan-400", bar: "bg-cyan-400", progress: 90 },
    { name: "JavaScript", icon: <Code size={28} />, color: "text-yellow-400", bar: "bg-yellow-400", progress: 85 },
    { name: "Dart", icon: <Terminal size={28} />, color: "text-blue-400", bar: "bg-blue-400", progress: 75 },
    { name: "Flutter", icon: <Smartphone size={28} />, color: "text-blue-500", bar: "bg-blue-500", progress: 80 },
    { name: "MySQL", icon: <Database size={28} />, color: "text-green-600", bar: "bg-green-600", progress: 80 },
    { name: "PHP", icon: <Server size={28} />, color: "text-indigo-400", bar: "bg-indigo-400", progress: 70 },
    { name: "Laravel", icon: <Layout size={28} />, color: "text-red-500", bar: "bg-red-500", progress: 75 },
    { name: "Figma", icon: <Figma size={28} />, color: "text-purple-500", bar: "bg-purple-500", progress: 85 },
    { name: "GitHub", icon: <Github size={28} />, color: "text-white", bar: "bg-white", progress: 90 },
    { name: "Vercel", icon: <Triangle size={28} />, color: "text-white", bar: "bg-white", progress: 80 },
    { name: "Excel", icon: <Table size={28} />, color: "text-green-500", bar: "bg-green-500", progress: 85 },
    { name: "Word", icon: <FileText size={28} />, color: "text-blue-600", bar: "bg-blue-600", progress: 90 },
    { name: "React", icon: <Atom size={28} />, color: "text-cyan-400", bar: "bg-cyan-400", progress: 85 },
    { name: "Node.js", icon: <Server size={28} />, color: "text-green-500", bar: "bg-green-500", progress: 70 },
    { name: "Python", icon: <Code size={28} />, color: "text-blue-400", bar: "bg-blue-400", progress: 65 },
    { name: "Git", icon: <Github size={28} />, color: "text-orange-600", bar: "bg-orange-600", progress: 85 },
    { name: "Bootstrap", icon: <Layout size={28} />, color: "text-purple-600", bar: "bg-purple-600", progress: 80 },
    { name: "Firebase", icon: <Flame size={28} />, color: "text-orange-500", bar: "bg-orange-500", progress: 75 },
    { name: "Postman", icon: <Send size={28} />, color: "text-orange-500", bar: "bg-orange-500", progress: 80 },
    { name: "VS Code", icon: <Terminal size={28} />, color: "text-blue-500", bar: "bg-blue-500", progress: 95 },
    { name: "Docker", icon: <Box size={28} />, color: "text-blue-600", bar: "bg-blue-600", progress: 60 },
  ];

  // --- DATA PROJECTS ---
  const projects = [
    {
      id: 1,
      title: "Roiyall Coffee Website",
      category: "Website",
      categoryColor: "bg-green-500",
      desc: "I utilized PHP with the Laravel framework, JavaScript, and MySQL to develop and manage the Roiyall Coffee website. During the development process, I designed and implemented a responsive frontend interface to ensure optimal functionality across various devices. In addition, I created and managed the MySQL database to store and retrieve essential data related to Roiyall Coffee’s operations and product. Through this combination of technologies, the website was built to be stable, well-structured, and easily scalable for future enhancements.",
      tech: [
        { name: "PHP", color: "bg-indigo-500" },
        { name: "Laravel", color: "bg-red-500" },
        { name: "MySQL", color: "bg-blue-600" }
      ],
      image: "/roiyall.jpeg",
      githubLink: "https://github.com/zensantomart017/PA-1-Rancang-Bangun-Website-Roiyall-Coffee",
      hasCodeButton: true 
    },
    {
      id: 2,
      title: "Online Shoe Sales App",
      category: "Application",
      categoryColor: "bg-orange-500",
      desc: "Aplikasi mobile e-commerce untuk penjualan sepatu dengan fitur sinkronisasi data realtime menggunakan Flutter dan Firebase.",
      tech: [
        { name: "Flutter", color: "bg-cyan-500" },
        { name: "Dart", color: "bg-blue-500" },
        { name: "Firebase", color: "bg-yellow-600" }
      ],
      image: "/sepatu.jpeg",
      githubLink: "https://github.com/IrvanAstroboy/PROJECT-PAM-KEL10",
      hasCodeButton: true 
    },
    {
      id: 3,
      title: "Web Server Configuration",
      category: "Web Server",
      categoryColor: "bg-purple-500",
      desc: "Konfigurasi server web pada Amazon EC2 menggunakan AWS Management Console untuk deployment aplikasi yang aman dan scalable.",
      tech: [
        { name: "Linux", color: "bg-gray-600" },
        { name: "Apache2", color: "bg-red-600" },
        { name: "AWS", color: "bg-orange-600" },
        { name: "Analysis", color: "bg-purple-600" }
      ],
      image: "/siska.jpeg",
      githubLink: "https://github.com/irvanastroboy/aws-config",
      hasCodeButton: false // Tombol Code dihapus
    },
    {
        id: 4,
        title: "Sales Performance Analysis",
        category: "Analysis",
        categoryColor: "bg-pink-500",
        desc: "Analisis performa penjualan produk Nike menggunakan metode perbandingan dan kontribusi kategori produk dengan visualisasi Looker Studio.",
        tech: [
          { name: "Excel", color: "bg-green-600" },
          { name: "Looker Studio", color: "bg-blue-500" },
          { name: "Analysis", color: "bg-purple-600" }
        ],
        image: "/sss.jpeg",
        githubLink: "https://github.com/irvanastroboy/sales-analysis",
        hasCodeButton: false // Tombol Code dihapus
      },
    {
      id: 5,
      title: "Aplikasi Puskesmas (PUSMASIB)",
      category: "Application",
      categoryColor: "bg-orange-500",
      desc: "Aplikasi mobile untuk layanan kesehatan Puskesmas Siborongborong.",
      tech: [
        { name: "Flutter", color: "bg-cyan-500" },
        { name: "Dart", color: "bg-blue-500" },
        { name: "Firebase", color: "bg-yellow-600" }
      ],
      image: "/pusmasib.jpeg",
      githubLink: "https://github.com/Roy-oy/PA2_Kelompok03",
      hasCodeButton: true 
    },
    {
        id: 6,
        title: "LPK SO MORI CENTRE Website",
        category: "Website",
        categoryColor: "bg-pink-500",
        desc: "Website profil dan pendaftaran siswa untuk LPK SO MORI CENTRE.",
        tech: [
          { name: "Laravel", color: "bg-red-600" },
          { name: "Tailwind", color: "bg-blue-500" },
          { name: "MySQL", color: "bg-pink-600" },
        ],
        image: "/lpk.png",
        githubLink: "https://github.com/felixnatanaelbutarbutar/lpk-site",
        hasCodeButton: true 
      },
  ];

  const certificates = [
    { 
      id: 1,
      title: "Developing Front-End Apps with React", 
      issuer: "IBM", 
      date: "Mei 2023",
      desc: "Completed the “Developing Front-End Apps with React” course authorized by IBM through Coursera. Gained practical skills in building dynamic user interfaces using React, including component-based architecture, state management, and integration with backend services.",
      image: "/1.jpeg"
    },
    { 
      id: 2,
      title: "Full Stack Application Development Capstone Project", 
      issuer: "IBM", 
      date: "Juni 2023",
      desc: "Completed the “Full Stack Application Development Capstone Project” authorized by IBM through Coursera. Gained hands-on experience in designing, building, and deploying a full-stack application by applying both front-end and back-end development skills. Covered practical workflows such as API integration, database operations, server-side logic, and modern UI development to consolidate full-stack engineering capabilities through a real-world project scenario. ",
      image: "/2.jpeg"
    },
    { 
      id: 3,
      title: "Full Stack Software Developer Assessment", 
      issuer: "IBM", 
      date: "Agustus 2023",
      desc: "Completed the “Full Stack Software Developer Assessment” authorized by IBM through Coursera. Demonstrated practical proficiency across full-stack development skills, including front-end design, back-end logic, APIs, databases, and deployment workflows. Successfully validated technical competency through hands-on assessments aligned with industry standards for full-stack software engineering. ",
      image: "/3.jpeg"
    },
    { 
      id: 4,
      title: "Generative AI_Elevate your Software Development Career", 
      issuer: "IBM", 
      date: "Oktober 2023",
      desc: "Completed the “Generative AI: Elevate Your Software Development Career” course authorized by IBM through Coursera. Learned how to integrate generative AI tools and workflows into modern software development processes, including prompt engineering, AI-assisted coding, model capabilities, and automation techniques. Strengthened the ability to leverage AI to improve productivity, code quality, and problem-solving efficiency in real-world development scenarios. ",
      image: "/4.jpeg"
    },
    { 
      id: 5,
      title: "Python for Data Science, AI & Development", 
      issuer: "IBM", 
      date: "Oktober 2023",
      desc: "Completed the “Python for Data Science, AI & Development” course authorized by IBM through Coursera. Gained foundational and practical skills in Python programming for data-driven development, including data manipulation, file handling, libraries such as NumPy and Pandas, API usage, and basic AI/ML workflows. Strengthened the ability to apply Python to real-world data science and software development tasks. ",
      image: "/5.jpeg"
    },

    { 
      id: 6,
      title: "Konsep Pemrograman", 
      issuer: "Komdigi", 
      date: "Oktober 2023",
      desc: "Completed the Konsep Pemrograman Micro Skill training as part of the Digital Talent Scholarship 2025, organized by the Indonesian Ministry of Communication and Informatics (KOMDIGI) .Held in Jakarta and certified on August 30, 2025, provided foundational knowledge in programming concepts. ",
      image: "/7.jpeg"
    },
    { 
      id: 7,
      title: "Software Developer Career Guide and Interview Preparation", 
      issuer: "IBM", 
      date: "Oktober 2023",
      desc: "Completed the Software Developer Career Guide and Interview Preparation course, authorized by IBM and offered through Coursera. This non-credit online course, certified on September 26, 2025, provided essential guidance on career paths and interview strategies in software development. ",
      image: "/8.jpeg"
    },
    { 
      id: 8,
      title: "Software Quality Assurance and Testing", 
      issuer: "Boord Infinity", 
      date: "Oktober 2023",
      desc: "Completed the Software Quality Assurance and Testing Specialization, offered by Board Infinity through Coursera. This online consisting of 4 courses, was completed on September 30, 2025, covering foundational to advanced topics in software quality assurance, automation, testing practices, and a capstone project. ",
      image: "/9.jpeg"
    },
  ];

  // --- NAVBAR ---
  const Navbar = () => (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg shadow-lg z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            Full Stack Developer<span className="text-white">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded transition" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="font-sans text-slate-200 bg-slate-950 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* --- HOME SECTION (ANIMASI BLOB & FOTO TRANSPARAN) --- */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
           <div className="absolute w-[30rem] h-[30rem] bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
           <div className="absolute w-[28rem] h-[28rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000" style={{ left: '60%', top: '40%' }}></div>
           <div className="absolute w-[20rem] h-[20rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-2000" style={{ right: '20%', bottom: '20%' }}></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative z-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 text-cyan-400 animate-fade-in-left backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>

            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up tracking-tight">
              Whats Up !, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">I'm Irvan Agustriono</span>
            </h1>

            <div className="flex justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="group relative px-8 py-3 bg-cyan-600 rounded-xl font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(8,145,178,0.5)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Hubungi Saya
              </a>
              <a href="#projects" className="px-8 py-3 bg-transparent border border-slate-600 rounded-xl font-bold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-900/50 transition-all hover:-translate-y-1">
                Lihat Karya
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center relative group">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 blur-lg animate-spin-slow transition duration-500 group-hover:opacity-100"></div>
              
              <img src="/ddd.jpg" alt="Profile" className="relative w-full h-full object-cover rounded-[3rem] z-10 drop-shadow-2xl transform transition duration-500 hover:scale-105" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
              
              <div className="absolute -left-2 md:-left-8 top-12 z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                {/* <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-3 pr-5 rounded-2xl border border-slate-700/50 shadow-xl">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Code size={20} /></div>
                  <div><p className="text-[10px] text-slate-400 uppercase">Role</p><p className="text-sm font-bold text-white">Developer</p></div>
                </div> */}
              </div>
              <div className="absolute -right-2 md:-right-8 bottom-20 z-30 animate-pulse" style={{ animationDuration: '4s' }}>
                {/* <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-3 pr-5 rounded-2xl border border-slate-700/50 shadow-xl">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Cpu size={20} /></div>
                  <div><p className="text-[10px] text-slate-400 uppercase">Focus</p><p className="text-sm font-bold text-white">Logic</p></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT (SPLIT LAYOUT) --- */}
      <section id="about" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div className="w-full md:w-2/3 bg-slate-950/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <User className="text-cyan-400" /> About Me
              </h2>
              <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider font-semibold">
                Developer • Problem solver • System thinker
              </p>
              <div className="text-slate-300 leading-relaxed space-y-4 mb-8 text-lg">
             <p>  I am a student at Del Institute of Technology, majoring in Information Technology. During my studies, I successfully completed a final project and gained hands-on experience developing web and mobile applications. I have strong skills in Laravel, JavaScript, CSS, MySQL, Java, SQL, Dart (Flutter), and Python, and I am passionate about continuing to learn and adapt to new technologies.</p> 
              <p>Through various academic and personal projects, I have built a solid foundation in front-end and back-end development, and I am motivated to contribute fresh ideas, creativity, and dedication as I begin my professional career. </p>
              </div>
              <a href="/cv.pdf" download="CV_Irvan_Agustriono.pdf" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1 cursor-pointer">
                <Download size={20} /> Download CV
              </a>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">Irvan Agustriono</h3>
                <p className="text-cyan-400 font-medium">Full-Stack Developer</p>
                <p className="text-slate-500 text-xs mt-2">Focused on scalable web & mobile systems</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 shadow-lg flex-1 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-900 rounded-xl text-cyan-400 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all"><Phone size={24} /></div>
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Telepon</p><p className="text-white font-medium group-hover:text-cyan-400 transition-colors">+62 822-8447-1634</p></div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-900 rounded-xl text-purple-400 group-hover:bg-purple-500/10 group-hover:scale-110 transition-all"><Mail size={24} /></div>
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Email</p><p className="text-white font-medium group-hover:text-purple-400 transition-colors">irvanastroboy@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-900 rounded-xl text-red-400 group-hover:bg-red-500/10 group-hover:scale-110 transition-all"><MapPin size={24} /></div>
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Lokasi</p><p className="text-white font-medium group-hover:text-red-400 transition-colors">Siborongborong, Indonesia</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (GRID CARD STYLE) --- */}
      <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center items-center gap-3"><Layers className="text-cyan-400" /> Technical Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A collection of technologies and tools that I use to build quality digital products.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/20 relative overflow-hidden">
                <div className={`mb-4 p-3 rounded-full bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>{skill.icon}</div>
                <h3 className="text-slate-200 font-semibold text-sm text-center mb-2">{skill.name}</h3>
                <div className={`h-1 w-12 rounded-full ${skill.bar} opacity-60 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}></div>
                <div className={`absolute inset-0 ${skill.bar} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (CARD STYLE) --- */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center items-center gap-3"><Code className="text-purple-400" /> My Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Some of the best works that I have done with great dedication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-700">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="relative h-48 overflow-hidden block cursor-pointer">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" />
                  <div className={`absolute top-4 right-4 ${project.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10`}>{project.category}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </a>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-4 leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className={`px-3 py-1 text-[10px] font-bold text-white rounded-full ${t.color} bg-opacity-20 border border-white/10`}>{t.name}</span>
                    ))}
                  </div>
                  {/* CONDITIONAL RENDER BUTTON CODE */}
                  {project.hasCodeButton && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 flex items-center justify-center gap-2 border border-slate-600 text-cyan-400 rounded-full font-bold hover:border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATES --- */}
      <section id="certificates" className="py-24 bg-blue-900/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2"><Award className="text-blue-300" /> Certificates</h2>
            <p className="text-slate-400">Evidence of expertise and continuous learning.</p>
          </div>
          
          {/* UBAH GRID MENJADI 4 KOLOM (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
                
                {/* Image Container (Full Width) */}
                <div className="w-full h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" 
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-blue-400" />
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{cert.title}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                    {cert.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT INFORMATION (UPDATED CARD STYLE) --- */}
      <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center md:text-left">Contact Information</h2>
          
          <div className="grid grid-cols-1 gap-6">
            
            {/* Location Card */}
            <div className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                <p className="text-slate-400">Siborongborong, Indonesia</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                <p className="text-slate-400">irvanlumbangaol2019@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                <p className="text-slate-400">+62 822 8447 1634</p>
              </div>
            </div>

            {/* Website Card */}
            <a href="https://www.irvanagustriono.my.id/" target="_blank" rel="noopener noreferrer" className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex items-center gap-6 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Website</h3>
                <p className="text-slate-400">https://www.irvanagustriono.my.id/</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <footer className="py-8 bg-black text-center border-t border-slate-900">
        {/* <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Irvan Agustriono. Crafted with <span className="text-red-500">❤</span> using React.</p> */}
      </footer>
    </div>
  );
};

export default App;