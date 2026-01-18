// import  { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const skillsData = [
//     {
//       category: "Frontend",
//       skills: [
//         { src: "html.png", label: "HTML5", proficiency: 90 },
//         { src: "css.jpg", label: "CSS3", proficiency: 85 },
//         { src: "javascript.png", label: "JavaScript", proficiency: 80 },
//         { src: "reactjs.png", label: "React.js", proficiency: 85 },
//         { src: "tailwind.png", label: "Tailwind", proficiency: 80 },
//         { src: "nextjs.png", label: "Next.js", proficiency: 75 },
//         { src: "redux.png", label: "Redux", proficiency: 70 },
//         { src: "typescript.png", label: "TypeScript", proficiency: 75 },
//         { src: "reactnative.png", label: "React Native", proficiency: 65 },
//         { src: "figma.png", label: "Figma", proficiency: 60 }
//       ]
//     },
//     {
//       category: "Backend",
//       skills: [
//         { src: "node.png", label: "Node.js", proficiency: 75 },
//         { src: "express.png", label: "Express", proficiency: 75 },
//         { src: "mongodb.jpg", label: "MongoDB", proficiency: 80 },
//         { src: "sql.jpg", label: "MySQL", proficiency: 70 },
//         { src: "jango.png", label: "Django", proficiency: 65 },
//         { src: "redish.png", label: "Redis", proficiency: 60 },
//         { src: "restapi.png", label: "REST API", proficiency: 75 },
//         { src: "firebase.png", label: "Firebase" }
//       ]
//     },
//     {
//       category: "Programming Languages",
//       skills: [
//         { src: "c.png", label: "C", proficiency: 75 },
//         { src: "python.png", label: "Python", proficiency: 70 },
//         { src: "java.png", label: "Java", proficiency: 65 }
//       ]
//     },
//     {
//       category: "Tools & Platforms",
//       skills: [
//         { src: "GitHub-Logo.png", label: "GitHub", proficiency: 85 },
//         { src: "docker.png", label: "Docker", proficiency: 65 }
//       ]
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div name="About" className="w-full min-h-screen bg-gray-950 py-20 text-white">
//       <div className="max-w-screen-xl mx-auto px-6 md:px-12">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-sm uppercase tracking-widest font-semibold">Get To Know</h2>
//           <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 font-bold mt-2">About Me</h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section */}
//           <motion.div
//             className="lg:w-2/5"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative group">
//               <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl opacity-60 blur-lg group-hover:opacity-100 transition duration-1000"></div>
//               <div className="absolute -inset-6 bg-gray-900 rounded-2xl opacity-0 group-hover:opacity-80 transition duration-500"></div>
//               <div className="relative bg-gray-800 p-2 rounded-2xl shadow-2xl">
//                 <img
//                   src="About.png"
//                   alt="About Me"
//                   className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
//                   style={{ maxHeight: "480px" }}
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             className="lg:w-3/5"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm">
//               <h3 className="text-2xl font-bold mb-4 text-emerald-500">My Journey</h3>
//               <div className="text-gray-300 space-y-4 leading-relaxed">
//                 <p>
//                   I am currently pursuing my <span className="text-emerald-400 font-medium">B.Tech in Computer Science and Engineering</span>, with a passionate focus on full-stack development.
//                 </p>
//                 <p>
//                   The path into coding wasn't always smooth—I faced numerous challenges initially... but my <span className="text-emerald-400 font-medium">persistence and determination</span> carried me through.
//                 </p>
//                 <p>
//                   Through countless hours of practice, I've gained not only technical skills but also <span className="text-emerald-400 font-medium">resilience and creativity</span>.
//                 </p>
//                 <p>
//                   My goal is to build intuitive, impactful web solutions using my skills and passion for development.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                 {[
//                   ["10+", "Projects Completed"],
//                   ["15+", "Technologies"],
//                   ["500+", "Hours Coding"],
//                   ["2+", "Years Learning"]
//                 ].map(([count, label], i) => (
//                   <div key={i} className="p-4 bg-gray-800 rounded-2xl text-center border border-gray-700 shadow">
//                     <h4 className="text-4xl font-bold text-emerald-500">{count}</h4>
//                     <p className="text-gray-400 mt-1">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Skills */}
//         <motion.div
//           className="mt-24"
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-sm uppercase tracking-widest font-semibold">What I Can Do</h2>
//             <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 font-bold mt-2">My Skills</h1>
//             <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
//           </div>

