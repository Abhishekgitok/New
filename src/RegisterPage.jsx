import React from "react";
// import { LuUser2 } from "react-icons/lu";
import { FaUser, FaLock } from "react-icons/fa";

function RegisterPage() {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:ml-10 ">
        {/* Left Side  */}
        <div className="relative mt-10">
          <div className="relative">
            <img
              className="hidden md:block h-[670px] w-[750px]"
              src="login-left.svg"
              alt="img.svg"
              // style={{ objectFit: "contain" }}
            />
          </div>

          <div className="absolute top-10 left-20">
            <h1 className="text-5xl hidden md:block font-semibold text-cyan-600">
              Welcome Back!
            </h1>
            <p className="max-w-[510p] hidden md:block text-gray-500 pt-3 font-medium tracking-tight">
              with otomashen, you'll streamline your hiring process,allowing you
              to <br /> focus on business growth and success.
            </p>
          </div>
          <div className="absolute bottom-24 left-20">
            <p className="font-medium text-cyan-600">
              We'll help you to enhance your hiring process.
            </p>
          </div>
        </div>

        {/* Right side container  */}

        <div className="mt-28  xl:mt-20   ">
          <div className="">
            <h1 className="text-5xl uppercase font-extrabold text-cyan-600 text-center ">
              Ats
            </h1>
            <p className="font-medium text-gray-500 text-center">
              Applicant Tracking System
            </p>
          </div>

          <div className="w-full mt-20 items-center justify-center flex   ">
            <div className=" ">
              <h1 className="text-2xl font-medium leading-tight tracking-tight pb-2 text-center  ">
                Log in to your account
              </h1>
              <form className="pt-3 w-[350px] xl:w-[400px] px- " action="">
                <div className="pb-5 relative">
                  <span className="absolute inset-y-0 bottom-3 left-0 flex items-center pl-3 ">
                    <FaUser className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none w-full p-2.5 pl-10"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                    <FaLock className="text-gray-500" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none w-full p-2.5 pl-10"
                    required
                  />
                </div>

                <div className="flex items-center justify-between mx-2 pt-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50  "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-gray-500 ">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white  bg-cyan-600 uppercase  font-medium  text-xl px-5 py-2.5 mt-10 text-center "
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
