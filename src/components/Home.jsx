// import React from 'react'
// import { FaSquareFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
// import { FiInstagram } from "react-icons/fi";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { IoLogoNodejs } from "react-icons/io5";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//     return (
//         <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-32'>
//             <div className='flex flex-col md:flex-row items-center'>
//                 {/* Profile Image First on Small Devices */}
//                 <div className='md:w-1/2 flex justify-center md:justify-end order-1 md:order-2'>
//                     <img src="profil.jpg" className='border-2 border-white rounded-full w-40 h-40 md:w-[300px] md:h-[300px] object-cover' alt="Profile" />
//                 </div>

//                 {/* Content Section */}
//                 <div className='md:w-1/2 mt-6 md:mt-24 text-center md:text-left order-2 md:order-1'>
//                     <div className='text-2xl md:text-4xl font-bold flex justify-center md:justify-start items-center space-x-2'>
//                         <h1>Hello, I'm a</h1>
//                         <ReactTyped
//                             className='text-emerald-700'
//                             strings={["Student", "Full Stack Web Developer", "Programmer"]}
//                             typeSpeed={40}
//                             backSpeed={50}
//                             loop
//                         />
//                     </div>
//                     <p className='mt-4 text-lg'>
//                         My name is <span className='text-emerald-700 font-semibold'>Rupesh Kumar Meher</span>. I'm currently pursuing my B.Tech in Computer Science and Engineering. I am passionate about technology and a Full Stack Web Developer.
//                     </p>

//                     {/* Social Media Links */}
//                     <div className='mt-6'>
//                         <h1 className='font-bold text-lg'>Available on</h1>
//                         <div className='flex justify-center md:justify-start gap-4 mt-2'>
//                             <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
//                                 <FaSquareFacebook className='text-2xl hover:scale-110 duration-200' />
//                             </a>
//                             <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
//                                 <FiInstagram className='text-2xl hover:scale-110 duration-200' />
//                             </a>
//                             <a href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/" target='_blank' rel='noreferrer'>
//                                 <FaLinkedin className='text-2xl hover:scale-110 duration-200' />
//                             </a>
//                             <a href="https://github.com/Rup-23" target='_blank' rel='noreferrer'>
//                                 <FaGithub className='text-2xl hover:scale-110 duration-200' />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Technologies Working On */}
//                     <div className='mt-6'>
//                         <h1 className='font-bold text-lg'>Currently working on</h1>
//                         <div className='flex justify-center md:justify-start gap-5 mt-2'>
//                             <SiMongodb className='text-2xl hover:scale-110 duration-200 cursor-pointer' />
//                             <SiExpress className='text-2xl hover:scale-110 duration-200 cursor-pointer' />
//                             <FaReact className='text-2xl hover:scale-110 duration-200 cursor-pointer' />
//                             <IoLogoNodejs className='text-2xl hover:scale-110 duration-200 cursor-pointer' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;


import React from 'react'
import { FaSquareFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32">
      <div className="flex flex-col md:flex-row items-center">

        {/* Profile Image First on Small Devices */}
        <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="profil.jpg"
            className="border-4 border-emerald-700 rounded-full w-40 h-40 md:w-[300px] md:h-[300px] object-cover transform transition-all hover:scale-105 shadow-lg"
            alt="Profile"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 mt-6 md:mt-24 text-center md:text-left order-2 md:order-1">
          <div className="text-2xl md:text-4xl font-extrabold flex justify-center md:justify-start items-center space-x-2 text-gray-300">
            <h1 className='text-3xl'>Hello, I'm a</h1>
            <ReactTyped
              className="text-emerald-700 text-3xl font-semibold"
              strings={["Student", "Full Stack Web Developer", "Programmer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <p className="mt-4 text-lg text-gray-300">
            My name is <span className="text-emerald-700 font-semibold">Rupesh Kumar Meher</span>. I'm currently pursuing my B.Tech in Computer Science and Engineering. I am passionate about technology and a Full Stack Web Developer.
          </p>

          {/* Social Media Links */}
          <div className="mt-8">
            <h1 className="font-bold text-lg text-gray-300">Available on</h1>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaSquareFacebook className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-110 duration-200" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FiInstagram className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-110 duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-kumar-meher-59a1b3269/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-110 duration-200" />
              </a>
              <a href="https://github.com/Rup-23" target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl hover:text-emerald-700 transform transition-all hover:scale-110 duration-200" />
              </a>
            </div>
          </div>

          {/* Technologies I'm Working On */}
          <div className="mt-8">
            <h1 className="font-bold text-lg text-gray-300">Currently working on</h1>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <div className="hover:scale-110 transition-all transform duration-200 p-4 bg-white shadow-md rounded-md cursor-pointer">
                <SiMongodb className="text-3xl text-emerald-600" />
              </div>
              <div className="hover:scale-110 transition-all transform duration-200 p-4 bg-white shadow-md rounded-md cursor-pointer">
                <SiExpress className="text-3xl text-emerald-600" />
              </div>
              <div className="hover:scale-110 transition-all transform duration-200 p-4 bg-white shadow-md rounded-md cursor-pointer">
                <FaReact className="text-3xl text-emerald-600" />
              </div>
              <div className="hover:scale-110 transition-all transform duration-200 p-4 bg-white shadow-md rounded-md cursor-pointer">
                <IoLogoNodejs className="text-3xl text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
