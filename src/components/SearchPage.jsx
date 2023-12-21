import SearchBar from "./SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;
import { useState } from "react";
import PersonCard from "./PersonCard";
import { Link } from "react-router-dom";

export default () => {
  const [error, setError] = useState();
  const [actors, setActors] = useState([]);

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
      <SearchBar onSearch={search} />
      <Link>
        <div className="card-container">
          {actors.map((a) => (
            <PersonCard key={a.id} data={a} />
          ))}
        </div>
      </Link>
    </>
  );
};
