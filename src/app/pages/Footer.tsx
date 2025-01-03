'use client'
import { FC } from 'react'
import { useState } from "react";
const Footer: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

  const images = [
   'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image1.jpg',
    'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image2.jpg',
    'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image3.jpg',
    'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image4.jpg'
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return <footer>
    <div className="flex justify-center items-center space-x-4 overflow-hidden">
      <div
        className={`relative flex w-64 h-64 transition-all duration-500 ease-in-out `}
        style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
      >
        <img
          src={images[0]}
          alt="Image 1"
          className="w-64 h-64 object-cover cursor-pointer"
          onClick={() => handleImageClick(1)}
        />

        <img
          src={images[1]}
          alt="Image 2"
          className="w-64 h-64 object-cover cursor-pointer"
          onClick={() => handleImageClick(2)}
        />

        <img
          src={images[2]}
          alt="Image 3"
          className="w-64 h-64 object-cover cursor-pointer"
          onClick={() => handleImageClick(3)}
        />
</div>
    </div>
  </footer>
}
export default Footer
