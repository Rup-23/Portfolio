import React from "react";
import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center">
          
          {/* Social Icons */}
          <ul className="flex gap-6 mb-6">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <FaSquareFacebook className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <FiInstagram className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <FaLinkedin className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rup-23"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <FaGithub className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
              </a>
            </li>
          </ul>

          {/* Footer Text */}
          <div className="space-y-1 text-gray-400 text-sm">
            <p>&copy; 2024 RKM Portfolio. All rights reserved.</p>
            <p>
              Made with <span className="text-red-500">❤️</span> by Rupesh Kumar Meher
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
