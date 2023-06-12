import Link from "next/link";

const MainNavigation = () => {
  return (
    <div className="bg-white shadow-xl pt-4 pr-8 pb-4 pl-8">
      <nav className="w-full">
        <div className="flex w-full justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
          <div className=" flex-row bg-white justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex">
            <Link
              href="#"
              className="text-gray-600 text-center mr-6 font-medium text-base"
            >
              خانه
            </Link>

            <Link
              href="/blogs"
              className="text-gray-600 text-center mr-6 font-medium text-base"
            >
              آموزش ها
            </Link>
          </div>
          <div className="bg-gray-700 flex-row flex items-center justify-center order-first md:order-none">
            {/* <img
              src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
              className="btn- w-12 md:w-16"
            /> */}
          </div>
          <div className=" justify-center items-center md:justify-start hidden md:flex">
            <Link
              href={"/auth"}
              className="h-10 p-3 text-white bg-amber-500 hover:bg-amber-600 hover:border-amber-600 border-2 flex
            items-center justify-center text-center border-amber-500 rounded-lg text-lg font-normal mr-auto"
            >
              ثبت نام/ورود
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <div className="outline-none mobile-menu-button">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 hover:text-green-500"
              >
                <path
                  d="M4 6h16M4 12h16M4
              18h16"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" md:hidden mobile-menu">
          <div>
            <div className="active">
              <Link
                href="#"
                className="text-gray-600 text-center mr-6 mt-2 font-medium text-base"
              >
                خانه
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-center mr-6 mt-2 font-medium text-base"
              >
                آموزش ها
              </Link>

              <Link
                href="auth"
                className="h-14 w-24 text-white bg-amber-700 hover:bg-amber-900 hover:border-amber-900 border-2 flex
              items-center justify-center text-center border-amber-700 rounded-lg text-lg font-normal mt-2 mr-auto
              ml-auto"
              >
                ثبت نام ورود
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
