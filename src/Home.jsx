import React, { useState, useEffect } from "react";
import HomeImg from "/img/home-img.png";

import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TbCaretDownFilled } from "react-icons/tb";

import { products } from "./data.js";
import RatingPage from "./Rating";
import Category from "./Category.jsx";

const Home = () => {
  const PRODUCTS_PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    if (currentPage === 1 && products.length > PRODUCTS_PER_PAGE) {
      // Automatically navigate to page 2 after 5 seconds (example)
      const timer = setTimeout(() => {
        setCurrentPage(3);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, products.length]);

  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <>
      <div className="w-full h-1 mt-15 bg-[#F6F7F8] "></div>
      <div className="flex mx-[21.4px] gap-[21.4px]">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[260px] bg-white ">
          {/* Hot Section */}
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Hot Deals</h2>
            <ul className="space-y-4 text-sm bg-gray">
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Nike</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  2
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group  my-5">
                <span className="group-hover:text-[#33A0FF]">Airmax</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  48
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Nike</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  14
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Adidas</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  15
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Vans</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  23
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">All Stars</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  1
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Adidas</span>
                <span className=" text-[#969696] group-hover:text-[#33A0FF]">
                  95
                </span>
              </li>
            </ul>
          </div>

          {/* Price Section */}
          <div className="bg-[#F6F7F8] p-4">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-5">Price</h2>
              <div className="text-[12px] text-[#3A3A3A] mb-2 flex justify-between">
                <span>Ranger:</span>
                <span>$13.99 - $25.99</span>
              </div>
              <input
                type="range"
                min="13.99"
                max="25.99"
                value="20"
                className="w-full h-[6px] appearance-none rounded-full bg-[#DADADA] accent-[#33A0FF] focus:outline-none"
              />
            </div>
          </div>

          {/* Color Section */}
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Color</h2>
            <div className="flex gap-4">
              <span className="w-5 h-5 rounded-full border-2 border-[#33A0FF] bg-white cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-black cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-yellow-400 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-pink-500 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Brand Section */}
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Brand</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Nike</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  99
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Adidas</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  99
                </span>
              </li>
              <li className="flex justify-between cursor-pointer group my-5">
                <span className="group-hover:text-[#33A0FF]">Siemens</span>
                <span className="text-[#969696] group-hover:text-[#33A0FF]">
                  99
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F6F7F8]  hover:text-[#33A0FF]">
            <a href="" className="flex justify-center text-lg p-3">
              More
            </a>
          </div>
        </aside>

        {/* Main Section */}
        <main className="flex-1">
          {/* Banner */}
          <div
            className="
  bg-sky-400  p-10 text-white 
  flex flex-col sm:flex-col md:flex-row 
  justify-between items-center my-5 
"
          >
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold leading-snug">
                Adidas Men Running <br /> Sneakers
              </h1>
              <p className="mt-2 text-white/80">
                Performance and design. Taken right to the edge.
              </p>
              <button className="mt-4 underline font-semibold">Shop Now</button>
            </div>

            <img
              src={HomeImg}
              alt="Sneakers"
              className="w-100 object-contain rotate-y-180 mb-[-30px] md:mt-0"
            />
          </div>

          {/* Sort / Filter Bar */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-[#F1F3F4] py-3 gap-3 ">
            {/* Left side: Items, Sort, Show with left and right padding */}
            <div className="flex gap-6 items-center  px-3">
              {/* Items & Sort */}
              <div className="flex items-center gap-2 relative">
                <span className="text-black text-sm mx-4">13 Items</span>
              </div>

              {/* Short */}
              <div className="flex items-center gap-2 relative mx-4">
                <span className="text-black text-sm">Short By</span>
                <div className="relative w-32 rounded-lg border border-gray-200 overflow-hidden hover:bg-blue-50">
                  <select className="appearance-none w-full px-3 py-2 text-sm bg-[#F1F3F4] focus:ring-2 focus:ring-blue-400 outline-none pr-8">
                    <option>Name</option>
                    <option>Price</option>
                    <option>Popularity</option>
                  </select>
                  <button className="w-4 h-4 text-black absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <TbCaretDownFilled size={14} />
                  </button>
                </div>
              </div>

              {/* Show */}
              <div className="flex items-center gap-2 relative mx-4">
                <span className="text-black text-sm">Show</span>
                <div className="relative w-32 rounded-lg border border-gray-200 overflow-hidden hover:bg-blue-50">
                  <select className="appearance-none w-full px-3 py-2 text-sm bg-[#F1F3F4] focus:ring-2 focus:ring-blue-400 outline-none pr-8">
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                  </select>
                  <button className="w-4 h-4 text-black absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <TbCaretDownFilled size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Grid / List View Icons */}
            <div className="flex gap-2 px-3">
              <button className="p-2 hover:text-blue-500 hover:bg-gray-200 rounded-lg ">
                <CgMenuGridR size={30} />
              </button>
              <button className="p-2 hover:text-blue-500 hover:bg-gray-200 rounded-lg">
                <IoMdMenu size={30} />
              </button>
            </div>
          </div>
          <div className=" mx-auto flex md:hidden ">
            <Category />
          </div>
          {/* Product grid */}
          <div
            className="w-full mt-6 grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                {/* Image section */}
                <div className="bg-[#F6F7F8] relative h-40 p-4 ">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.label}
                  </span>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text/details section */}
                <div className="p-4 flex flex-col flex-1 justify-between text-center">
                  <h3 className="text-sm font-semibold break-words">
                    {product.name}
                  </h3>
                  <div className="text-yellow-400 text-sm mt-1">
                    <RatingPage value={product.rating} />
                  </div>
                  <div className="mt-1 text-sm">
                    <span className="text-blue-500 font-bold">
                      ${product.price}
                    </span>{" "}
                    <span className="line-through text-gray-400">
                      ${product.oldPrice}
                    </span>{" "}
                    <span className="text-red-500">{product.discount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="bg-[#F6F7F8] mt-6 flex space-x-2 py-0.5 justify-center items-center">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`flex items-center justify-center w-12 h-12 text-lg rounded-md transition mx-2 ${
                  currentPage === idx + 1
                    ? "bg-[#33A0FF] text-white"
                    : "text-gray-500 hover:bg-[#33A0FF] hover:text-white"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
