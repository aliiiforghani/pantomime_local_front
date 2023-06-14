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
    <div className="grid grid-cols-7 gap-4 mt-7">
      <div className="bg-white rounded-2xl shadow-2xl col-span-2 grid grid-row-4 gap-0">
        <button className="mr-5 mt-5 flex ">داشبورد</button>
        <button className="mr-5 mt-5 flex ">اطلاعات کاربر</button>
        <button onClick={() => setStep(3)} className="mr-5 mt-5 flex ">
          پیشنهاد جدید
        </button>
        <button className="mr-5 mt-5 flex ">پیشنهادات</button>
      </div>
      <div className="col-span-5">{render()}</div>
    </div>
  );
}

export default DashboardPage;
