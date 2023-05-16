import React, { useState } from "react";

export const PokedexContext = React.createContext();

export const PokedexProvider = ({ children, pokemon }) => {
  const [type, setType] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <PokedexContext.Provider
      value={{ pokemon, type, setType, sortOrder, setSortOrder }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
