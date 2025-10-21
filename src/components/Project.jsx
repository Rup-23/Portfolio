// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { BsGithub, BsGlobe2 } from 'react-icons/bs';
// import { FiArrowUpRight } from 'react-icons/fi';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
// import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';

// const Project = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Tech icon mapping function
//   const getTechIcon = (tech) => {
//     const iconMap = {
//       'React': <FaReact className="text-blue-400" />,
//       'JavaScript': <SiJavascript className="text-yellow-400" />,
//       'HTML5': <FaHtml5 className="text-orange-500" />,
//       'CSS3': <FaCss3Alt className="text-blue-500" />,
//       'Node.js': <FaNodeJs className="text-green-500" />,
//       'Tailwind CSS': <SiTailwindcss className="text-teal-400" />,
//       'Express': <SiExpress className="text-gray-200" />,
//       'MongoDB': <SiMongodb className="text-green-400" />,
//       'Next.js': <SiNextdotjs className="text-white" />
//     };
    
//     return iconMap[tech] || null;
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "Musiqo",
//       description: "A comprehensive music streaming platform with intuitive UI for browsing and enjoying music across genres.",
//       fullDescription: "Musiqo is a feature-rich music streaming platform built with modern web technologies. It offers users a seamless music listening experience with intuitive navigation, personalized recommendations, and extensive library management features.",
//       image: "musiqo.jpg",
//       link: "", // Fixed with proper URL format
//       github: "https://github.com/Rup-23/Music-web",
//       technologies: ["JavaScript", "HTML5", "CSS3"],
//       featured: true
//     },
//     {
//       id: 2,
//       title: "DG CULTURE",
//       description: "DG CULTURE is a digital storytelling platform where users can share untold stories, cultural experiences, and local narratives.",
//       fullDescription: "It supports multimedia content with a clean, moderated submission system. The platform aims to preserve stories often ignored by mainstream media.",
//       image: "DGculture.png",
//       link: "digiculture.vercel.app", // Fixed with proper URL format
//       github: "https://github.com/Rup-23/Digiculture",
//       technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB","Clerk","Cloudinary"],
//       featured: true
//     },
//     {
//       id: 3,
//       title: "AI-CODEREVIEW",
//       description: "AI-CODEREVIEW is a web application that leverages Gemini API to provide code review and debugging assistance.",
//       fullDescription: "Users can input their code, and the AI will analyze it, offering suggestions for improvements and identifying potential bugs. The platform aims to enhance coding practices and streamline the debugging process.",
//       image: "AIcode.png",
//       link: "", // Added example URL with proper format
//       github: "https://github.com/Rup-23/AI-code-reviewer", 
//       technologies: ["React", "JavaScript", "Node.js"],
//       featured: true
//     },
//     {
//       id: 4,
//       title: "CHAT-APP",
//       description: "A real-time chat application that allows users to communicate seamlessly with friends and family.",
//       fullDescription: "CHAT-APP is a real-time chat application built with modern web technologies. It features user authentication, real-time messaging, and a user-friendly interface for seamless communication.",
//       image: "chatapp.png",
//       link: "", // Added example URL with proper format
//       github: "https://github.com/Rup-23/ChatApp", 
//       technologies: ["React","Node.js","Express","MongoDB","Socket.io","Tailwind CSS","jwt","bcrypt","Zustand"],
//       featured: true
//     },
//     {
//       id: 5,
//       title: "Recipe Finder",
//       description: "A local recipe finder application that allows users to search for recipes based on location and ditery restriction.",
//       fullDescription: "Recipe Finder is a web application that helps users discover recipes based on their location and dietary restrictions. Users can input their preferences, and the app will provide a list of recipes that match their criteria.",
//       image: "recipe.png",
//       link: "recipe-finder-ten-pi.vercel.app", // Added example URL with proper format
//       github: "https://github.com/Rup-23/recipe-finder", 
//       technologies: ["HTML5","CSS3","JavaScript", "Node.js","MongoDB","Express"],
//       featured: true
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6 }
//     }
//   };

//   // Helper function to ensure URLs have a protocol
//   const validateUrl = (url) => {
//     if (!url || url === "#" || url === "") return null;
    
//     // Check if the URL already has a protocol
//     if (!/^https?:\/\//i.test(url)) {
//       // If not, add https:// as a default
//       return `https://${url}`;
//     }
//     return url;
//   };

//   return (
//     <div id="Projects" className="w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24">
//       <div className="max-w-screen-xl mx-auto px-6 md:px-12">
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-sm uppercase tracking-widest font-semibold text-emerald-400">My Work</h2>
//             <h1 className="text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Featured Projects</h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4"></div>
//             <p className="max-w-xl mx-auto mt-6 text-gray-400">
//               Explore a selection of my recent development projects showcasing my technical skills and problem-solving approach.
//             </p>
//           </motion.div>
//         </div>

