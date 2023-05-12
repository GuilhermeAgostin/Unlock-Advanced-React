import React, { useContext } from "react";
import { Pokemon } from "./Pokemon";
import { PokedexContext } from "./PokedexContext";

export const PokemonList = () => {
  const { type, sortOrder, pokemon } = useContext(PokedexContext);
  const filterPokemon = pokemon.filter(
    (pokemon) => type === "all" || pokemon.type === type
  );
  const sortPokemon = filterPokemon.sort((a, b) =>
    sortOrder === "ascending"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
  return (
    <>
      {sortPokemon.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.name} />
      ))}
    </>
  );
};
