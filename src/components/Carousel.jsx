import { useState } from "react";
import { volcano, jungle } from "../assets";

const Carousel = () => {
  const images = [volcano, jungle];
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
