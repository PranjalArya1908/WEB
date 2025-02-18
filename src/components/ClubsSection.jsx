import React, { useState } from 'react';

const clubs = [
  {
    title: "Techshastra",
    description: "A group of tech enthusiasts and a cyberspace where innovation and creativity take place.",
    image: "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpga", 
    link: "#"
  },
  {
    title: "Sports Club",
    description: "A place where sports enthusiasts come together to create results.",
    image: "https://via.placeholder.com/500x500?text=Sports+Club",
    link: "#"
  },
  {
    title: "Cultural Club",
    description: "Exploring the world of events and functions.",
    image: "https://via.placeholder.com/500x500?text=Cultural+Club", 
    link: "#"
  }
];

function ClubCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % clubs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + clubs.length) % clubs.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Clubs</h1>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img 
          src={clubs[currentIndex].image} 
          alt={clubs[currentIndex].title}  
          className="w-full h-120 object-cover bg-gray-200"
          onError={(e) => e.target.src = "https://via.placeholder.com/500x300?text=Image+Not+Found"} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <div className="text-white mb-2">Clubs</div>
          <h2 className="text-4xl font-bold text-orange-500 mb-2">
            {clubs[currentIndex].title}
          </h2>
          <p className="text-white mb-4">{clubs[currentIndex].description}</p>
          <a 
            href={clubs[currentIndex].link} 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg self-start"
          >
            Visit Now &gt;
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {clubs.map((_, index) => (
          <span 
            key={index} 
            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevSlide} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
          Previous
        </button>
        <button onClick={nextSlide} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
}

export default ClubCarousel;