//           <div className="space-y-16">
//             {skillsData.map((category, categoryIndex) => (
//               <motion.div key={categoryIndex} variants={itemVariants}>
//                 <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-emerald-500">{category.category}</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skillIndex}
//                       variants={itemVariants}
//                       className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-emerald-500 transition-all duration-300 group shadow-md"
//                     >
//                       <div className="flex flex-col items-center">
//                         <div className="w-16 h-16 bg-gray-700 rounded-full p-3 mb-3 flex items-center justify-center group-hover:bg-emerald-900/30 transition">
//                           <img className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" src={skill.src} alt={skill.label} />
//                         </div>
//                         <h4 className="text-lg font-medium mb-2">{skill.label}</h4>
//                         {/* Progress bar removed */}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Timeline */}
//         <motion.div
//           className="mt-24"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-sm uppercase tracking-widest  font-semibold">My Background</h2>
//             <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 mt-2">Education & Experience</h1>
//             <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
//           </div>

//           <div className="relative">
//             <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-700/30"></div>
//             <div className="space-y-12">
//               {[
//                 {
//                   title: "B.Tech in Computer Science",
//                   time: "2021 - 2025",
//                   desc: "Pursuing my bachelor's degree with focus on software development and computer science fundamentals.",
//                   reverse: false
//                 },
//                 {
//                   title: "Full Stack Development Course",
//                   time: "2023 - 2024",
//                   desc: "Completed comprehensive training in MERN stack development with hands-on project experience.",
//                   reverse: true
//                 },
//                 {
//                   title: "Freelance Web Developer",
//                   time: "2025 - Present",
//                   desc: "Working on various web development projects for clients, focusing on responsive and user-friendly interfaces.",
//                   reverse: false
//                 }
//               ].map(({ title, time, desc, reverse }, i) => (
//                 <div
//                   key={i}
//                   className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}
//                 >
//                   <div
//                     className={`md:w-1/2 ${
//                       reverse ? "md:pl-12" : "md:pr-12 md:text-right"
//                     } mb-6 md:mb-0`}
//                   >
//                     <div className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300">
//                       <h3 className="text-xl font-bold text-emerald-500">{title}</h3>
//                       <p className="text-gray-400 mt-1">{time}</p>
//                       <p className="mt-3">{desc}</p>
//                     </div>
//                   </div>
//                   <div className="md:w-1/2 flex md:justify-start"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;

// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const skillsData = [
//     {
//       category: "Frontend",
//       skills: [
//         { src: "html.png", label: "HTML5", proficiency: 90 },
//         { src: "css.jpg", label: "CSS3", proficiency: 85 },
//         { src: "javascript.png", label: "JavaScript", proficiency: 80 },
//         { src: "reactjs.png", label: "React.js", proficiency: 85 },
//         { src: "tailwind.png", label: "Tailwind", proficiency: 80 },
//         { src: "nextjs.png", label: "Next.js", proficiency: 75 },
//         { src: "redux.png", label: "Redux", proficiency: 70 },
//         { src: "typescript.png", label: "TypeScript", proficiency: 75 },
//         { src: "reactnative.png", label: "React Native", proficiency: 65 },
//         { src: "figma.png", label: "Figma", proficiency: 60 },
//       ],
//     },
//     {
//       category: "Backend",
//       skills: [
//         { src: "node.png", label: "Node.js", proficiency: 75 },
//         { src: "express.png", label: "Express", proficiency: 75 },
//         { src: "mongodb.jpg", label: "MongoDB", proficiency: 80 },
//         { src: "sql.jpg", label: "MySQL", proficiency: 70 },
//         { src: "jango.png", label: "Django", proficiency: 65 },
//         { src: "redish.png", label: "Redis", proficiency: 60 },
//         { src: "restapi.png", label: "REST API", proficiency: 75 },
//         { src: "firebase.png", label: "Firebase" },
//       ],
//     },
//     {
//       category: "Programming Languages",
//       skills: [
//         { src: "c.png", label: "C", proficiency: 75 },
//         { src: "python.png", label: "Python", proficiency: 70 },
//         { src: "java.png", label: "Java", proficiency: 65 },
//       ],
//     },
//     {
//       category: "Tools & Platforms",
//       skills: [
//         { src: "GitHub-Logo.png", label: "GitHub", proficiency: 85 },
//         { src: "docker.png", label: "Docker", proficiency: 65 },
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div
//       name="About"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-violet-950/90 to-fuchsia-950/80 py-20 text-white"
//     >
//       <div className="max-w-screen-xl mx-auto px-6 md:px-12">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-sm uppercase tracking-widest font-semibold">
//             Get To Know
//           </h2>
//           <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-800 via-pink-500 to-violet-500 font-bold mt-2">
//             About Me
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-violet-800-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
//         </motion.div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section */}
//           <motion.div
//             className="lg:w-2/5"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative group">
//               <div className="absolute -inset-2 bg-gradient-to-br from-violet-600 via-pink-600 to-violet-700 rounded-2xl opacity-60 blur-lg group-hover:opacity-100 transition duration-1000"></div>
//               <div className="relative bg-gray-900 p-2 rounded-2xl shadow-2xl border border-gray-700 group-hover:border-pink-500 transition">
//                 <img
//                   src="About.png"
//                   alt="About Me"
//                   className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
//                   style={{ maxHeight: "480px" }}
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//       className="lg:w-3/5"
//       initial={{ opacity: 0, x: 10 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//     >
//             <div className="bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm text-left">
//               <h3 className="text-2xl font-bold mb-4 text-pink-500">
//                 My Journey
//               </h3>
//               <div className="text-gray-300 space-y-4 leading-relaxed">
//                 <p>
//                   I am Recently graduated with a{" "}
//                   <span className="text-pink-500 font-medium">
//                     B.Tech in Computer Science and Engineering
//                   </span>
//                   , and a passionate focus on full-stack development.
//                 </p>
//                 <p>
//                   The path into coding was not always smooth, I faced numerous
//                   challenges initially but my{" "}
//                   <span className="text-pink-500 font-medium">
//                     persistence and determination
//                   </span>{" "}
//                   carried me through.
//                 </p>
//                 <p>
//                   Through countless hours of practice, I have gained not only
//                   technical skills but also{" "}
//                   <span className="text-pink-500 font-medium">
//                     resilience and creativity
//                   </span>
//                   .
//                 </p>
//                 <p>
//                   My goal is to build intuitive, impactful web solutions using
//                   my skills and passion for development.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                 {[
//                   ["10+", "Projects Completed"],
//                   ["15+", "Technologies"],
//                   ["500+", "Hours Coding"],
//                   ["3+", "Years Learning"],
//                 ].map(([count, label], i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: i * 0.2 }}
//                     className="p-4 bg-gray-800/60 rounded-2xl text-center border border-gray-700 shadow hover:border-pink-500 transition"
//                   >
//                     <h4 className="text-4xl font-bold bg-gradient-to-r from-slate-400 to-pink-500 bg-clip-text text-transparent">
//                       {count}
//                     </h4>
//                     <p className="text-gray-400 mt-1">{label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Skills */}
//         <motion.div
//           className="mt-24"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-sm uppercase tracking-widest font-semibold">
//               What I Can Do
//             </h2>
//             <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-violet-500 font-bold mt-2">
//               My Skills
//             </h1>
//             <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-700 mx-auto mt-4 rounded-full"></div>
//           </div>

