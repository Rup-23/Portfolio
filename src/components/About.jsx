import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { src: "html.png", label: "HTML5", proficiency: 90 },
        { src: "css.jpg", label: "CSS3", proficiency: 85 },
        { src: "javascript.png", label: "JavaScript", proficiency: 80 },
        { src: "reactjs.png", label: "React.js", proficiency: 85 },
        { src: "tailwind.png", label: "Tailwind", proficiency: 80 },
        { src: "nextjs.png", label: "Next.js", proficiency: 75 },
        { src: "redux.png", label: "Redux", proficiency: 70 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { src: "node.png", label: "Node.js", proficiency: 75 },
        { src: "express.png", label: "Express", proficiency: 75 },
        { src: "mongodb.jpg", label: "MongoDB", proficiency: 80 },
        { src: "sql.jpg", label: "MySQL", proficiency: 70 }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { src: "c.png", label: "C", proficiency: 75 },
        { src: "python.png", label: "Python", proficiency: 70 },
        { src: "java.png", label: "Java", proficiency: 65 }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { src: "GitHub-Logo.png", label: "GitHub", proficiency: 85 },
        { src: "docker.png", label: "Docker", proficiency: 65 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div name="About" className="w-full min-h-screen bg-gray-950 py-20 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest font-semibold">Get To Know</h2>
          <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 font-bold mt-2">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl opacity-60 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="absolute -inset-6 bg-gray-900 rounded-2xl opacity-0 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative bg-gray-800 p-2 rounded-2xl shadow-2xl">
                <img
                  src="About.png"
                  alt="About Me"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: "480px" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-emerald-500">My Journey</h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I am currently pursuing my <span className="text-emerald-400 font-medium">B.Tech in Computer Science and Engineering</span>, with a passionate focus on full-stack development.
                </p>
                <p>
                  The path into coding wasn't always smooth—I faced numerous challenges initially... but my <span className="text-emerald-400 font-medium">persistence and determination</span> carried me through.
                </p>
                <p>
                  Through countless hours of practice, I've gained not only technical skills but also <span className="text-emerald-400 font-medium">resilience and creativity</span>.
                </p>
                <p>
                  My goal is to build intuitive, impactful web solutions using my skills and passion for development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  ["10+", "Projects Completed"],
                  ["15+", "Technologies"],
                  ["500+", "Hours Coding"],
                  ["3+", "Years Learning"]
                ].map(([count, label], i) => (
                  <div key={i} className="p-4 bg-gray-800 rounded-2xl text-center border border-gray-700 shadow">
                    <h4 className="text-4xl font-bold text-emerald-500">{count}</h4>
                    <p className="text-gray-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-24"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest font-semibold">What I Can Do</h2>
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 font-bold mt-2">My Skills</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-16">
            {skillsData.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-emerald-500">{category.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-emerald-500 transition-all duration-300 group shadow-md"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-full p-3 mb-3 flex items-center justify-center group-hover:bg-emerald-900/30 transition">
                          <img className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" src={skill.src} alt={skill.label} />
                        </div>
                        <h4 className="text-lg font-medium mb-2">{skill.label}</h4>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 h-2.5 rounded-full"
                            style={{ width: `${skill.proficiency}%`, transition: "width 1s ease-in-out" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400 mt-1">{skill.proficiency}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest  font-semibold">My Background</h2>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 mt-2">Education & Experience</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-700/30"></div>
            <div className="space-y-12">
              {[
                {
                  title: "B.Tech in Computer Science",
                  time: "2021 - 2025",
                  desc: "Pursuing my bachelor's degree with focus on software development and computer science fundamentals.",
                  reverse: false
                },
                {
                  title: "Full Stack Development Course",
                  time: "2023 - 2024",
                  desc: "Completed comprehensive training in MERN stack development with hands-on project experience.",
                  reverse: true
                },
                {
                  title: "Freelance Web Developer",
                  time: "2025 - Present",
                  desc: "Working on various web development projects for clients, focusing on responsive and user-friendly interfaces.",
                  reverse: false
                }
              ].map(({ title, time, desc, reverse }, i) => (
                <div key={i} className={`flex flex-col md:flex-row${reverse ? "-reverse" : ""} items-center`}>
                  <div className={`md:w-1/2 ${reverse ? "md:pl-12" : "md:pr-12 md:text-right"} mb-6 md:mb-0`}>
                    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300">
                      <h3 className="text-xl font-bold text-emerald-500">{title}</h3>
                      <p className="text-gray-400 mt-1">{time}</p>
                      <p className="mt-3">{desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex md:justify-start">
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
