"use client";

import { useState } from "react";
import AddSentence from "./addSentence";

function DashboardPage() {
  const [step, setStep] = useState(3);

  const render = () => {
    switch (step) {
      case 1:
        return <h1>dashboard</h1>;
        break;
      case 2:
        return <h1>user profile</h1>;
        break;
      case 3:
        return <AddSentence />;
        break;

      default:
        break;
    }
  };

  return (
    <div className=" sm:grid sm:grid-cols-7 sm:gap-4 sm:mt-7 aspect-auto container mx-auto">
      <div className="bg-white overflow-auto pb-4 flex mt-16 mb-6  h-fit sm:rounded-2xl shadow-2xl sm:col-span-2 sm:grid sm:grid-row-4 sm:gap-0">
        <button className="sm:bg-white sm:text-gray-900 items-center rounded-full p-2 mr-5 mt-5 flex sm:ml-2 sm:rounded-lg sm:hover:text-amber-500 sm:hover:bg-gray-100   bg-amber-500 text-white ">
          داشبورد
        </button>
        <button className="sm:bg-white sm:text-gray-900 items-center rounded-full p-2 mr-5 mt-5 flex sm:ml-2 sm:rounded-lg sm:hover:text-amber-500 sm:hover:bg-gray-100   bg-amber-500 text-white ">
          اطلاعات کاربر
        </button>
        <button
          onClick={() => setStep(3)}
          className="sm:bg-white sm:text-gray-900 items-center rounded-full p-2 mr-5 mt-5 flex sm:ml-2 sm:rounded-lg sm:hover:text-amber-500 sm:hover:bg-gray-100 hover:gray-amber-500 bg-amber-500 text-white "
        >
          پیشنهاد جدید
        </button>
        <button className="sm:bg-white sm:text-gray-900 items-center rounded-full p-2 mr-5 mt-5 flex sm:ml-2 sm:rounded-lg sm:hover:text-amber-500 sm:hover:bg-gray-100   bg-amber-500 text-white ">
          پیشنهادات
        </button>
      </div>
      <div className="col-span-5 hover:text-amber-500">{render()}</div>
    </div>
  );
}

export default DashboardPage;
