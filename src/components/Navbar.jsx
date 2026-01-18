// import { useState } from 'react';
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const Navitems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Projects" },
//     { id: 4, text: "Contact" },
//   ];

//   return (
//     <>
//       <div className="z-50 fixed top-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md shadow-md text-white transition-shadow duration-300">
//         <div className="max-w-screen-2xl mx-auto px-6 md:px-16 h-16 flex justify-between items-center">
          
//           {/* Logo */}
//           <div className="flex flex-col cursor-pointer leading-tight">
//             <h1 className="font-bold text-2xl text-emerald-400">RKM</h1>
//             <p className="text-sm text-gray-200 font-light tracking-wider">Web Developer</p>
//           </div>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex space-x-10 text-base font-medium">
//             {Navitems.map(({ id, text }) => (
//               <li
//                 key={id}
//                 className="relative group cursor-pointer"
//               >
//                 <Link
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300"
//                 >
//                   {text}
//                 </Link>
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-300 cursor-pointer z-50">
//             {menu ? <IoMdClose size={26} /> : <AiOutlineMenu size={26} />}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {menu && (
//         <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-sm z-40">
//           <ul className="flex flex-col justify-center items-center h-full space-y-10 text-2xl font-semibold">
//             {Navitems.map(({ id, text }) => (
//               <li key={id}>
//                 <Link
//                   onClick={() => setMenu(false)}
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// "use client"; // if using Next.js App Router
// import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const Navitems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Projects" },
//     { id: 4, text: "Contact" },
//   ];

//   return (
//     <>
//       {/* Navbar Container */}
//       <motion.div
//         initial={{ y: -70, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="z-50 fixed top-0 left-0 right-0 bg-gradient-to-r from-violet-950/90 via-fuchsia-900/80 to-gray-950/90 backdrop-blur-md shadow-md text-white"
//       >
//         <div className="max-w-screen-2xl mx-auto px-6 md:px-16 h-16 flex justify-between items-center">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="flex flex-col cursor-pointer leading-tight"
//           >
//             <h1 className="font-extrabold text-3xl bg-gradient-to-r from-slate-300 to-pink-700 bg-clip-text text-transparent">
//               RKM
//             </h1>
//             <p className="text-sm text-gray-300 font-light tracking-wider">
//               Fullstack Developer
//             </p>
//           </motion.div>
//           {/* Desktop Nav */}
//           <ul className="hidden md:flex space-x-10 text-base font-medium">
//             {Navitems.map(({ id, text }, index) => (
//               <motion.li
//                 key={id}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//                 className="relative group cursor-pointer"
//               >
//                 <Link
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   className="text-gray-300 group-hover:text-pink-400 transition-colors duration-300"
//                 >
//                   {text}
//                 </Link>
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
//               </motion.li>
//             ))}
//           </ul>

//           {/* Mobile Menu Icon */}
//           <motion.div
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setMenu(!menu)}
//             className="md:hidden text-gray-300 cursor-pointer z-50"
//           >
//             {menu ? <IoMdClose size={26} /> : <AiOutlineMenu size={26} />}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Mobile Nav with AnimatePresence */}
//       <AnimatePresence>
//         {menu && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-950 via-violet-950 to-fuchsia-900 backdrop-blur-md z-40"
//           >
//             <ul className="flex flex-col justify-center items-center h-full space-y-10 text-2xl font-semibold">
//               {Navitems.map(({ id, text }, index) => (
//                 <motion.li
//                   key={id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                 >
//                   <Link
//                     onClick={() => setMenu(false)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                     className="text-gray-200 hover:text-emerald-400 transition-colors duration-300"
//                   >
//                     {text}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const Navitems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50
                   bg-slate-950/80 backdrop-blur-md
                   border-b border-slate-800"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="cursor-pointer leading-tight"
          >
            <h1 className="text-3xl font-extrabold tracking-tight
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-indigo-400 to-blue-400">
              RKM
            </h1>
            <p className="text-xs text-slate-400 tracking-widest uppercase">
              Full Stack Developer
            </p>
          </motion.div>

          {/* ================= DESKTOP NAV ================= */}
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            {Navitems.map(({ id, text }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="relative group cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-slate-300 group-hover:text-indigo-400 transition-colors duration-300"
                >
                  {text}
                </Link>

                {/* underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0
                             bg-gradient-to-r from-indigo-400 to-blue-400
                             transition-all duration-300 group-hover:w-full"
                />
              </motion.li>
            ))}
          </ul>

          {/* ================= MOBILE TOGGLE ================= */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenu(!menu)}
            className="md:hidden text-slate-300 cursor-pointer z-50"
          >
            {menu ? <IoMdClose size={26} /> : <AiOutlineMenu size={26} />}
          </motion.div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden
                       bg-slate-950/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-semibold">
              {Navitems.map(({ id, text }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="text-slate-200 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
