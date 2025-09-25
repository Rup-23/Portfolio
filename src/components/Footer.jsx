// import React from "react";
// import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
// import { FiInstagram } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
//       <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
//         <div className="flex flex-col items-center text-center">
          
//           {/* Social Icons */}
//           <ul className="flex gap-6 mb-6">
//             <li>
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group"
//               >
//                 <FaSquareFacebook className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group"
//               >
//                 <FiInstagram className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group"
//               >
//                 <FaLinkedin className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/Rup-23"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group"
//               >
//                 <FaGithub className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-all duration-200" />
//               </a>
//             </li>
//           </ul>

//           {/* Footer Text */}
//           <div className="space-y-1 text-gray-400 text-sm">
//             <p>&copy; 2024 RKM Portfolio. All rights reserved.</p>
//             <p>
//               Made with <span className="text-red-500">❤️</span> by Rupesh Kumar Meher
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
// import React from "react";
import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-fuchsia-950 via-gray-950 to-violet-950 text-white py-12 border-t border-gray-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Social Icons */}
          <ul className="flex gap-6 mb-6">
            {[
              {
                icon: <FaSquareFacebook />,
                link: "https://www.facebook.com/",
              },
              {
                icon: <FiInstagram />,
                link: "https://www.instagram.com/",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/Rup-23",
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-3xl text-gray-400 group-hover:text-fuchsia-400 transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>

          {/* Footer Text */}
          <div className="space-y-1 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} RKM Portfolio. All rights reserved.</p>
            <p>
              Made with <span className="text-pink-500">❤️</span> by{" "}
              <span className="text-gradient bg-gradient-to-r from-fuchsia-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                Rupesh Kumar Meher
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

