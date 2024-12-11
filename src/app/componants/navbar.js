"use client";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
("@web3-react/walletconnect");
const ethers = require("ethers");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white lightbg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200  drop-shadow-xl lightborder-gray-600 font-custom">
      <div className="max-w-screen-xl flex flex-wrap items-center tracking-widest justify-between mx-auto p-4"
        style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
      >
        <Link href="/" legacyBehavior>
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png"
              className="h-16"
              alt="Logo"
            />
          </a>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lighttext-gray-400 lighthover:bg-gray-700 lightfocus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white lightbg-gray-800 md:lightbg-gray-900 lightborder-gray-700">
            <li>
              <Link href="/" legacyBehavior>
                <span>
                    <a
                      className="block z-30 py-2 px-3 text-black mt-6 rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                    <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                      className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                    />
                  </span>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <ScrollLink
                  to="sectionTwo" // This should match the ID of the element you want to scroll to
                  smooth={true}
                  duration={600}
                  offset={-100} // Adjust this offset based on your layout
                  className=""
                >
                  <p className="block py-2 px-3 mt-6 cursor-pointer text-black rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                    About
                  </p>
                  <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                      className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                    />
                </ScrollLink>
              </Link>
            </li>
            <li>
            <Link href="/" legacyBehavior>
              <ScrollLink
                to="sectionThree" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 mt-6 cursor-pointer text-black rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  How to Buy
                </p>
                <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                      className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                    />
              </ScrollLink>
            </Link>
            </li>
            <li>
            <Link href="/" legacyBehavior>
              <ScrollLink
                to="Tokenomics" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 mt-6 cursor-pointer text-black rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  Tokenomics
                </p>
                <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                      className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                    />
              </ScrollLink>
            </Link>
            </li>
            <li>
            <Link href="/" legacyBehavior>
              <ScrollLink
                to="roadmap" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 mt-6 cursor-pointer text-black rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  Road Map
                </p>
                <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                      className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                    />
              </ScrollLink>
            </Link>
            </li>
            <li>
              <Link  href="/trade" legacyBehavior>
                <span>
                  <p className="block py-2 px-3 mt-6 cursor-pointer text-black rounded font-bold hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                    Buy
                  </p>
                  <img src="https://i.pinimg.com/originals/d2/96/e0/d296e0070a564004aeecd58e3542e3e6.png" 
                        className="h-16 -mt-10 ml-2 -z-10 opacity-0 hover:opacity-70 "
                        />
                </span>
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
