import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export default function FontComponent() {
  const { fontStyle, changeFontStyle } = useContext(ThemeContext);

  const handleFontChange = (e) => {
    changeFontStyle(e.target.value);
  };

  return (
    <>
      <select
        value={fontStyle}
        onChange={handleFontChange}
        className="bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-md p-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
      >
        <option value="font-serif" className="font-serif">
          Serif
        </option>
        <option value="font-default" className="font-default">
          Arial
        </option>
        <option value="font-sans-serif" className="font-sans">
          Sans-Serif
        </option>
        <option value="Inconsolata-Bold" className="font-inconsolata">
          Inconsolata-Bold
        </option>
        <option value="Inconsolata-Regular" className="font-inconsolata">
          Inconsolata-Regular
        </option>
        <option value="Inter-Regular" className="font-inter">
          Inter-Regular
        </option>
        <option value="Inter-Bold" className="font-inter">
          Inter-Bold
        </option>
      </select>
    </>
  );
}
