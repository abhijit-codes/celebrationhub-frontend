import { useState } from "react";

export default function ImageGallery({ vendor }) {
  const [selected, setSelected] = useState(vendor.image);

  const images = [
    vendor.image,
    vendor.image,
    vendor.image,
  ];

  return (
    <div>

      {/* MAIN IMAGE */}
      <img
        src={selected}
        alt="vendor"
        className="w-full h-72 object-cover rounded-xl mb-4"
      />

      {/* THUMBNAILS */}
      <div className="flex gap-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelected(img)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border ${
              selected === img ? "border-purple-500" : ""
            }`}
          />
        ))}
      </div>

    </div>
  );
}