//         <motion.div
//           className="space-y-32"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//         >
//           {projects.map((project, index) => (
//             <motion.div 
//               key={project.id}
//               variants={itemVariants}
//               className="relative"
//             >
//               <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-8 relative z-10`}>
//                 {/* Image Section */}
//                 <div className="lg:w-3/5 overflow-hidden rounded-xl group relative shadow-xl shadow-emerald-900/10">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 z-0"></div>
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
//                     style={{ height: "400px" }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
//                 </div>

//                 {/* Info Card */}
//                 <div className={`lg:w-2/5 relative ${index % 2 === 0 ? 'lg:-ml-16 z-20' : 'lg:-mr-16 lg:order-first z-20'}`}>
//                   <div className="bg-gray-800/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl h-full border border-gray-700/50 flex flex-col">
//                     {/* Tech Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.map((tech, i) => (
//                         <span 
//                           key={i} 
//                           className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700/70 text-emerald-400 backdrop-blur-sm"
//                         >
//                           {getTechIcon(tech)}
//                           <span className="ml-1.5">{tech}</span>
//                         </span>
//                       ))}
//                     </div>

//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center flex-wrap">
//                       {project.title}
//                       {project.featured && (
//                         <span className="ml-3 px-2 py-1 text-xs font-medium bg-emerald-900/60 text-emerald-400 rounded-md my-1">
//                           Featured
//                         </span>
//                       )}
//                     </h3>

//                     <p className="text-gray-300 mb-6 flex-grow">
//                       {activeProject === project.id ? project.fullDescription : project.description}
//                     </p>

//                     <button 
//                       onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
//                       className="text-emerald-500 hover:text-emerald-400 flex items-center self-start mt-2 mb-6 text-sm font-medium group"
//                       aria-label={activeProject === project.id ? 'Show less details' : 'Show more details'}
//                     >
//                       {activeProject === project.id ? 'Show Less' : 'Read More'}
//                       <FiArrowUpRight className={`ml-1 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${activeProject === project.id ? 'rotate-180' : ''}`} />
//                     </button>

//                     {/* GitHub & Live Buttons */}
//                     <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
//                       {validateUrl(project.link) && (
//                         <a 
//                           href={validateUrl(project.link)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-medium flex items-center justify-center transition-all hover:shadow-lg hover:shadow-emerald-700/30"
//                           aria-label={`View live demo of ${project.title}`}
//                         >
//                           <BsGlobe2 className="mr-2" />
//                           Live Demo
//                         </a>
//                       )}

//                       {validateUrl(project.github) && (
//                         <a 
//                           href={validateUrl(project.github)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-full sm:flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium flex items-center justify-center border border-gray-700/50 transition-all hover:border-gray-600"
//                           aria-label={`View GitHub repository for ${project.title}`}
//                         >
//                           <BsGithub className="mr-2" />
//                           GitHub Repo
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Gradient background effect */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-emerald-700/5 to-blue-700/5 rounded-full blur-3xl -z-10"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Explore More Section */}
//         <motion.div 
//           className="mt-32 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 mb-6">Explore More Projects</h2>
//           <p className="text-gray-400 max-w-xl mx-auto mb-8">
//             Check out my GitHub repositories for additional projects, code samples, and open-source contributions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a 
//               href="https://github.com/Rup-23?tab=repositories" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg text-white font-medium transition-all border border-gray-700/50 hover:border-gray-600 shadow-lg shadow-gray-900/30"
//             >
//               <BsGithub className="mr-2 text-lg" />
//               GitHub Repositories
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Project;


