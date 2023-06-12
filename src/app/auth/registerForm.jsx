"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../services/authServices";

import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-hot-toast";

function RegisterForm({ setStep }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    mobile: "",
  });
  const {
    data: registerData,
    error,
    isLoading,
    mutateAsync: mutateRegister,
  } = useMutation({
    mutationFn: register,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateRegister(user);

      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.errors?.message);
    }
  };
  return (
    <div>
      <div className="min-h-screen text-center  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">ثبت نام</h1>
              </div>

              <form onSubmit={submitHandler}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="username"
                        onChange={(e) => {
                          setUser({ ...user, username: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        نام کاربری
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="password"
                        onChange={(e) => {
                          setUser({ ...user, password: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        رمز عبور
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="fist_name"
                        name="fisrt_name"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="first_name"
                        onChange={(e) => {
                          setUser({ ...user, first_name: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        نام(اختیاری)
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="last_name"
                        onChange={(e) => {
                          setUser({ ...user, last_name: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        نام خانوادگی(اختیاری)
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="mobile"
                        name="mobile"
                        type="number"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="mobile"
                        onChange={(e) => {
                          setUser({ ...user, mobile: e.target.value });
                        }}
                      />
                      <label className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        موبایل(اختیاری)
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-amber-500  text-white rounded-md mt-10 px-2 py-2"
                      >
                        {isLoading ? (
                          <ThreeDots
                            height="40"
                            width="75"
                            radius="9"
                            color="rgb(var(--color-primary-900))"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            visible={true}
                          />
                        ) : (
                          "ارسال"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <button
                onClick={() => setStep(2)}
                className="text-amber-600  mt-5 px-2 py-2"
              >
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
