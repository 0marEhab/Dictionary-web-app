import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [fontStyle, setFontStyle] = useState("font-default"); 

  const changeFontStyle = (font) => {
    setFontStyle(font);
  };

  return (
    <ThemeContext.Provider
      value={{ fontStyle, changeFontStyle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
