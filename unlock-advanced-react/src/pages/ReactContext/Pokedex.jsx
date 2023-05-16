import React from "react";
import { PokedexProvider } from "./PokedexContext";
import { PokedexControls } from "./PokedexControls";
import { PokemonList } from "./PokemonList";
import Electric from "../../assets/images/Electric.png";
import Fire from "../../assets/images/Fire.png";
import Psychic from "../../assets/images/Psychic.png";
import Water from "../../assets/images/Water.png";
import Abra from "../../assets/images/abra.png";
import Charmander from "../../assets/images/charmander.png";
import Pikachu from "../../assets/images/pikachu.png";
import Squirtle from "../../assets/images/squirtle.png";

export const Pokedex = () => {
  return (
    <>
      <PokedexProvider pokemon={pokemon}>
        <div className="pokedex-container">
          <section className="pokemon-title-container">
            <div className="body-first-light">
              <div className="first-light"></div>
            </div>

            <h1 className="pokedex-heading">Pokédex</h1>
            <div className="signal-lights">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <PokedexControls />
          <div className="pokedex">
            <section className="pokemons-list">
              <PokemonList />
            </section>
          </div>
        </div>
      </PokedexProvider>
    </>
  );
};

const pokemon = [
  {
    name: "Pikachu",
    imagePokemon: Pikachu,
    type: "electric",
    imageType: Electric,
    color: "#FFCF49",
  },
  {
    name: "Charmander",
    imagePokemon: Charmander,
    type: "fire",
    imageType: Fire,
    color: "#EB796E",
  },
  {
    name: "Squirtle",
    imagePokemon: Squirtle,
    type: "water",
    imageType: Water,
    color: "#71C3FF",
  },
  {
    name: "Abra",
    imagePokemon: Abra,
    type: "psychic",
    imageType: Psychic,
    color: "#7C528C",
  },
];
