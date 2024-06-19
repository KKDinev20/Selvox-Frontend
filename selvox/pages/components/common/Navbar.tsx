"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav>
        <div className="bg-navbar bg-opacity-10 max-w-6xl shadow-xl rounded-3xl  mx-auto my-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.png" alt="logo" className="h-15 w-20" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="gap-x-8 ml-4 flex items-center space-x-4 font-medium">
                <Link href="/index" className=" hover:text-black">
                  {" "}
                  About
                </Link>
                <a href="/" className="ml-24  hover:text-black">
                  {" "}
                  Services
                </a>
                <a href="/" className=" hover:text-black">
                  {" "}
                  Reviews
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <Button />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md
hover: text-white focus: outline-none focus: ring-2 focus: ring-inset focus: ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block hover:text-black">
                {" "}
                About
              </a>
              <a href="/" className="block hover:text-black">
                {" "}
                Services
              </a>
              <a href="/" className="block hover:text-black">
                {" "}
                Reviews
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
