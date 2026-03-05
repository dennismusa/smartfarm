import React, { useState, useEffect } from "react";

function ServiceCard({ images, icon, title, desc, features }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 overflow-hidden group relative"
    >
      {/* Image slider */}
      <div className="h-56 w-full overflow-hidden relative rounded-t-xl">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Card content */}
      <div className="p-6 text-center md:text-left">
        <div className="text-green-600 text-4xl mb-3 flex justify-center md:justify-start">{icon}</div>
        <h4 className="text-2xl font-bold mb-3 text-green-700 hover:text-green-800 transition-colors">
          {title}
        </h4>
        <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
        {features && (
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            {features.map((feat, idx) => (
              <li key={idx}>✅ {feat}</li>
            ))}
          </ul>
        )}
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