//           <div className="space-y-16">
//             {skillsData.map((category, categoryIndex) => (
//               <motion.div key={categoryIndex} variants={itemVariants}>
//                 <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-pink-500">
//                   {category.category}
//                 </h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skillIndex}
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.05 }}
//                       className="bg-gray-900 rounded-2xl p-5 border border-gray-700 hover:border-pink-500 hover:shadow-lg transition-all duration-300 group"
//                     >
//                       <div className="flex flex-col items-center">
//                         <div className="w-16 h-16 bg-gray-800 rounded-2xl p-3 mb-3 flex items-center justify-center group-hover:bg-emerald-900/30 transition">
//                           <img
//                             className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
//                             src={skill.src}
//                             alt={skill.label}
//                           />
//                         </div>
//                         <h4 className="text-lg font-medium mb-2">
//                           {skill.label}
//                         </h4>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Timeline */}
//         <motion.div
//           className="mt-24"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-sm uppercase tracking-widest font-semibold">
//               My Background
//             </h2>
//             <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-pink-500 to-violet-400 mt-2">
//               Education & Experience
//             </h1>
//             <div className="w-20 h-1 bg-gradient-to-r from-violet-700 to-pink-500 mx-auto mt-4 rounded-full"></div>
//           </div>

//           <div className="relative">
//             <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600/40 via-pink-500/40 to-violet-600/40"></div>
//             <div className="space-y-12">
//               {[
//                 {
//                   title: "B.Tech in Computer Science",
//                   time: "2021 - 2025",
//                   desc: "Pursuing my bachelor's degree with focus on software development and computer science fundamentals.",
//                   reverse: false,
//                 },
//                 {
//                   title: "Full Stack Development Course",
//                   time: "2023 - 2024",
//                   desc: "Completed comprehensive training in MERN stack development with hands-on project experience.",
//                   reverse: true,
//                 },
//                 {
//                   title: "Freelance Web Developer",
//                   time: "2025 - Present",
//                   desc: "Working on various web development projects for clients, focusing on responsive and user-friendly interfaces.",
//                   reverse: false,
//                 },
//               ].map(({ title, time, desc, reverse }, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2 }}
//                   viewport={{ once: true }}
//                   className={`flex flex-col md:flex-row ${
//                     reverse ? "md:flex-row-reverse" : ""
//                   } items-center`}
//                 >
//                   <div
//                     className={`md:w-1/2 ${
//                       reverse ? "md:pl-12" : "md:pr-12 md:text-right"
//                     } mb-6 md:mb-0`}
//                   >
//                     <div className="bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-violet-700 hover:shadow-emerald-500/20 transition-all duration-300">
//                       <h3 className="text-xl font-bold text-pink-500">
//                         {title}
//                       </h3>
//                       <p className="text-gray-400 mt-1">{time}</p>
//                       <p className="mt-3">{desc}</p>
//                     </div>
//                   </div>
//                   <div className="md:w-1/2 flex md:justify-start"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;


