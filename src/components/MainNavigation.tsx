"use client";
import Link from "next/link";
import { useGetUser } from "./../app/hooks/useAuth";
import { BiHomeSmile, BiClipboard, BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "@/app/services/authServices";
import { toast } from "react-hot-toast";
const MainNavigation = () => {
  const { data, error, isLoading } = useGetUser();
  let { user } = data || {};

  const logOutHandler = () => {
    async function logOutFunction() {
      const {data} = await logout();

      toast.success(data?.message);
      user = {};
      setTimeout(() => {
        document.location.href = "/";
      }, 1500);
    }
    logOutFunction();
    return null;
  };
  return (
    <header
      className={`shadow-md mb-10 top-0 transition-all duration-200 bg-white dark:bg-gray-900 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav>
        <ul className=" items-center  flex justify-between py-2 container xl:max-w-screen-xl">
          <li></li>
          <li>
            <Link
              className="flex justify-center items-center  py-2 text-gray-900 dark:text-white  hover:text-amber-400"
              href="/"
            >
              <BiHomeSmile className="h-6 w-6 text-amber-600 hover:text-gray-600" />{" "}
              خانه
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-center items-center py-2  text-gray-900 dark:text-white  hover:text-amber-400"
              href="/"
            >
              <BiClipboard className="h-6 w-6 text-amber-600 hover:text-gray-600" />
              بلاگ ها
            </Link>
          </li>
          <li></li> <li></li>
          {user ? (
            <li className="flex justify-center items-center">
              <AiOutlineUser className="h-6 w-6 text-amber-600 hover:text-gray-600" />
              {user.first_name} خوش آمدید!
              <button
                onClick={logOutHandler}
                href="/auth/logout"
                className=" hover:text-amber-400 "
              >
                خروج
              </button>
            </li>
          ) : (
            <li>
              <Link
                className="flex justify-center items-center py-2  text-gray-900 dark:text-white  hover:text-amber-400"
                href="/auth"
              >
                <BiLogIn className="h-6 w-6 text-amber-600 hover:text-gray-600" />
                ورود
              </Link>
            </li>
          )}
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
