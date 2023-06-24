"use client";
import { ThreeDots } from "react-loader-spinner";
import { login } from "../../services/authServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
function LoginForm({ setStep }) {
  const [loading, setLoading] = useState(false);
  const [buttonCounter, setButtonCounter] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localButton = localStorage.getItem("buttonCounter");
      return localButton ? localButton : 0;
    } else {
      return 0;
    }
  });
  const [timer, setTimer] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localTimer = localStorage.getItem("timer");
      return localTimer ? localTimer : 0;
    } else {
      return 0;
    }
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let {
    data: loginData,
    error,
    isLoading,
    mutateAsync: mutateLogin,
  } = useMutation({
    mutationFn: login,
  });

  useEffect(() => {
    localStorage.setItem("buttonCounter", buttonCounter);
    localStorage.setItem("timer", timer);

    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    localStorage.removeItem("timer");

    localStorage.removeItem("buttonCounter");
    setButtonCounter(0);
  }, [timer]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setButtonCounter((prevState) => prevState + 1);
      if (buttonCounter > 3) {
        toast.error(" 30 ثانیه منتظر بمانید");
        setTimer(20);
      }

      const data = await mutateLogin(user);
      setLoading(true);
      toast.success(data?.message);
      setTimeout(() => {
        document.location.href = "/";
      }, 1500);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.errors?.message);
    }
  };

  return (
    <div>
      <div className="min-h-screen m-10 text-center py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 ">
          <div className="absolute inset-0 bg-gradient-to-r  from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white  mx-auto shadow-lg rounded-3xl sm:p-20">
          
              <div>
                <h1 className="text-2xl font-semibold">ورود</h1>
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
                      <button
                        className="bg-amber-500 w-full  text-white rounded-md mt-10 px-2 py-2 disabled:bg-amber-400 disabled:cursor-not-allowed"
                        disabled={loading || isLoading || buttonCounter > 4}
                      >
                        {isLoading || loading ? (
                          <ThreeDots
                            height="30"
                            width="55"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            visible={true}
                          />
                        ) : loading || isLoading || buttonCounter > 4 ? (
                          timer.toString()
                        ) : (
                          "ارسال"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="text-amber-600  mt-10 px-2 py-2"
                >
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default LoginForm;
