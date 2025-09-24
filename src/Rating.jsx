import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// ⭐ Rating Component
const Rating = ({ value = 5, onChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (hover || value); // default ya hover
        return (
          <FaStar
            key={star}
            size={15}
            className={`cursor-pointer transition ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => onChange && onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

// ⭐ Page Example
export default function RatingPage({ value }) {
  // Agar parent se value mila hai toh use karo,
  // warna default 5 le lo
  const [rating, setRating] = useState(value ?? 4);

  return (
    <div className="flex flex-col items-center justify-center ">
      <Rating value={rating} onChange={setRating} />
    </div>
  );
}
