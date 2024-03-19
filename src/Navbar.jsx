import React, { useState, Fragment } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa"; // Import icons from React Icons
import { RiArrowDownSLine } from "react-icons/ri";



function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

 

  return (
    <>
      {/* Main navigation container */}
      <nav
        className={`sticky top-0 flex w-full flex-nowrap items-center justify-between   shadow-lg  lg:flex-wrap lg:justify-start box-border py-7 max-w-[1920px] mx-auto z-30 transition-all duration-300  ${
          isNavOpen ? "open" : ""
        }`}
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between max-w-[1280px] mx-auto  ">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0  px-2 text-black hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent15"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {/* Conditional rendering for icon */}
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="justify-center  items-center max-w-[1280px] mx-auto">
            <a className="text-xl text-black dark:text-white" href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>

          {/************************* Navbar container Start *******************/}
          <div className={`  duration-75 flex-grow basis-[100%] items-center lg:mt-0 xl:!flex xl:basis-auto ${
              isNavOpen ? "block" : "hidden"
             }`}
             id="navbarSupportedContent15"
             data-twe-collapse-item>
          

             <ul className="relative  list-style-none xs:gap-4 xs:ml-1 sm:ml-2 dark:text-black  xl:m-auto flex flex-col ps-0  xl:flex-row sm:gap-5 lg:gap-5 xl:gap-9  box-border font-normal "
              data-twe-navbar-nav-ref>
              {/* Navbar link */}
              <li class="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center  "
                >
                  Programs{" "}
                 <div className="absolute left-[80px] text-[25px]"><RiArrowDownSLine /></div>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10 absolute hidden font-normal  divide-gray-100 rounded-lg shadow w-44 bg-emerald-400 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashborad
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashborad
                    </a>
                  </div>
                </div>
              </li>
              <li class="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center  md:p-0 md:w-auto "
                >
                  Business with Unpadh{" "}
                 <div className="absolute left-[180px]  text-textcolor text-[25px]"><RiArrowDownSLine /></div>
                  
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10 absolute hidden font-normal  divide-gray-100 rounded-lg shadow w-44 bg-emerald-400 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashborad
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                     Dashborad
                    </a>
                  </div>
                </div>
              </li>

              <li
                className=" lg:my-0  "
                data-twe-nav-item-ref>
                <a
                  className=" lg:px-2 "
                  aria-current="page"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="nav-link">Become Instructure</span>
                </a>
              </li>
              <li
                className=" lg:my-0 "
                data-twe-nav-item-ref
              >
                <a
                  className=" lg:px-2"
                  aria-current="page"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="nav-link">About Us</span>
                </a>
              </li>
              <li
                className=" lg:my-0 "
                data-twe-nav-item-ref
              >
                <a
                  className=" lg:px-2"
                  aria-current="page"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="nav-link">Contact Us</span>
                </a>
              </li>
            </ul>
     {/*********************** Button Section start ***********************************/}
            <div className="">
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
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
