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
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
        </figure>
        <p>Name: {name}</p>
        <p>id: {id}</p>
        <p>Sex: {gender === 2 ? "Male" : "Female"}</p>
        <p>popularity: {popularity}</p>
        <p>occupation: {known_for_department}</p>
        <div>
          works: <ul>{known_for.map((work) => work.title)}</ul>
        </div>
      </div>
    </>
  );
};
