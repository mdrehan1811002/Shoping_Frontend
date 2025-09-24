import React from "react";

const categories = [
  {
    name: "Kilos",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",
  },
  {
    name: "Mobiles",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    name: "Fashion",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    name: "Electronics",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100",
  },
  {
    name: "Home & Furniture",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    name: "Appliances",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100",
  },
  {
    name: "Flight Bookings",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100",
  },
  {
    name: "Beauty, Toys & More",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
  },
  {
    name: "Beauty, Toys & More",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
  },
  {
    name: "Beauty, Toys & More",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
  },
  {
    name: "Beauty, Toys & More",
    img: "https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
  },
];

export default function CategoryProduct() {
  return (
    <div className="w-[85vw] sm:w-[93vw] h-[170px] bg-white mx-auto flex gap-3 overflow-x-auto overflow-y-hidden p-3 scroll-smooth no-scrollbar">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="min-w-[120px] h-[140px] rounded-lg p-2 flex-shrink-0 bg-white text-center shadow-sm hover:shadow-md transition  my-2"
        >
          <img
            src={cat.img}
            alt={cat.name}
            className="h-[99px] w-full object-contain mx-auto"
          />
          <p className="mt-1 text-sm text-gray-700">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
