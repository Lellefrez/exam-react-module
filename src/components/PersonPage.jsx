import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
import { Navigate } from "react-router-dom";
import { useState } from "react";
export default () => {
  const [page, setPage] = useState({});
  console.log(page);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setPage(obj));
  }, []);

  return (
    <>
      {id === undefined && <Navigate to="/" />}
      <div className="person-container">
        <h1>{page.name}</h1>
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original/${page.profile_path}`}
            alt="profile-picture"
          />
        </figure>
        <section>
          <p>
            <b>Sex:</b> {page.gender === 2 ? "Male" : "Female"}
          </p>
          <p>
            <b>Birthday:</b> {page.birthday}
          </p>
          <p>
            <b>Popularity:</b> {page.popularity}
          </p>
          <p>
            <b>Biography:</b> <br></br>
            {page.biography}
          </p>
        </section>
      </div>
    </>
  );
};
