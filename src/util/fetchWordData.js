const fetchWordData = async (word) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchWordData;
