// import  { useState, useEffect } from 'react';
// import { FaSquareFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
// import { FiInstagram } from "react-icons/fi";
// import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { IoLogoNodejs } from "react-icons/io5";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     // Initial visibility animation
//     setIsVisible(true);

//     // Scroll effect
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div name="Home" className="min-h-screen flex flex-col py-9 justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>

//         {/* Grid pattern overlay */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//       </div>

//       <div className="max-w-screen-xl container mx-auto px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

//           {/* Profile Image Section */}
//           <div
//             className={`w-full md:w-2/5 order-1 md:order-2 mb-8 md:mb-0 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
//               }`}
//           >
//             <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
//               {/* Animated background glow */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>

//               <div className="relative w-full h-full">
//                 <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-500 rounded-full p-1 shadow-xl shadow-emerald-700/30 w-full h-full">
//                   <div className="bg-gray-900 rounded-full p-1 w-full h-full backdrop-blur">
//                     <img
//                       src="profil.jpg"
//                       className="rounded-full w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
//                       alt="Profile"
//                     />
//                   </div>
//                 </div>

//                 {/* Floating tech icons around profile */}
//                 <div className="absolute -top-3 -right-3 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
//                   <FaReact className="text-2xl text-blue-400 animate-spin-slow" />
//                 </div>
//                 <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
//                   <SiJavascript className="text-2xl text-yellow-400" />
//                 </div>
//                 <div className="absolute -bottom-3 -right-3 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
//                   <SiTailwindcss className="text-2xl text-cyan-400" />
//                 </div>
//                 <div className="absolute -bottom-1 -left-5 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
//                   <SiMongodb className="text-2xl text-green-500" />
//                 </div>
//                 <div className="absolute top-1/4 -left-4 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
//                   <IoLogoNodejs className="text-2xl text-green-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div
//             className={`w-full md:w-3/5 order-2 md:order-1 text-center md:text-left transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//               }`}
//           >
//             <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 backdrop-blur-lg text-emerald-500 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
//               Full Stack Developer
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
//               Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Rupesh Kumar Meher</span>
//             </h1>

//             <div className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 flex justify-center md:justify-start items-center h-12">
//               <span className="mr-2">I'm a</span>
//               <ReactTyped
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-semibold"
//                 strings={[
//                   "Student",
//                   "Programmer",
//                   "Full Stack Web Developer",
//                 ]}
//                 typeSpeed={70}
//                 backSpeed={60}
//                 loop
//               />
//             </div>

//             <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
//               I'm currently pursuing my B.Tech in Computer Science and Engineering, passionate about crafting
//               elegant web solutions using modern technologies. I specialize in building full-stack applications
//               with the MERN stack and continuously expanding my skills.
//             </p>

//             <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

//               <a
//                 href="https://github.com/Rup-23"
//                 className="px-8 py-3 bg-gray-800/50 backdrop-blur-lg text-white font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-gray-700/50 transition duration-300 text-center relative overflow-hidden group"
//               >
//                 <span className="relative z-10">VIEW MY WORK</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-800/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
//               </a>

//               <a href="https://drive.google.com/uc?export=download&id=1K3EcZk5vpJchmHtEqFQvaj4SzaT_CV8W"
//                 className="px-8 py-3 bg-gray-800/50 backdrop-blur-lg text-white font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-gray-700/50 transition duration-300 text-center relative overflow-hidden group"
//                 target="_blank" rel="noopener noreferrer">
//                 <span className="relative z-10">DOWNLOAD CV</span>
//               </a>



//             </div>

//             {/* Social Media Links */}
//             <div className="mt-10 sm:mt-12">
//               <h2 className="font-medium text-lg text-gray-300 mb-4">Connect with me</h2>
//               <div className="flex justify-center md:justify-start gap-5 mt-2">
//                 <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
//                   <FaSquareFacebook className="text-xl" />
//                 </a>
//                 <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
//                   <FiInstagram className="text-xl" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
//                   <FaLinkedin className="text-xl" />
//                 </a>
//                 <a href="https://github.com/Rup-23" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
//                   <FaGithub className="text-xl" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Technologies Section */}
//         <div className={`mt-16 sm:mt-24 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//           <div className="text-center mb-8 sm:mb-10">
//             <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Technologies I Work With</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mt-3"></div>
//           </div>

//           <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-10 flex-wrap">
//             {[{ icon: <SiMongodb className="text-green-500 group-hover:text-white text-3xl" />, label: 'MongoDB' },
//             { icon: <SiExpress className="text-gray-300 group-hover:text-white text-3xl" />, label: 'Express' },
//             { icon: <FaReact className="text-blue-400 group-hover:text-white text-3xl" />, label: 'React' },
//             { icon: <IoLogoNodejs className="text-green-600 group-hover:text-white text-3xl" />, label: 'Node.js' },
//             { icon: <SiTailwindcss className="text-cyan-400 group-hover:text-white text-3xl" />, label: 'Tailwind' },
//             { icon: <SiJavascript className="text-yellow-400 group-hover:text-white text-3xl" />, label: 'JavaScript' }].map((tech, i) => (
//               <div key={i} className="tech-card group flex flex-col items-center justify-center">
//                 <div className="tech-icon-container">


