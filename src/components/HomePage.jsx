import { useEffect } from "react";
import { useState } from "react";
import PersonCard from "./PersonCard";

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

  return (
    <>
      {error ? (
        <div className="error-msg">{error}</div>
      ) : (
        <>
          <h1>ATTORI DEL MOMENTO</h1>
          <div className="card-container">
            {actors.map((a) => (
              <PersonCard key={a.id} data={a} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
