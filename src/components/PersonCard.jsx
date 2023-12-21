import { Link } from "react-router-dom";
export default ({ data }) => {
  const {
    id,
    name,
    known_for_department,
    popularity,
    gender,
    profile_path,
    known_for,
  } = data;
  return (
    <>
      <div className="actors-cards">
        <Link to={`person/${id}`}>
          <figure>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
          </figure>
        </Link>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Sex:</b> {gender === 2 ? "Male" : "Female"}
        </p>
        <p>
          <b>popularity:</b> {popularity}
        </p>
        <p>
          <b>occupation:</b> {known_for_department}
        </p>
        <p>
          <b>works:</b> {known_for.map((work) => `${work.title}, `)}
        </p>
      </div>
    </>
  );
};