//                   {tech.icon}
//                 </div>
//                 <span className="tech-label">{tech.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-grid-pattern {
//           background-size: 30px 30px;
//           background-image: 
//             linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
//         }

//         .tech-card {
//           @apply flex flex-col items-center justify-center p-4 md:p-5 rounded-xl cursor-pointer transition-all duration-300;
//           @apply bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm;
//           @apply border border-gray-700 hover:border-emerald-500/50;
//           @apply hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-2;
//           width: 100px;
//           height: 100px;
//         }

//         @media (min-width: 640px) {
//           .tech-card { width: 120px; height: 120px; }
//         }

//         @media (min-width: 768px) {
//           .tech-card { width: 130px; height: 130px; }
//         }

//         .tech-icon-container {
//           @apply flex items-center justify-center mb-3;
//           height: 42px;
//         }

//         .tech-label {
//           @apply mt-2 text-sm sm:text-base font-medium text-gray-300 group-hover:text-white;
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 12s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;



"use client";
import { motion } from "framer-motion";
import { FaSquareFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";

/* =====================
   Animation Variants
===================== */
const heroVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const socialLinks = [
  { Icon: FaSquareFacebook, href: "https://www.facebook.com/", label: "Facebook" },
  { Icon: FiInstagram, href: "https://www.instagram.com/", label: "Instagram" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/",
    label: "LinkedIn",
  },
  { Icon: FaGithub, href: "https://github.com/Rup-23", label: "GitHub" },
];

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center">
      {/* ================= Background ================= */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">
          {/* ================= TEXT ================= */}
          <motion.div
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            className="w-full md:w-3/5 text-center md:text-left"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-slate-800/60 border border-indigo-500/20 text-indigo-400 text-sm mb-5">
              Full Stack Developer
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Rupesh Kumar Meher
              </span>
            </h1>

            <div className="mt-6 text-xl sm:text-2xl text-slate-300 flex justify-center md:justify-start">
              <span className="mr-2">I&apos;m a</span>
              <ReactTyped
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-300"
                strings={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Web Developer",
                ]}
                typeSpeed={70}
                backSpeed={60}
                loop
              />
            </div>

            <p className="mt-6 text-slate-300 leading-relaxed md:leading-loose max-w-xl mx-auto md:mx-0">
              B.Tech graduate in Computer Science & Engineering with a strong
              interest in building scalable, elegant, and user-focused web
              applications. I specialize in the MERN stack and Next.js, with a
              clear emphasis on clean UI, smooth interactions, and continuous
              growth as an engineer.
            </p>

            {/* ================= CTAs ================= */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Rup-23"
                className="px-8 py-3 rounded-lg font-medium border border-indigo-500/40 bg-indigo-600/20 hover:bg-indigo-600/30 hover:shadow-lg hover:shadow-indigo-500/20 transition active:scale-95"
              >
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1VbFwRUQEz2H0mRHUCVzTURg4Pfz3Fjrk/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg font-medium border border-slate-600 bg-slate-800/50 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition active:scale-95"
              >
                Download CV
              </a>
            </div>

            {/* ================= SOCIAL ================= */}
            <div className="mt-12">
              <h3 className="text-slate-400 mb-4">Connect with me</h3>
              <div className="flex gap-5 justify-center md:justify-start">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-xl"
              />

              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-indigo-500 to-blue-500">
                <img
                  src="profil1.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover bg-slate-900"
                />
              </div>

              {/* Floating Tech Icons */}
              <span className="icon-float -top-3 -right-3">
                <FaReact className="text-blue-400 animate-spin-slow" />
              </span>
              <span className="icon-float bottom-0 -right-4">
                <SiJavascript className="text-yellow-400" />
              </span>
              <span className="icon-float bottom-0 -left-4">
                <SiMongodb className="text-green-500" />
              </span>
              <span className="icon-float top-1/3 -left-5">
                <IoLogoNodejs className="text-green-600" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* ================= TECH STACK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            Technologies I Work With
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
              { icon: <SiExpress />, label: "Express", color: "text-slate-300" },
              { icon: <FaReact />, label: "React", color: "text-blue-400" },
              { icon: <IoLogoNodejs />, label: "Node.js", color: "text-green-600" },
              {
                icon: <SiTailwindcss />,
                label: "Tailwind",
                color: "text-cyan-400",
              },
              {
                icon: <SiJavascript />,
                label: "JavaScript",
                color: "text-yellow-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.05 }}
                className="w-28 h-28 rounded-xl bg-slate-800/70 border border-slate-700 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-indigo-500/20 transition"
              >
                <div className={`text-3xl ${t.color}`}>{t.icon}</div>
                <span className="mt-3 text-sm text-slate-300">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= EXTRA STYLES ================= */}
      <style>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
        }
        .icon-float {
          position: absolute;
          background: #020617;
          padding: 0.5rem;
          border-radius: 9999px;
          border: 1px solid #334155;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
