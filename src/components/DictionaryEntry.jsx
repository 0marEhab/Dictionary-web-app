import React, { useRef } from "react";

export default function DictionaryEntry({ wordData }) {
  if (!wordData) return null;
  const { word, phonetics, meanings } = wordData[0];

  // Create a reference for the audio element
  const audioRef = useRef(null);

  // Function to play the audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="p-10 md:p-0 my-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-6xl font-bold">{word}</h1>
          <p className="text-purple-500 text-xl mt-2">{phonetics[0]?.text}</p>
        </div>
        <div>
          <img
            src="/icon-play.svg"
            alt="Play audio"
            className="cursor-pointer"
            onClick={playAudio}
          />
          <audio ref={audioRef}>
            <source src={phonetics[2]?.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div className="mt-6">
        {meanings.map((meaning, index) => (
          <div key={index} className="mt-4">
            <div className="relative">
              <p className="font-semibold text-lg mb-6">
                {meaning.partOfSpeech}
              </p>
              <hr className="absolute top-[16px] left-14 border-t-2 border-gray-300 w-full" />
            </div>
            <h2 className="text-xl font-semibold opacity-70">Meaning</h2>
            <ul className="list-disc list-inside ml-4 mt-2">
              {meaning.definitions.map((def, idx) => (
                <li key={idx} className="m-4">
                  {def.definition}
                </li>
              ))}
            </ul>

            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <div className="mt-4 flex gap-8 items-center">
                <h3 className="text-xl  opacity-70">Synonyms</h3>
                <p className=" text-xl">{meaning.synonyms.join(", ")}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-5 items-center">
        <h3 className="text-sm text-gray-500">Source</h3>
        <a
          href={wordData[0].sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
          className=" underline flex gap-5 text-gray-500"
        >
          {wordData[0].sourceUrls[0]}
          <img src="/icon-new-window.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
