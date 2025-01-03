'use client'
import React from "react";

const ImageSlider = () => {
  const scrollToFirstImage = () => {
    const firstImage = document.getElementById("image-1");
    if (firstImage) {
      firstImage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4">
      {/* 第一张图片 */}
      <div
        id="image-1"
        className="min-w-[300px] snap-start flex-shrink-0 bg-blue-200 h-48 flex items-center justify-center"
      >
        <p>Image 1</p>
      </div>

      {/* 第二张图片 */}
      <div
        id="image-2"
        onClick={scrollToFirstImage}
        className="min-w-[300px] snap-start flex-shrink-0 bg-green-200 h-48 flex items-center justify-center cursor-pointer"
      >
        <p>Image 2 (Click me)</p>
      </div>

      {/* 第三张图片 */}
      <div
        id="image-3"
        className="min-w-[300px] snap-start flex-shrink-0 bg-red-200 h-48 flex items-center justify-center"
      >
        <p>Image 3</p>
      </div>
    </div>
  );
};

export default ImageSlider;
