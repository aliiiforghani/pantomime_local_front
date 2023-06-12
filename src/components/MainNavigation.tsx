"use client";
import Link from "next/link";
import { useGetUser } from "./../app/hooks/useAuth";
const MainNavigation = () => {
  const { data, error, isLoading } = useGetUser();
  const { user } = data || {};

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
              className="block py-2 text-gray-900 dark:text-white  hover:text-amber-400"
              href="/"
            >
              خانه
            </Link>
          </li>

          <li>
            <Link
              className="block py-2  text-gray-900 dark:text-white  hover:text-amber-400"
              href="/"
            >
              بلاگ ها
            </Link>
          </li>

          {user ? (
            <span className="hover:text-amber-400  text-gray-900 dark:text-white ">
              خوش آمدید {user.first_name}
            </span>
          ) : (
            <li>
              <Link
                className="block py-2 hover:underline  text-gray-900 dark:text-white  hover:text-amber-400"
                href="/auth"
              >
                ورود
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
