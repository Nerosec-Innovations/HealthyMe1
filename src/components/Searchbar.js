import React, { useState } from "react";
import { FaPlus, FaMicrophone, FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch, initialValue }) {
  const [query, setQuery] = useState(initialValue || "");

  const handleSearch = () => {
    if (onSearch) onSearch(query.trim());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="d-flex d-none d-md-flex align-items-center bg-white shadow-sm rounded-pill p-2 " style={{ maxWidth: "500px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search your product"
        className="form-control border-0 me-2"
        style={{ flex: 1 }}
      />

      <div className="d-flex align-items-center gap-2">
        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
             style={{ width: "40px", height: "40px", cursor: "pointer" }}>
          <FaPlus />
        </div>

        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
             style={{ width: "40px", height: "40px", cursor: "pointer" }}>
          <FaMicrophone />
        </div>

        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
             style={{ width: "40px", height: "40px", cursor: "pointer" }}
             onClick={handleSearch}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
}