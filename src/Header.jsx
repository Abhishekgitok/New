import React from "react";

function Header(props) {
  const rows = 4;
  const cols = 4;

  return (
    <>
      <section className=" bg-background  xl:h-[100vh] w-full mx-auto  ">
        <div className="w-full mx-auto pt-[25px]">
          <div className="flex flex-col xl:flex-row justify-cente items-center xl:justify-between h-full">
            <div className=" relative text-center   xl:text-left mt-[20px] xl:mt-0 ml-32">
              <h1 className="text-[48px]  font-semibold text-white mt-[-80px]">
                Discover the best course <br />
                for the best learning
              </h1>
              <p className=" mt-5 text-[15px] leading-8 font-normal  mx-auto xl:mx-0  xl:mb-10 text-white">
                Relatively permanent change in behavior or potential behavior as
                a result of the or practice occurring learning is the result of
                the interaction between stimulus a person has learned something
                if he can show a change in behavior.
              </p>
              {/* Btn */}
              <div className="max-w-[550px]">
                <form class=" mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  ></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
                      placeholder="Search your course here..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-[9px] 
            
                      bg-background hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-6 py-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Get started
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="  h-[100px] w-[300px]">
              <img src="our Customers.png" alt="" />
            </div>

            {/*********************** * Right side Section **************************** */}
            <div className="relative mr-[130px]">
              <div className="mt-[40px]">
                <div class="h-[500px] w-[500px] border-2 border-white rounded-full  "></div>
                <div class="absolute inset-0 top-[95px] left-[50px] h-[400px] w-[400px] bg-teal-400   rounded-full flex items-center justify-center"></div>
              </div>
              <div className="absolute   flex items-center w-[750px] right-[8px] justify-center  bottom- [1px] top-[37px] left-[-158px] ">
                <img src="student.png" alt="" />
              </div>
            </div>
            <div className="absolute flex  justify-end right-10 top-[160px]">
              {/* <DotGrid gridSize={4} />  */}
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: rows * cols }).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 bg-white rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
