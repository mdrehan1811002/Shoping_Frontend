import React from "react";
import { CgShapeRhombus } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE] text-gray-800 text-sm p-10 mt-6">
      <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10 mx-auto px-4">
        {/* E-Comm section */}
        <div>
          <div className="flex items-center gap-2 my-4">
            <CgShapeRhombus className="text-4xl bg-[#33A0FF] text-white p-1 rounded-full" />
            <h1 className="text-[18px] font-bold">E-Comm</h1>
          </div>
          <p className="text-[12px] text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h1 className="text-[18px] font-bold my-4">Follow Us</h1>
          <p className="text-[12px] text-gray-600">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex gap-6 items-center mt-5">
            <a href="">
              <FaFacebookF size={18} className="text-[#385C8E]" />
            </a>
            <a href="">
              <FaTwitter size={18} className="text-[#03A9F4]" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h1 className="text-[18px] font-bold my-4">Contact Us</h1>
          <p className="text-[12px] text-gray-600">
            E-Comm , 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>

        {/* Bottom links (responsive grid) */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          <div>
            <h4 className="text-[16px] font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Information
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-medium mb-4">Service</h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Information
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-medium mb-4">My Account</h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Information
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-medium mb-4">Our Offers</h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Information
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#33A0FF]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-4 border-t-2 border-[#F6F7F8] pt-3 text-xs text-gray-400 text-center flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 col-span-1">
        {/* Left side copyright */}
        <p className="text-[12px] sm:text-xs">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>

        {/* Payment methods */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {/* Western Union */}
          <p className="bg-[#353A40] text-[#ECD345] py-1 px-4 rounded-md text-sm sm:text-xs">
            Western <span className="text-[#ECD345]"> ||</span>
            <br />
            union
          </p>

          {/* MasterCard */}
          <div className="bg-[#5870BE] py-1 px-2 flex justify-center items-center rounded-md relative">
            <div className="bg-[#E63737] w-8 h-8 absolute left-5 rounded-full"></div>
            <div className="bg-[#FFAF38] w-8 h-8 absolute right-5 rounded-full"></div>
            <p className="relative text-white font-bold text-[10px] sm:text-sm rotate-6">
              MasterCard
            </p>
          </div>

          {/* PayPal */}
          <div className="flex items-center py-1 px-3 bg-white rounded-md">
            <h2 className="text-sm sm:text-lg font-bold text-[#3284AE]">
              Pay<span className="text-[#3CA9C7]">Pal</span>
            </h2>
          </div>

          {/* VISA */}
          <div className="h-10 flex items-center bg-white rounded-md px-3">
            <p className="text-sm sm:text-lg font-bold text-[#494CA3]">VISA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
