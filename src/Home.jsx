import React, { useState, useMemo, useEffect } from "react";
import HomeImg from "/img/home-img.png";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TbCaretDownFilled } from "react-icons/tb";
import { products } from "./data.js";
import RatingPage from "./Rating";
import Category from "./Category.jsx";

const Home = () => {
  const colors = [
    { name: "white", class: "bg-white border border-gray-300" },
    { name: "red", class: "bg-red-500" },
    { name: "black", class: "bg-black" },
    { name: "yellow", class: "bg-yellow-400" },
    { name: "pink", class: "bg-pink-500" },
    { name: "gray", class: "bg-gray-300" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("Name");

  // Memoized sorted products
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "Price":
        return sorted.sort((a, b) => a.price - b.price);
      case "Popularity":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "Name":
      default:
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [sortBy]);

  // Calculate total pages when productsPerPage or product list changes
  const totalPages = useMemo(
    () => Math.ceil(sortedProducts.length / productsPerPage),
    [sortedProducts, productsPerPage]
  );

  // Clamp current page if it's out of bounds after per page change
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [productsPerPage, sortedProducts, totalPages, currentPage]);

  // Memoized current products for the page
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return sortedProducts.slice(start, end);
  }, [sortedProducts, currentPage, productsPerPage]);

  // Events
  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(3); // Automatically go to page 3 after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="w-full h-1 mt-15 bg-[#F6F7F8]" />
      <div className="flex mx-[21.4px] gap-[21.4px]">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[260px] bg-white">
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Hot Deals</h2>
            <ul className="space-y-4 text-sm">
              {[
                "Nike",
                "Airmax",
                "Nike",
                "Adidas",
                "Vans",
                "All Stars",
                "Adidas",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between cursor-pointer group my-5"
                >
                  <span className="group-hover:text-[#33A0FF]">{item}</span>
                  <span className="text-[#969696] group-hover:text-[#33A0FF]">
                    {Math.floor(Math.random() * 100)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F6F7F8] p-4">
            <h2 className="text-lg font-semibold mb-5">Price</h2>
            <div className="text-[12px] text-[#3A3A3A] mb-2 flex justify-between">
              <span>Range:</span>
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
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Color</h2>
            <div className="flex gap-4">
              {colors.map((color, idx) => (
                <span
                  key={idx}
                  className={`w-5 h-5 rounded-full cursor-pointer ${color.class} hover:ring-2 hover:ring-blue-500 transition`}
                  title={color.name}
                ></span>
              ))}
            </div>
          </div>
          <div className="bg-[#F6F7F8] p-6 my-5">
            <h2 className="text-lg font-semibold mb-5">Brand</h2>
            {["Nike", "Adidas", "Siemens"].map((brand, idx) => (
              <ul key={idx} className="space-y-4 text-sm">
                <li className="flex justify-between cursor-pointer group my-5">
                  <span className="group-hover:text-[#33A0FF]">{brand}</span>
                  <span className="text-[#969696] group-hover:text-[#33A0FF]">
                    {Math.floor(Math.random() * 100)}
                  </span>
                </li>
              </ul>
            ))}
          </div>
          <div className="bg-[#F6F7F8] hover:text-[#33A0FF]">
            <a href="" className="flex justify-center text-lg p-3">
              More
            </a>
          </div>
        </aside>
        {/* Main Section */}
        <main className="flex-1">
          <div className="bg-sky-400 p-10 text-white flex flex-col md:flex-row justify-between items-center my-5">
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
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-[#F1F3F4] py-3 gap-3">
            <div className="flex gap-6 items-center px-3">
              <span className="text-black text-sm">
                {products.length} Items
              </span>
              <div className="flex items-center gap-2 relative">
                <span className="text-black text-sm">Sort By</span>
                <div className="relative w-32 rounded-lg border border-gray-200 overflow-hidden hover:bg-blue-50">
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="appearance-none w-full px-3 py-2 text-sm bg-[#F1F3F4] focus:ring-2 focus:ring-blue-400 outline-none pr-8"
                  >
                    <option>Name</option>
                    <option>Price</option>
                    <option>Popularity</option>
                  </select>
                  <button className="w-4 h-4 text-black absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <TbCaretDownFilled size={14} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 relative">
                <span className="text-black text-sm">Show</span>
                <div className="relative w-32 rounded-lg border overflow-hidden hover:bg-blue-50">
                  <select
                    value={productsPerPage}
                    onChange={handleProductsPerPageChange}
                    className="appearance-none w-full px-3 py-2 text-sm bg-[#F1F3F4] focus:ring-2 focus:ring-blue-400 outline-none pr-8"
                  >
                    {[8, 16, 24, 32, 40].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <button className="w-4 h-4 text-black absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <TbCaretDownFilled size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-3">
              <button className="p-2 hover:text-blue-500 hover:bg-gray-200 rounded-lg">
                <CgMenuGridR size={30} />
              </button>
              <button className="p-2 hover:text-blue-500 hover:bg-gray-200 rounded-lg">
                <IoMdMenu size={30} />
              </button>
            </div>
          </div>
          <div className="mx-auto md:hidden">
            <Category />
          </div>
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
                <div className="bg-[#F6F7F8] relative h-40 p-4">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.label}
                  </span>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
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