import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';
// import { div } from 'framer-motion/client';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Tech icon mapping
  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <FaReact className="text-cyan-400" />,
      'JavaScript': <SiJavascript className="text-yellow-400" />,
      'HTML5': <FaHtml5 className="text-orange-500" />,
      'CSS3': <FaCss3Alt className="text-blue-400" />,
      'Node.js': <FaNodeJs className="text-green-500" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
      'Express': <SiExpress className="text-gray-300" />,
      'MongoDB': <SiMongodb className="text-green-400" />,
      'Next.js': <SiNextdotjs className="text-white" />
    };
    return iconMap[tech] || null;
  };

  // Your project list
  const projects = [
    {
      id: 1,
      title: "Musiqo",
      description: "A comprehensive music streaming platform with intuitive UI for browsing and enjoying music across genres.",
      fullDescription: "Musiqo is a feature-rich music streaming platform built with modern web technologies. It offers users a seamless music listening experience with intuitive navigation, personalized recommendations, and extensive library management features.",
      image: "musiqo.jpg",
      link: "",
      github: "https://github.com/Rup-23/Music-web",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      featured: true
    },
    {
      id: 2,
      title: "DG CULTURE",
      description: "DG CULTURE is a digital storytelling platform where users can share untold stories, cultural experiences, and local narratives.",
      fullDescription: "It supports multimedia content with a clean, moderated submission system. The platform aims to preserve stories often ignored by mainstream media.",
      image: "DGculture.png",
      link: "digiculture.vercel.app",
      github: "https://github.com/Rup-23/Digiculture",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB","Clerk","Cloudinary"],
      featured: true
    },
    {
      id: 3,
      title: "AI-CODEREVIEW",
      description: "AI-CODEREVIEW is a web application that leverages Gemini API to provide code review and debugging assistance.",
      fullDescription: "Users can input their code, and the AI will analyze it, offering suggestions for improvements and identifying potential bugs.",
      image: "AIcode.png",
      link: "",
      github: "https://github.com/Rup-23/AI-code-reviewer", 
      technologies: ["React", "JavaScript", "Node.js"],
      featured: true
    },
    {
      id: 4,
      title: "CHAT-APP",
      description: "A real-time chat application that allows users to communicate seamlessly with friends and family.",
      fullDescription: "CHAT-APP is a real-time chat application built with modern web technologies. It features user authentication, real-time messaging, and a user-friendly interface.",
      image: "chatapp.png",
      link: "",
      github: "https://github.com/Rup-23/ChatApp", 
      technologies: ["React","Node.js","Express","MongoDB","Socket.io","Tailwind CSS","jwt","bcrypt","Zustand"],
      featured: true
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A local recipe finder application that allows users to search for recipes based on location and dietary restriction.",
      fullDescription: "Recipe Finder helps users discover recipes based on their location and dietary restrictions.",
      image: "recipe.png",
      link: "recipe-finder-ten-pi.vercel.app",
      github: "https://github.com/Rup-23/recipe-finder", 
      technologies: ["HTML5","CSS3","JavaScript", "Node.js","MongoDB","Express"],
      featured: true
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };
  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const validateUrl = (url) => {
    if (!url) return null;
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };

  return (
  <>
  
    <div id="Projects"  className="w-full min-h-screen bg-gradient-to-b from-fuchsia-950/80 via-gray-950 to-violet-950 py-24 text-white relative">
    {/* floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/20 rounded-full blur-[150px] animate-pulse delay-200"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -40 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-200">My Work</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-green-400">
            Featured Projects
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-pink-500 to-violet-700 mx-auto mt-4 rounded-full"></div>
          <p className="max-w-xl mx-auto mt-6 text-gray-400">
            Explore my highlighted development projects where I applied creativity, problem-solving, and modern tech.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} className="relative">
              <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-8`}>
                {/* Project Image */}
                <div className="lg:w-3/5 overflow-hidden rounded-xl group relative shadow-xl shadow-fuchsia-900/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Project Info */}
                <div className={`lg:w-2/5 relative ${index % 2 === 0 ? "lg:-ml-16" : "lg:-mr-16 lg:order-first"}`}>
                  <div className="bg-gray-900/90 p-6 md:p-8 rounded-xl border border-gray-700/40 shadow-2xl backdrop-blur-sm flex flex-col h-full">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-800/40 text-pink-300 border border-violet-600/40">
                          {getTechIcon(tech)}
                          <span className="ml-1.5">{tech}</span>
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {project.title}
                      {project.featured && (
                        <span className="ml-3 px-2 py-1 text-xs font-medium bg-pink-900/40 text-green-400 rounded-md">
                          Featured
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-300 mb-6 flex-grow">
                      {activeProject === project.id ? project.fullDescription : project.description}
                    </p>

                    <button 
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      className="text-pink-400 hover:text-green-400 flex items-center text-sm font-medium group mb-6"
                    >
                      {activeProject === project.id ? "Show Less" : "Read More"}
                      <FiArrowUpRight className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      {validateUrl(project.link) && (
                        <a 
                          href={validateUrl(project.link)} target="_blank" rel="noopener noreferrer"
                          className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-700 hover:to-violet-700 text-white rounded-lg font-medium flex items-center justify-center transition-all"
                        >
                          <BsGlobe2 className="mr-2" /> Live Demo
                        </a>
                      )}
                      {validateUrl(project.github) && (
                        <a 
                          href={validateUrl(project.github)} target="_blank" rel="noopener noreferrer"
                          className="w-full sm:flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium flex items-center justify-center border border-gray-700/50"
                        >
                          <BsGithub className="mr-2" /> GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-green-400 mb-6">
            Explore More Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Check out my GitHub repositories for more experiments and open-source contributions.
          </p>
          <a 
            href="https://github.com/Rup-23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-violet-700 hover:to-pink-700 rounded-lg text-white font-medium border border-gray-700/50"
          >
            <BsGithub className="mr-2 text-lg" /> GitHub Repositories
          </a>
        </motion.div>
      </div>
    </div>
    </>  
  );
};

export default Project;
