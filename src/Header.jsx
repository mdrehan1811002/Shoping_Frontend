import React, { useState } from "react";
import { CgShapeRhombus } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 w-screen bg-white z-50">
      <div className="flex justify-between items-center my-1 px-4  h-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CgShapeRhombus className="text-4xl bg-[#33A0FF] text-white p-1 rounded-[14px]" />
          <h1 className="text-2xl lg:text-3xl font-bold">E-Comm</h1>
        </div>

        {/* Navbar */}
        <nav
          className={`absolute top-15 left-0 w-64 bg-white h-screen p-4 flex flex-col gap-4 shadow-md transform transition-transform duration-300 md:relative md:top-0 md:h-12 md:flex md:flex-row md:w-auto md:shadow-none ${
            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 lg:gap-12 text-xl font-medium">
            <li>
              <a href="#" className="hover:text-[#33A0FF]">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#33A0FF]">
                BAG
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#33A0FF]">
                SNEAKER
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#33A0FF]">
                BELT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#33A0FF]">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-6 text-xl px-6">
          <a href="#" className="hover:text-[#33A0FF] font-normal">
            <IoCartOutline className="text-xl" />
          </a>
          <a
            href="#"
            className="hover:text-[#33A0FF] hidden lg:block font-normal"
          >
            Items <span className="text-[#c0c0c0]">$0.00</span>
          </a>
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <h1 className="text-2xl font-bold">X</h1>
            ) : (
              <TiThMenu />
            )}
          </button>
        </div>
      </div>

      {/* Overlay
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black-100 bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}
    </header>
  );
};

export default Header;
