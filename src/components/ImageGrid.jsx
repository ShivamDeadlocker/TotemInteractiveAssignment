import React from "react";

const images = [
  { id: 1, src: "public/images/img1.png", alt: "Virtual Shopping" },
  { id: 2, src: "/images/img2.png", alt: "Designing UI" },
  { id: 3, src: "/images/img3.png", alt: "Hacker Interface" },
  { id: 4, src: "/images/img4.png", alt: "VR Headset" },
  { id: 5, src: "/images/img5.png", alt: "Developer at Work" },
  { id: 6, src: "/images/img6.png", alt: "Gamer in Action" },
  { id: 7, src: "/images/img7.png", alt: "Victory Achive" },
];

export default function ImageGrid() {
  return (
    <>
       
    <div className="flex justify-center items-center min-h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 py-8 border-1">
      {/* Column 1: Single Image */}
      <div className="flex justify-center items-center">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md object-cover "
        />
      </div>

      {/* Column 2: Two Images */}
      <div className="flex flex-col gap-4">
        <img
          src={images[1].src}
          alt={images[1].alt}
          className="w-full h-full sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md object-cover"
        />
        <img
          src={images[2].src}
          alt={images[2].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md object-cover "
        />
      </div>

      {/* Column 3: Single Image */}
      <div className="flex justify-center">
        <img
          src={images[3].src}
          alt={images[3].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[415px] rounded-lg shadow-md object-cover "
        />
      </div>

      {/* Column 4: Two Images */}
      <div className="flex flex-col gap-4">
        <img
          src={images[4].src}
          alt={images[4].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md  object-cover"
        />
        <img
          src={images[5].src}
          alt={images[5].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md object-cover "
        />
      </div>

      {/* Column 5: Single Image */}
      <div className="flex justify-center items-center">
        <img
          src={images[6].src}
          alt={images[6].alt}
          className="w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[200px] rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
    </div>
  </>  
  );
}
