import React from "react";
import Pokeball from "../../assets/images/pokéball.svg";

export const Pokemon = ({ type, name, imageType, color, imagePokemon }) => {
  return (
    <div className="pokemon notranslate">
      <div className="contents" style={{ backgroundColor: color }}>
        <div className="details left details-pokeball">
          <img src={Pokeball} className="pokeball" />
          <img src={imagePokemon} className="img-pokemon" />
          <div className="name">{name}</div>
        </div>
        <div className="details right">

          <div className="type">{type}</div>
          <img src={imageType} />
        </div>
        <img src={Pokeball} className="right-pokeball" />

      </div>
    </div>
  );
};
