"use client";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
  addSentenceByUser,
  getCategory,
  getHardship,
} from "@/app/services/sentenceServices";

function AddSentence() {
  const [sentence, setSentence] = useState({
    title: "",
    text: "",
    category: "64c699c3188ea1c9d208c75f",
    hardship: "64c699fcbf9bd8883fa1f2d9",
  });

  const [categoryValues, setCategoryValues] = useState([]);
  const [hardshipValues, setHardshipValues] = useState([]);


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
    data: addedSentence,
    error: addError,
    isLoading: addLoading,
    mutateAsync: mutateAdd,
  } = useMutation({
    mutationFn: addSentenceByUser,
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await mutateAdd(sentence);
      if (response.message && response.sentence)
        setSentence({
          title: "",
          text: "",
          category: "64c699c3188ea1c9d208c75f",
          hardship: "64c699fcbf9bd8883fa1f2d9",
        });
      console.log(response);
      toast.success(response?.message);
     
    } catch (error) {
      toast.error(error?.response?.data?.errors?.message);
    }
  };
  return (
    <div className="px-12">
      <div className="min-h-screen text-center  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-3xl ">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">پیشنهاد جدید</h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        value={sentence.title}
                        id="title"
                        name="title"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="title"
                        onChange={(e) => {
                          setSentence({ ...sentence, title: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        عنوان
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="description"
                        name="description"
                        value={sentence.text}
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="description"
                        onChange={(e) => {
                          setSentence({ ...sentence, text: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        متن
                      </label>
                    </div>
                    <div className="relative">
                      <label className=" right-0 -top-3.5  text-gray-600 text-sm ">
                        دسته بندی
                      </label>
                      <select
                        id="hardship"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          setSentence({
                            ...sentence,
                            category: e.target.value,
                          });
                        }}
                      >
                        {categoryValues.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative">
                      <label className=" right-0 -top-3.5  text-gray-600 text-sm ">
                        درجه سختی
                      </label>
                      <select
                        id="hardship"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          setSentence({
                            ...sentence,
                            hardship: e.target.value,
                          });
                        }}
                      >
                        {hardshipValues.map((hardship) => (
                          <option key={hardship._id} value={hardship._id}>
                            {hardship.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-amber-500 w-full  text-white rounded-md mt-10 px-2 py-2  disabled:bg-amber-400 disabled:cursor-not-allowed"
                      >
                        ارسال
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSentence;
