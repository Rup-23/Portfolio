import React from 'react';

const About = () => {
  return (
    <div name="About" className="max-w-screen-xl container mx-auto px-4 md:px-12 py-24 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-emerald-600 mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <img
          className="w-80 h-80 object-cover rounded-full mb-6 md:mb-0 shadow-lg transform transition-all hover:scale-105"
          src="About.png"
          alt="About"
        />
        <p className="text-lg leading-8 text-justify text-gray-300 max-w-2xl mx-auto md:mx-0 mt-6 md:mt-0">
          I am currently pursuing my B.Tech in Computer Science and Engineering, with a strong focus on becoming proficient in full-stack development. I completed a comprehensive course in full-stack development, which has been both a challenging and rewarding experience. The journey into coding was particularly tough at the beginning. I found myself struggling with various concepts and often had to revisit and practice them repeatedly. There were moments when the difficulty of the material led me to contemplate quitting. However, through persistence and self-motivation, I overcame these challenges. I dedicated countless hours to honing my skills and remained committed to achieving my goals. This experience has not only enhanced my technical abilities but also strengthened my resolve and resilience. I am now more confident in my capabilities and eager to apply my knowledge in real-world scenarios.
         </p>
      </div>
      

      <div className="mt-20">
        <h2 className="text-3xl font-extrabold text-center text-emerald-600 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { src: "html.png", label: "HTML5" },
            { src: "css.jpg", label: "CSS3" },
            { src: "javascript.png", label: "JavaScript" },
            { src: "c.png", label: "C" },
            { src: "mongodb.jpg", label: "MongoDB" },
            { src: "express.png", label: "Express" },
            { src: "reactjs.png", label: "React.js" },
            { src: "node.png", label: "Node" },
            { src: "python.png", label: "Python" },
            { src: "tailwind.png", label: "Tailwind" },
            { src: "nextjs.png", label: "Next.js" },
            { src: "sql.jpg", label: "MySQL" },
            { src: "redux.png", label: "Redux" },
            { src: "java.png", label: "Java" },
            { src: "docker.png", label: "Docker" },
            { src: "GitHub-Logo.png", label: "GitHub" }
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300">
              <img className="h-12 w-12 mb-2" src={tech.src} alt={tech.label} />
              <span className="text-lg font-semibold text-gray-200">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
