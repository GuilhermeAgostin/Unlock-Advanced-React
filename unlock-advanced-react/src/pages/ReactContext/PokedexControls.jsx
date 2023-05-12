import React, { useContext } from "react";
import { PokedexContext } from "./PokedexContext";

export const PokedexControls = () => {
  const { setType, sortOrder, setSortOrder } = useContext(PokedexContext);

  return (
    <div className="controls">
      <select
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="electric">Electric</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="psychic">Psychic</option>
      </select>
      <button
        style={{
          color: "#ffffff",
          minWidth: "150px",
          backgroundColor: "#000000",
          fontSize: "14px",
        }}
        onClick={() => {
          if (sortOrder === "ascending") {
            setSortOrder("descending");
          } else {
            setSortOrder("ascending");
          }
        }}
      >
        {sortOrder === "descending" ? "Descending" : "Ascending"}
      </button>
    </div>
  );
};
