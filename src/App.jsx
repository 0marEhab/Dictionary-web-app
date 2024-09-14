import DictionaryEntry from "./components/DictionaryEntry";
import SearchBar from "./components/SearchBar";
import { useState, useContext, useEffect } from "react";
import fetchWordData from "./util/fetchWordData";
import Header from "./components/Header";
import { ThemeContext } from "./store/ThemeContext";

export default function App() {
  const [wordData, setWordData] = useState(null);
  const { fontStyle } = useContext(ThemeContext);


  const handleSearch = async (word) => {
    const data = await fetchWordData(word);
    setWordData(data);
  };

  return (
    <div className={`flex justify-center h-screen ${fontStyle} p-10`}>
      <div className="w-[700px]">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <DictionaryEntry wordData={wordData} />
      </div>
    </div>
  );
}
