import React from 'react';

const About = () => {
  return (
    <div name="About" className="max-w-screen-xl container mx-auto px-4 md:px-12 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <img
          className="w-64 h-64 object-cover rounded-full mb-6 md:mb-0"
          src="About.png"
          alt="About"
        />
        <p className="text-lg leading-8 text-gray-300 max-w-2xl mx-auto md:mx-0">
          I am currently pursuing my B.Tech in Computer Science and Engineering, with a strong focus on becoming proficient in full-stack development. I completed a comprehensive course in full-stack development, which has been both a challenging and rewarding experience. The journey into coding was particularly tough at the beginning. I found myself struggling with various concepts and often had to revisit and practice them repeatedly. There were moments when the difficulty of the material led me to contemplate quitting. However, through persistence and self-motivation, I overcame these challenges. I dedicated countless hours to honing my skills and remained committed to achieving my goals. This experience has not only enhanced my technical abilities but also strengthened my resolve and resilience. I am now more confident in my capabilities and eager to apply my knowledge in real-world scenarios.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="html.png" alt="HTML5" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="css.jpg" alt="CSS3" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="javascript.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="c.png" alt="C" />
            <span>C</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="mongodb.jpg" alt="MongoDB" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="express.png" alt="Express" />
            <span>Express</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="reactjs.png" alt="React.js" />
            <span>React.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="node.png" alt="Node" />
            <span>Node</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="python.png" alt="Python" />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="tailwind.png" alt="Tailwind CSS" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="nextjs.png" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="sql.jpg" alt="MySQL" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="redux.png" alt="Redux" />
            <span>Redux</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="java.png" alt="Java" />
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="docker.png" alt="Docker" />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="h-12 w-12 mb-2" src="GitHub-Logo.png" alt="GitHub" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
