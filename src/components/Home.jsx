import React from 'react';
import { FaSquareFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-xl container mx-auto px-6 md:px-16 py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 order-1 md:order-2">
          <img
            src="profil.jpg"
            className="border-4 border-emerald-700 rounded-full w-48 h-48 md:w-[320px] md:h-[320px] object-cover transform transition-all hover:scale-110 shadow-xl"
            alt="Profile"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300">
            Hello, I'm <span className="text-emerald-700">Rupesh Kumar Meher</span>
          </h1>

          <div className="mt-4 text-2xl md:text-3xl font-medium text-gray-300 flex justify-center md:justify-start">
            <h1 className="text-3xl">I'm a</h1>
            <ReactTyped
              className="text-emerald-700 text-3xl font-semibold ml-2"
              strings={["Student", "Full Stack Web Developer", "Programmer"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            I'm currently pursuing my B.Tech in Computer Science and Engineering. I'm passionate about technology and enjoy developing full-stack applications.
          </p>

          {/* Social Media Links */}
          <div className="mt-8">
            <h2 className="font-bold text-lg text-gray-300">Connect with me</h2>
            <div className="flex justify-center md:justify-start gap-8 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaSquareFacebook className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-125 duration-200" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FiInstagram className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-125 duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-125 duration-200" />
              </a>
              <a href="https://github.com/Rup-23" target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-125 duration-200" />
              </a>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-12">
            <h2 className="font-bold text-lg text-gray-300">Technologies I'm Working On</h2>
            <div className="flex justify-center md:justify-start gap-8 mt-6 flex-wrap">
              <div className="hover:scale-125 transform transition-all duration-300 p-6 bg-white rounded-lg shadow-lg cursor-pointer">
                <SiMongodb className="text-4xl text-emerald-600" />
              </div>
              <div className="hover:scale-125 transform transition-all duration-300 p-6 bg-white rounded-lg shadow-lg cursor-pointer">
                <SiExpress className="text-4xl text-emerald-600" />
              </div>
              <div className="hover:scale-125 transform transition-all duration-300 p-6 bg-white rounded-lg shadow-lg cursor-pointer">
                <FaReact className="text-4xl text-emerald-600" />
              </div>
              <div className="hover:scale-125 transform transition-all duration-300 p-6 bg-white rounded-lg shadow-lg cursor-pointer">
                <IoLogoNodejs className="text-4xl text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

