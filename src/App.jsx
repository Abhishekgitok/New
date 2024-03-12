import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

function Header (){
    const Links = [
        { name: "Program", link: "/", dropdownItems: ["Submenu 1", "Submenu 2", "Submenu 3"] },
        { name: "Business With Unpadh", link: "/", dropdownItems: ["Service 1", "Service 2", "Service 3"] },
        { name: "Become Instructure", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Cuntact Us", link: "/" },
    ];

    const [open, setOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState(null);

    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-around bg-white py-4 md:px-10 px-7'>
                {/* Logo section */}
                <div className=' cursor-pointer  flex items-center gap-1'>
                    {/* <BookOpenIcon className='w-7 h-7 text-blue-600' /> */}
                     <img src="./public/images/logo.png" alt="" />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* Link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7 font-normal dark:text-black relative'>
                            {link.dropdownItems ? (
                                <div
                                    onMouseEnter={() => setHoveredDropdown(link.name)}
                                    onMouseLeave={() => setHoveredDropdown(null)}
                                >
                                    <a
                                        href={link.link}
                                        className='text-gray-800 hover:text-blue-400 duration-500 flex items-center'
                                    >
                                        {link.name}
                                        <ChevronDownIcon className="w-5 h-5 ml-1" />
                                    </a>
                                    {hoveredDropdown === link.name && (
                                        <ul className='absolute bg-white w-40 mt-1 border border-gray-200'>
                                            {link.dropdownItems.map((item, index) => (
                                                <li key={index} className='hover:bg-gray-200 px-4 py-2 cursor-pointer'>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            )}
                        </li>
                    ))}
                     <div className="relative rounded-full flex xs:ml-12 mt-4 sm:gap-5 sm:ml-10 sm:mt-4 lg:gap-4 lg:ml-0 lg:mt-0 box-border">
              
              <button
               className="relative z-[2] rounded-full  border-solid border-2 border-primary px-7 p-2 text-center justify-center   text-sm font-medium capitalize  text-textcolor hover:transition duration-200 ease-out  hover:border-zinc-50   hover:text-white  focus:outline-none    dark:hover:bg-blue-950 "
               type="button"
               id="button-addon3"
               data-twe-ripple-init
              >
               Log in
              </button>
              <button
               className="relative z-[2] rounded-full  hover:border-solid border-2 border-primary px-7 text-center justify-center   text-sm font-medium capitalize  text-white hover:transition duration-200 ease-out  bg-background hover:bg-transparent   hover:text-textcolor  focus:outline-none  "
               type="button"
               id="button-addon3"
               data-twe-ripple-init
              >
               Sign Up
             </button>
           </div>
                </ul>
                {/* Button */}
            </div>
            
        </div>
        
        
        
    );
};

export default Header;
