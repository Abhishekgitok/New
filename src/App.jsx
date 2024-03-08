import React, { useState, Fragment } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

 

  return (
    <>
      {/* Main navigation container */}
      <nav
        className={`sticky top-0 flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-lg  lg:flex-wrap lg:justify-start lg:py-4 box-border ${
          isNavOpen ? "open" : ""
        }`}
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between lg:px-40">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0  px-2 text-black hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent15"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {/* Conditional rendering for icon */}
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="justify-center items-center text-black">
            <a className="text-xl text-black" href="#">
            <img className="h-10" src="./public/logo.png" alt=""  />
        
          
            </a>
          </div>

          {/************************* Navbar container Start *******************/}
          <div
            className={`mt-2 duration-75 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbarSupportedContent15"
            data-twe-collapse-item
          >
            {/* Left links */}

            <ul
              className="list-style-none sm:ml-2 dark:text-black lg:m-auto flex flex-col ps-0 lg:mt-1 lg:flex-row sm:gap-5 lg:gap-5 box-border font-semibold "
              data-twe-navbar-nav-ref>
              {/* Navbar link */}
              <li class="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center  "
                >
                  Programs{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
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
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
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

            <div className="">
              <div className="relative flex sm:gap-5 sm:ml-10 sm:mt-4 lg:gap-4 lg:ml-0 lg:mt-0 box-border">
                 {/* Search button */}
                 <button
                  className="relative z-[2]  border-solid border-2 border-emerald-400 px-7 p-2 text-center justify-center   text-sm font-medium capitalize  text-primary hover:transition duration-200 ease-out  hover:border-zinc-50   hover:text-white  focus:outline-none    dark:hover:bg-blue-950 "
                  type="button"
                  id="button-addon3"
                  data-twe-ripple-init
                 >
                  Log in
                 </button>
                 <button
                  className="relative z-[2]  hover:border-solid border-2 border-emerald-400 px-7 text-center justify-center   text-sm font-medium capitalize  text-primary hover:transition duration-200 ease-out  bg-emerald-400 hover:bg-transparent   hover:text-black  focus:outline-none  "
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
