import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
export default () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?${apiKey}`);
  });
  return (
    <>
      <h1>Person Page {id}</h1>
    </>
  );
};
