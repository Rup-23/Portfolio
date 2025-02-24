import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const Navitems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Project"
        },
        {
            id:4,
            text:"Contact"
        },
    ]
    return (
        <>
            <div className="z-50 max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 bg-gray-900 text-white hover:shadow-[0_6px_15px_rgba(4,190,87,0.3)] transition-shadow duration-300">
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <h1 className='font-semibold text-xl cursor-pointer text-emerald-400'>RKM<p className='text-sm text-gray-400'>Web Developer</p></h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8 text-xl'>
                            {
                                Navitems.map(({id,text}) =>(
                                    <li className='hover:scale-105 duration-200 cursor-pointer hover:text-emerald-400' key={id}>
                                        <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                        className='transition-colors duration-300'
                                        >{text}</Link>
                                    </li>
                                ))
                            }                       
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden text-white'>{menu ?<IoMdClose size={24} /> : <AiOutlineMenu size={24} /> }</div>
                    </div>
                </div>

                {/* Mobile navbar */}
                {menu && (
                    <div className='bg-gray-900 text-white'>
                        <ul className='md:hidden text-xl flex flex-col items-center justify-center h-screen space-y-5 font-bold'>
                        {  Navitems.map(({id,text}) =>(
                                    <li className='hover:scale-105 duration-200 cursor-pointer hover:text-emerald-400' key={id}> <Link
                                    onClick={() => setMenu(!menu)}
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className='transition-colors duration-300'
                                    >{text}</Link></li>
                                )) } 
                        </ul>
                    </div>
                )}
            </div>

        </>
    )
}

export default Navbar


