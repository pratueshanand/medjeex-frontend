import React from "react";
import CardImage from "../../asset/images/Medjeex_Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full h-40 grid grid-cols-[5rem_1fr_2fr_1fr_5rem] items-center mx-auto p-4">
        
        <div className="flex justify-center">
          <a href="#" className="flex items-center">
            <img src={CardImage} className="h-8" alt="Logo" />
          </a>
        </div>

        {/* Left Navigation */}
        <div className="flex justify-center">
          <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Test Series
              </a>
            </li>
          </ul>
        </div>

        {/* Title Section */}
        <div className="flex justify-center">
          <a href="#" className="flex flex-col items-center text-center">
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">MEDJEEX</span>
            <hr className="w-full border-t-2 border-gray-950 my-1" />
            <span className="text-xs text-gray-700 dark:text-gray-400">NEET | JEE | FOUNDATION</span>
          </a>
        </div>

        {/* Right Navigation */}
        <div className="flex justify-center">
          <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Hey! Dumyname
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