"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {}, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { src: "html.png", label: "HTML5" },
        { src: "css.jpg", label: "CSS3" },
        { src: "javascript.png", label: "JavaScript" },
        { src: "reactjs.png", label: "React.js" },
        { src: "tailwind.png", label: "Tailwind" },
        { src: "nextjs.png", label: "Next.js" },
        { src: "redux.png", label: "Redux" },
        { src: "typescript.png", label: "TypeScript" },
        { src: "reactnative.png", label: "React Native" },
        { src: "figma.png", label: "Figma" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { src: "node.png", label: "Node.js" },
        { src: "express.png", label: "Express" },
        { src: "mongodb.jpg", label: "MongoDB" },
        { src: "sql.jpg", label: "MySQL" },
        { src: "jango.png", label: "Django" },
        { src: "redish.png", label: "Redis" },
        { src: "restapi.png", label: "REST API" },
        { src: "firebase.png", label: "Firebase" },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { src: "c.png", label: "C" },
        { src: "python.png", label: "Python" },
        { src: "java.png", label: "Java" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { src: "GitHub-Logo.png", label: "GitHub" },
        { src: "docker.png", label: "Docker" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      name="About"
      className="w-full min-h-screen py-24
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                 text-slate-100"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Get To Know
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mt-3
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-indigo-400 to-blue-400"
          >
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* ================= MAIN ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* IMAGE */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-indigo-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900 p-2 rounded-2xl border border-slate-700">
                <img
                  src="About.png"
                  alt="About Me"
                  className="rounded-2xl object-cover w-full"
                  style={{ maxHeight: "480px" }}
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                My Journey
              </h3>

              <div className="text-slate-300 space-y-4 leading-relaxed">
                <p>
                  Recently graduated with a{" "}
                  <span className="text-indigo-400 font-medium">
                    B.Tech in Computer Science and Engineering
                  </span>
                  , driven by a strong interest in full-stack development.
                </p>
                <p>
                  The journey into software development wasn’t always smooth,
                  but consistent effort, discipline, and curiosity helped me
                  grow steadily.
                </p>
                <p>
                  Over time, I’ve developed not just technical expertise, but
                  also problem solving ability and design awareness.
                </p>
                <p>
                  My focus is on building scalable, intuitive, and meaningful
                  digital products.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {[
                  ["10+", "Projects Completed"],
                  ["15+", "Technologies"],
                  ["500+", "Hours Coding"],
                  ["3+", "Years Learning"],
                ].map(([count, label], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="p-4 bg-slate-800/60 rounded-xl text-center border border-slate-700 hover:border-indigo-500 transition"
                  >
                    <h4 className="text-3xl font-bold text-indigo-400">
                      {count}
                    </h4>
                    <p className="text-slate-400 mt-1 text-sm">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SKILLS ================= */}
        <motion.div
          className="mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              What I Can Do
            </p>
            <h2
              className="text-4xl font-bold mt-3
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-indigo-400 to-blue-400"
            >
              My Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-16">
            {skillsData.map((category, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-indigo-400">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -6, scale: 1.05 }}
                      className="bg-slate-900 rounded-xl p-5 border border-slate-700
                                 hover:border-indigo-500 hover:shadow-lg
                                 hover:shadow-indigo-500/20 transition"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-xl p-3 mb-3 flex items-center justify-center">
                          <img
                            src={skill.src}
                            alt={skill.label}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <h4 className="text-sm font-medium text-slate-200">
                          {skill.label}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              My Background
            </p>
            <h2
              className="text-4xl font-bold mt-3
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-indigo-400 to-blue-400"
            >
              Education & Experience
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-indigo-500/30" />

            <div className="space-y-14">
              {[
                {
                  title: "B.Tech in Computer Science",
                  time: "2021 – 2025",
                  desc: "Focused on software engineering fundamentals and full-stack development.",
                },
                {
                  title: "Full Stack Development Training",
                  time: "2023 – 2024",
                  desc: "Hands-on experience building MERN stack applications.",
                },
                {
                  title: "Freelance Web Developer",
                  time: "2025 – Present",
                  desc: "Developing responsive and scalable web applications for clients.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="md:flex md:items-center"
                >
                  <div className="md:w-1/2 md:pr-10 md:text-right mb-6 md:mb-0">
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-indigo-500 transition">
                      <h3 className="text-lg font-semibold text-indigo-400">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        {item.time}
                      </p>
                      <p className="mt-3 text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
