import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardImage from "../../asset/images/Medjeex_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleCourseClick = () => {
    navigate("/courses");
  };

  return (
    <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <img src={CardImage} className="h-16" alt="Logo" />
          </a>
          <ul className="hidden md:flex font-medium flex-row space-x-8">
            <li>
              <a
                onClick={handleCourseClick}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                Course
              </a>
            </li>
            <li>
              <a
                onClick={handleCourseClick}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                Test Series
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center mt-2 md:mt-0">
          <span className="text-2xl sm:text-3xl font-extrabold">MEDJEEX</span>
          <hr className="w-full border-t-2 border-gray-950 my-1" />
          <span className="text-xs sm:text-sm">NEET | JEE | FOUNDATION</span>
        </div>

        <ul className="hidden md:flex font-medium flex-row space-x-8">
          <li>
            <a
              onClick={handleContactClick}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
            >
              Hey! Dummyname
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-button"
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <a
                onClick={handleCourseClick}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              >
                Course
              </a>
            </li>
            <li>
              <a
                onClick={handleCourseClick}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              >
                Test Series
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={handleContactClick}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              >
                Hey! Dummyname
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Contact Form */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
