// "use client";
// // import React from "react";
// import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
// import { FiInstagram } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="relative bg-gradient-to-b from-fuchsia-950 via-gray-950 to-violet-950 text-white py-12 border-t border-gray-800 overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-10 left-20 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-20 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
//         <div className="flex flex-col items-center text-center">
//           {/* Social Icons */}
//           <ul className="flex gap-6 mb-6">
//             {[
//               {
//                 icon: <FaSquareFacebook />,
//                 link: "https://www.facebook.com/",
//               },
//               {
//                 icon: <FiInstagram />,
//                 link: "https://www.instagram.com/",
//               },
//               {
//                 icon: <FaLinkedin />,
//                 link: "https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/",
//               },
//               {
//                 icon: <FaGithub />,
//                 link: "https://github.com/Rup-23",
//               },
//             ].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-3xl text-gray-400 group-hover:text-fuchsia-400 transition-colors duration-300"
//                   >
//                     {item.icon}
//                   </motion.div>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Footer Text */}
//           <div className="space-y-1 text-gray-400 text-sm">
//             <p>&copy; {new Date().getFullYear()} RKM Portfolio. All rights reserved.</p>
//             <p>
//               Made with <span className="text-pink-500">❤️</span> by{" "}
//               <span className="text-gradient bg-gradient-to-r from-fuchsia-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
//                 Rupesh Kumar Meher
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;

"use client";
import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                 text-slate-200 py-14
                 border-t border-slate-800 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center">
          {/* ================= SOCIAL ================= */}
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
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl
                               text-slate-400
                               group-hover:text-indigo-400
                               transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>

          {/* ================= TEXT ================= */}
          <div className="space-y-1 text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} RKM Portfolio. All rights reserved.
            </p>
            <p>
              Built with care by{" "}
              <span
                className="font-semibold
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-indigo-400 to-blue-400"
              >
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
