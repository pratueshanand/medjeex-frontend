import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full bg-gray-200">
      <div className="relative h-56 overflow-hidden md:h-96">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute block w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L1 5l4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9l4-4-4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
