import { useEffect } from "react";
import { useState } from "react";
import PersonCard from "./PersonCard";
import SearchBar from "./SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;

export default ({}) => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState();
  console.log(actors);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setActors(obj.results))
      .catch((error) => {
        setError(`Nessun risultato trovato, Ricarica!`);
        console.log(error);
      });
  }, []);
  const search = (searchvalue) => {
    const searchParams = new URLSearchParams({
      api_key: apiKey,
      query: searchvalue,
    });
    fetch(
      `https://api.themoviedb.org/3/search/person?${searchParams.toString()}`
    )
      .then((response) => response.json())
      .then((obj) => setActors(obj.results))
      .catch((error) => console.log(error));
  };
  return (
    <>
      {error && <div className="error-msg">{error}</div>}
      <SearchBar onSearch={search} />
      <div className="actors">
        {actors.map((a) => (
          <PersonCard key={a.id} data={a} />
        ))}
      </div>
    </>
  );
};
