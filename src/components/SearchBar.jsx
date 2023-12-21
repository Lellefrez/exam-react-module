import { useState } from "react";

export default ({ onSearch }) => {
  const [value, setvalue] = useState("");

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cerca Attore..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          onKeyUp={(e) => {
            e.key === "Enter" && onSearch(value);
          }}
        />
        <button
          onClick={() => {
            value.trim().length > 0 && onSearch(value);
            setvalue("");
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};
