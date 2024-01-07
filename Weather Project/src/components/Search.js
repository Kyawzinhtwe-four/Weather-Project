import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ fetchData }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-75 gap-3 d-flex justify-content-center align-items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter City Name"
        className="form-control w-100"
      />
      <BsSearch
        onClick={() => fetchData(search)}
        className="fs-4 fw-bold cursor-pointer"
      />
    </div>
  );
};

export default Search;
