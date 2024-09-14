import React from "react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="flex items-center justify-center w-full px-10 md:p-0">
      <div className="relative w-full ">
        <input
          type="text"
          className="border bg-gray-300 p-2  pl-10 rounded-lg w-full dark:bg-slate-950"
          placeholder="Search for a word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-800" />
        </button>
      </div>
    </div>
  );
}
