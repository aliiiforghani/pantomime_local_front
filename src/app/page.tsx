"use client";
// import "./globals.css";
import MainNavigation from "@/components/MainNavigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  getCategory,
  getHardship,
  getRandomSentence,
} from "./services/sentenceServices";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Home() {
  const [selected, setSelected] = useState({
    categoryId: "64c699c3188ea1c9d208c75f",
    hardshipId: "64c699fcbf9bd8883fa1f2d9",
  });

  const [categoryValues, setCategoryValues] = useState<any[]>([]);
  const [hardshipValues, setHardshipValues] = useState<any[]>([]);
  const [sentence, setSentence] = useState("");

  const {
    data: cateogry,
    error: categoryError,
    isLoading: categoryLoading,
    mutateAsync: mutateCategory,
  } = useMutation({
    mutationFn: getCategory,
  });
  const {
    data: hardship,
    error: hardshipError,
    isLoading: hardshipLoading,
    mutateAsync: mutateHardship,
  } = useMutation({
    mutationFn: getHardship,
  });
  const {
    data: randomSentence,
    error: sentenceError,
    isLoading: sentenceLoading,
    mutateAsync: mutateSentence,
  } = useMutation({
    mutationFn: getRandomSentence,
  });

  useEffect(() => {
    async function fetchCategory() {
      try {
        const categoryData = await mutateCategory();
        const hardshipData = await mutateHardship();
        setCategoryValues(categoryData.category);
        setHardshipValues(hardshipData.hardship);
      } catch (error) {}
    }
    fetchCategory();
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
      setSentence("");
      const response = await mutateSentence(selected);
      setSentence(response.text);
    } catch (error: any) {
      if (error?.response?.data?.errors?.message)
        toast.error(error?.response?.data?.errors?.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12 aspect-auto container mx-auto ">
      <div className=" flex shadow-xl mb-7 pt-8 pr-8 pb-8 pl-8 sm:p-16rounded-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6  lg:text-right text-center">
            <div className=" bg-white ">
              <p className="block t  font-bold tracking-tight text-gray-900 leading-6 text-2xl  sm:text-3xl">
                کلمه ، شعر و ...
              </p>
              <p className="block  pt-6  font-bold tracking-tight text-gray-900 leading-6 text-2xl  sm:text-3xl">
                موضوع پانتومیم جالب
              </p>
              <p className="block  pt-6  font-bold tracking-tight text-gray-900 leading-6 text-2xl  sm:text-3xl">
                و سرگرم کننده
              </p>
              <p
                className="block pt-5 font-bold tracking-tight  text-2xl  sm:text-3xl
              sm:leading-none"
              >
                پیدا کن
              </p>
            </div>
          </div>
          <div className="lg:w-1/2  bg-white ">
            <p className="mb-4 text-lg text-right text-gray-700">
              پانتومیم یکی از بازی های جالب برای دورهمی ها است. جملات و کلمات
              موضوع اصلی پانتومیم هستند و یکی از روش های خوب برای افزایش خلاقیت
              میان افراد است. در ایران به پانتومیم، لال بازی یا ادابازی هم می
              گویند و یک بازی شادی بخش است که بین دو گروه و یا دو نفر قابل انجام
              است و با استفاده از کلمات و ضرب المثل ها می توانید این بازی را
              انجام دهید. ما کلمات پانتومیم جالب را به شما می گوییم.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-2xl pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto flex flex-col items-center relative lg:flex-row lg:py-5
    xl:py-4 md:px-2"
      >
        <div
          className="  justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
      lg:items-center"
        >
          <div className="lg::max-w-md px-4  mx-auto">
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
              <button className="w-full py-2 rounded-lg border-2 border-amber-500 bg-amber-500 text-white 	hover:bg-white hover:text-gray-900	">
                ارسال
              </button>
            </form>
            <div className="mt-10 container mb-5 md:mb-0 text-center text-2xl rounded-lg border  h-60 bg-gray-50  border-gray-300 justify-center flex items-center">
              <p className="text-gray-900 leading-relaxed ">
                {sentence ? (
                  sentence
                ) : sentenceLoading ? (
                  <ThreeDots
                    height="30"
                    width="55"
                    radius="9"
                    color="#d97706"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    visible={true}
                  />
                ) : (
                  <PacmanLoader color="hsla(41, 100%, 47%, 1)" />
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-10 lg:max-w-screen-xl">
          <img
            alt="Picture of the pantomime"
            src="/images/cover.png"
            className="object-contain object-top btn- w-full h-auto lg:w-auto
        lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
