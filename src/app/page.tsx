"use client";

import MainNavigation from "@/components/MainNavigation";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
export default function Home() {
  const [selected, setSelected] = useState({
    categoryId: "648343164bc83c8d3dbfe5a9",
    hardshipId: "648343524bc83c8d3dbfe5bf",
  });

  const [categoryValues, setCategoryValues] = useState<any[]>([]);
  const [hardshipValues, setHardshipValues] = useState<any[]>([]);
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code here will only run on the client side

      const fetchData = async () => {
        try {
          const resCategory = await axios.get(
            "http://localhost:2000/category/all"
          );
          const resHardship = await axios.get(
            "http://localhost:2000/hardship/all"
          );
          const category = resCategory.data;
          const hardship = resHardship.data;
          setCategoryValues(category.data.category);
          setHardshipValues(hardship.data.hardship);
          console.log(categoryValues, hardshipValues);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchData();
    }
  }, []);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected({
      ...selected,
      categoryId: event.target.value,
    });
  };

  const handleHardshipChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected({
      ...selected,
      hardshipId: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/sentence/random",
        selected
      );

      setSentence(response.data.data.result.text);
      // Handle successful response
    } catch (error) {
      // Handle error
      // if (error instanceof Error) toast(error?.response?.data?.errors?.message);

      toast("لطفا مجددا تلاش کنید");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bt-24 shadow-xl mb-7 pt-8 pr-8 pb-8 pl-8 sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6">
            <div>
              <p className="block text-3xl font-bold tracking-tight text-gray-900 leading-6  sm:text-4xl">
                سوال، کلمه و موضوع
              </p>
              <p className="block pt-5 text-3xl font-bold tracking-tight text-gray-900 leading-6  sm:text-4xl">
                پانتومیم جالب و سرگرم کننده
                <br />
              </p>
              <p
                className="block pt-5 text-blue-700 text-3xl font-bold tracking-tight  sm:text-4xl
              sm:leading-none"
              >
                پیدا کن
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-lg text-right text-gray-700">
              پانتومیم یکی از بازی های جالب برای دورهمی ها است. جملات و کلمات
              موضوع اصلی پانتومیم هستند و یکی از روش های خوب برای افزایش خلاقیت
              میان افراد است. در ایران به پانتومیم، لال بازی هم می گویند و یک
              بازی شادی بخش است که بین دو گروه و یا دو نفر قابل انجام است و با
              استفاده از کلمات و ضرب المثل ها می توانید این بازی را انجام دهید.
            </p>
            <a
              className="w-3/12 text-blue-700 text-center flex font-semibold items-center transition-colors duration-200
            hover:text-blue-900"
            >
              بیشتر بخوانید
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-white  pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto flex flex-col items-center relative lg:flex-row lg:py-5
    xl:py-4 md:px-2"
      >
        <div
          className=" flex justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
      lg:items-center"
        >
          <div className="md:max-w-md px-4 md:px-20 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label className="block text-center mb-10 mt-10 text-2xl  font-medium text-gray-900 dark:text-gray-900">
                هر چی که میخوای انتخاب کن
              </label>

              <label className="block text-center text-xl mb-2  font-medium text-gray-900 dark:text-gray-900">
                کلمه باشه؟ ضرب المثل؟ یا چی؟
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selected.categoryId}
                onChange={handleCategoryChange}
              >
                {categoryValues.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.title}
                  </option>
                ))}
              </select>
              <label className="block text-center text-xl mb-2  font-medium text-gray-900 dark:text-black">
                سخت باشه؟ یا آسون؟
              </label>
              <select
                id="hardship"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selected.hardshipId}
                onChange={handleHardshipChange}
              >
                {hardshipValues.map((h) => (
                  <option key={h._id} value={h._id}>
                    {h.title}
                  </option>
                ))}
              </select>
              <button className="w-full py-2 rounded-lg bg-amber-500 text-white hover:scale-110		">
                ارسال
              </button>
            </form>

            <div className="text-red-500  mt-10 text-3xl rounded-lg border-2  h-60  border-amber-500 justify-center flex items-center">
              <p className="text-gray-900 ">
                {" "}
                {sentence ? sentence : "دکمه ارسال رو بزن"}{" "}
              </p>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
        <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-10 lg:max-w-screen-xl">
          <img
            alt="Picture of the author"
            src="/images/2.jpg"
            className="object-contain object-top btn- w-full h-auto lg:w-auto
        lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
