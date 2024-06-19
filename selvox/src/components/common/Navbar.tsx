import React from "react";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="bg-navbar bg-opacity-20 max-w-5xl shadow-xl rounded-3xl  mx-auto my-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.png" alt="logo" className="h-15 w-20" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="gap-x-8 ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className=" hover:text-black"
                >
                  {" "}
                  About
                </a>
                <a
                  href="/"
                  className="ml-24  hover:text-black"
                >
                  {" "}
                  Services
                </a>
                <a
                  href="/"
                  className=" hover:text-black"
                >
                  {" "}
                  Reviews
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Button/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
