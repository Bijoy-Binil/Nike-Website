import React from "react";
import headerLogo from "../images/header-logo.svg";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="w-full h-5 mt-0.5 px-5   flex items-center justify-between">
          <p className="text-sm font-bold">Nike</p>

          <div className="font-bold flex ">
            <p className="ml-4 text-sm">Find a store | </p>
            <p className="ml-4 text-sm">Help | </p>
            <p className="ml-4 text-sm">Join Us | </p>
            <p className="ml-4 text-sm">Sign In | </p>
          </div>
        </div>

        <div className=" w-full font-semibold h-16 mt-7 flex items-center px-6">
          <img className="w-23" src={headerLogo} alt="Nike Logo" />

          <div className="flex flex-1 justify-center">
            <p className="ml-7 cursor-pointer">New </p>
            <p className="ml-7 cursor-pointer">Men</p>
            <p className="ml-7 cursor-pointer">Women</p>
            <p className="ml-7 cursor-pointer">Kids</p>
            <p className="ml-7 cursor-pointer">Jordan</p>
            <p className="ml-7 cursor-pointer">Sport</p>
          </div>

          <input className="ml-auto px-3 py-1 rounded-full border-1 text-sm  focus:outline-none"  type="text" placeholder="Search" />
        </div>
      </div>
      <div className="container mt-30">
        <h1 className="flex justify-center  text-8xl font-bold">Department of Nike Archives</h1>
        <p className="flex justify-center  text-xl font-semibold mt-2">A place to find inspiration from the past to imagine the future</p>
      </div>
    </>
  );
};

export default Header;
