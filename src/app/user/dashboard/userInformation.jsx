"use client";
import { useState } from "react";
import { toLocalDateString } from "./../../../utils/toLocalDate";

function UserInformation() {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user : {};
    } else {
      return 0;
    }
  });

  return (
    <div className="px-12">
      <div className="min-h-screen text-center  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-3xl ">
          <div className="absolute inset-0 bg-gradient-to-r  from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl ">
            <div className="max-w-md mx-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full   rounded-lg ">
                <div className="">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 text-center mt-20">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                      {user.first_name} {user.last_name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <span>تاریخ ثبت نام: </span>
                      {toLocalDateString(user.createdAt)}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      موبایل:‌{user.mobile ? user.mobile : ""}
                    </div>
                  </div>

                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        {/* <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          An artist of considerable range, Jenna the name taken
                          by Melbourne-raised, Brooklyn-sdasdsdasbased Nick
                          Murphy writes, performs and records sadasdsall of his
                          own music, giving it a warm, intimate sadasfeel with a
                          solid groove structure. An artist osadasdsf
                          considerable range.
                        </p> */}
                        {/* <a
                          href="javascript:void(0);"
                          className="font-normal text-pink-500"
                        >
                          Show more
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative  pt-8 pb-6 mt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      <a
                        href="https://www.creative-tim.com/product/notus-js"
                        className="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-500 hover:text-blueGray-800"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserInformation;
