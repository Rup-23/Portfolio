import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const Navitems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      <div className="z-50 fixed top-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md shadow-md text-white transition-shadow duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16 h-16 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col cursor-pointer leading-tight">
            <h1 className="font-bold text-2xl text-emerald-400">RKM</h1>
            <p className="text-sm text-gray-200 font-light tracking-wider">Web Developer</p>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-10 text-base font-medium">
            {Navitems.map(({ id, text }) => (
              <li
                key={id}
                className="relative group cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300"
                >
                  {text}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-300 cursor-pointer z-50">
            {menu ? <IoMdClose size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-sm z-40">
          <ul className="flex flex-col justify-center items-center h-full space-y-10 text-2xl font-semibold">
            {Navitems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
