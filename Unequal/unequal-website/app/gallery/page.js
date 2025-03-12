import React from "react";

const images = [
  { src: "/holdingbeer.jpeg", alt: "Portrait 1", orientation: "portrait" },
  { src: "/dune2.jpeg", alt: "Landscape 1", orientation: "landscape" },
  { src: "/SPIKE.jpeg", alt: "Portrait 2", orientation: "portrait" },
  { src: "/squad.JPG", alt: "Landscape 2", orientation: "landscape" },
  { src: "/IMG_8415.jpeg", alt: "Portrait 3", orientation: "portrait" },
  { src: "/BOYS.JPG", alt: "Landscape 3", orientation: "landscape" },
  { src: "/BEV.jpg", alt: "Portrait 4", orientation: "portrait" },
  { src: "class.JPG", alt: "Landscape 4", orientation: "landscape" },
  { src: "/rowclay.JPG", alt: "Portrait 5", orientation: "portrait" },
  { src: "/1H.JPG", alt: "Landscape 5", orientation: "landscape" },
  { src: "/stanced.JPG", alt: "Portrait 6", orientation: "portrait" },
  { src: "/squad.JPG", alt: "Landscape 6", orientation: "landscape" },
  {src: "/SOUPV.JPG", alt: "Portrait 6", orientation: "portrait" }
];

const MasonryGallery = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Image Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative w-full overflow-hidden rounded-lg shadow-lg ${image.orientation === "portrait" ? "row-span-2" : "row-span-1"}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;