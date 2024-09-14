import React from "react";
import FontComponent from "./FontComponent";

export default function Header() {
  function handleToggle() {
    document.body.classList.toggle("dark");
  }

  return (
    <div className="flex justify-between my-10 px-10 md:p-0 items-center">
      <div>
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <FontComponent />
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center  cursor-pointer">
            <input type="checkbox" className="hidden" onChange={handleToggle} />
            <div className="w-10 flex  items-center h-5 bg-gray-300 rounded-full p-1">
              <div className="toggle-dot bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
            </div>
          </label>
          <img
            src="/icon-moon.svg"
            alt="toggle dark mode"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
