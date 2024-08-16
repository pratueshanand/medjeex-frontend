import React from "react";
import { useNavigate } from 'react-router-dom';
import CardImage from "../../asset/images/Tutor_image.png";

const GetStarted = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/courses');
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-10">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img src={CardImage} alt="Placeholder" className="w-full h-auto max-w-lg md:max-w-xl" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          INDIA’S Most Trusted Platform For JEE & NEET Preparation
        </h1>
        <h4 className="text-xl md:text-2xl font-medium mb-6">
          Let’s Unlock Your Potential by Enrolling in SGP
        </h4>
        <button onClick={handleGetStartedClick} className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-800 self-center md:self-start">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
