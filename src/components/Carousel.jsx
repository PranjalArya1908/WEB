// src/ImageCarousel.js
import React, { useState } from 'react';

const carouselData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGVSKxCg0QKce4N2OOAXzmnP5W1vjemM4MQ&s",
    name: 'Prof. Onkar Singh',
    statement: 'This is a thought or statement from Prof. Onkar Singh.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/GurmitSingh.jpg',
    name: 'Lt. Gen. Gurmeet singh ',
    statement: 'Here is another insightful statement from Lt. Gen. Gurmeet singh.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/%22Subodh_Uniyal_-_July_2021.jpg%22.jpg',
    name: 'Subodh Uniyal',
    statement: 'Subodh Uniyal shares her thoughts here.',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative w-full max-w-320 mx-auto h-90  rounded-lg shadow-lg overflow-hidden bg-orange-300 flex flex-rows">
      <img
        src={carouselData[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className=" h-full object-cover"
      />
      <div className="p-4 text-center w-full">
        <h2 className="text-3xl font-semibold">{carouselData[currentIndex].name}</h2>
        <p className="text-gray-600 ">{carouselData[currentIndex].statement}</p>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-2">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;