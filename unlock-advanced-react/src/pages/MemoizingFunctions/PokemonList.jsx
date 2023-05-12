import React, { useCallback, useEffect, useMemo } from "react";
import ErrorIcon from "../../assets/icons/error.svg";
import Attack from "../../assets/icons/pokemonIcons/attack.svg";
import Health from "../../assets/icons/pokemonIcons/health.svg";
import Shield from "../../assets/icons/pokemonIcons/shield.svg";
import Grass from "../../assets/icons/pokemonIcons/grass.svg";
import Bug from "../../assets/icons/pokemonIcons/bug.svg";
import Dark from "../../assets/icons/pokemonIcons/dark.svg";
import Dragon from "../../assets/icons/pokemonIcons/dragon.svg";
import Electric from "../../assets/icons/pokemonIcons/electric.svg";
import Fairy from "../../assets/icons/pokemonIcons/Fairy.svg";
import Fighting from "../../assets/icons/pokemonIcons/fighting.svg";
import Fire from "../../assets/icons/pokemonIcons/fire.svg";
import Flying from "../../assets/icons/pokemonIcons/flying.svg";
import Ghost from "../../assets/icons/pokemonIcons/ghost.svg";
import Ground from "../../assets/icons/pokemonIcons/ground.svg";
import Ice from "../../assets/icons/pokemonIcons/ice.svg";
import Normal from "../../assets/icons/pokemonIcons/normal.svg";
import Poison from "../../assets/icons/pokemonIcons/poison.svg";
import Psychic from "../../assets/icons/pokemonIcons/psychic.svg";
import Rock from "../../assets/icons/pokemonIcons/rock.svg";
import Steel from "../../assets/icons/pokemonIcons/steel.svg";
import Water from "../../assets/icons/pokemonIcons/water.svg";
import api from "../../services/api";
import {
  capitalizeFirstLetter,
  sortArrayByItemName,
} from "../../utils/functions";
import "./MemoizingFunctions.css";

export const PokemonList = React.memo((props) => {
  const { pokemonQuantity } = props;

  const verifyTypesOfPokemonAndSetColor = (currentType) => {
    let color = "";

    switch (currentType[0]) {
      case "normal":
        color = "#7D7474";

        break;
      case "fire":
        color = "#DF6145";

        break;
      case "water":
        color = "#3D6EC0";

        break;
      case "electric":
        color = "#FFEF64";

        break;
      case "grass":
        color = "#27A927";
        break;
      case "ice":
        color = "#96E6FF";

        break;
      case "fighting":
        color = "#983631";

        break;
      case "poison":
        color = "#932393";

        break;
      case "ground":
        color = "#643A3A";

        break;
      case "flying":
        color = "#98C8EB";

        break;
      case "psychic":
        color =
          "linear-gradient(0deg, rgba(162,147,241,1) 0%, rgba(215,5,162,1) 100%)";
        break;
      case "bug":
        color = "#86AE2F";

        break;
      case "rock":
        color = "#B6917C";

        break;
      case "ghost":
        color =
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(55,5,215,1) 100%)";

        break;
      case "dragon":
        color = "#1B1260";

        break;
      case "dark":
        color = "#000";

        break;
      case "steel":
        color = "#346377";

        break;
      case "fairy":
        color = "#E1A1DB";

        break;

      default:
        break;
    }

    return color;
  };

  function handleSetImageType(type) {
    let imageType = "";

    switch (type) {
      case "normal":
        imageType = Normal;

        break;
      case "fire":
        imageType = Fire;

        break;
      case "water":
        imageType = Water;

        break;
      case "electric":
        imageType = Electric;

        break;
      case "grass":
        imageType = Grass;
        break;
      case "ice":
        imageType = Ice;

        break;
      case "fighting":
        imageType = Fighting;

        break;
      case "poison":
        imageType = Poison;

        break;
      case "ground":
        imageType = Ground;

        break;
      case "flying":
        imageType = Flying;

        break;
      case "psychic":
        imageType = Psychic;

        break;
      case "bug":
        imageType = Bug;

        break;
      case "rock":
        imageType = Rock;

        break;
      case "ghost":
        imageType = Ghost;

        break;
      case "dragon":
        imageType = Dragon;

        break;
      case "dark":
        imageType = Dark;

        break;
      case "steel":
        imageType = Steel;

        break;
      case "fairy":
        imageType = Fairy;

        break;

      default:
        break;
    }
    return imageType;
  }

  const verifyStatsOfPokemonAndSetValues = (currentState) => {
    let statsList = [];
    let stats = {
      name: "",
      value: undefined,
    };

    currentState.forEach((item) => {
      stats = {
        name: item.stat.name === "hp" ? "Health" : item.stat.name,
        value: item.base_stat,
        image:
          item.stat.name === "hp"
            ? Health
            : item.stat.name === "attack"
            ? Attack
            : item.stat.name === "defense"
            ? Shield
            : ErrorIcon,
      };

      statsList.push(stats);
    });

    let slicedStatsList = statsList.slice(0, 3);
    let sortedStatsList = sortArrayByItemName(slicedStatsList);

    return sortedStatsList;
  };

  const getPokemonInfo = useCallback(async (pokemonList) => {
    console.log("Getting pokémon info...");

    const list = await Promise.all(
      pokemonList.map(async (element) => {
        try {
          const response = await api.get(`pokemon/${element.name}`);

          return {
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.other.home.front_default,
            color: verifyTypesOfPokemonAndSetColor(
              response.data.types.map((item) => item.type.name)
            ),
            types: response.data.types.map((item) => item.type.name),
            imageType: handleSetImageType(
              response.data.types.map((item) => item.type.name)
            ),
            stats: verifyStatsOfPokemonAndSetValues(response.data.stats),
          };
        } catch (error) {
          console.log(error);
        }
      })
    );

    if (list.length > 0) {
      props.setPokemonListValue(list);
    }
  }, []);

  useEffect(() => {
    const maxPokemonQuantity = 900;
    const currentPokemonQuantity =
      pokemonQuantity >= maxPokemonQuantity
        ? maxPokemonQuantity
        : pokemonQuantity;

    const getListPokemon = async () => {
      try {
        const response = await api.get(`pokemon?limit=${currentPokemonQuantity}`);
        await getPokemonInfo(response.data.results);
      } catch (error) {
        console.log(error)
      }
     
    };

    getListPokemon();

    return () => {};
  }, [pokemonQuantity]);

  const pokemonList = useMemo(() => {
    return props.pokemonListValue.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div
            key={index}
            className="pokemon-list-item"
            style={{ background: item.color }}
          >
            <h2 className="pokemon-name">{capitalizeFirstLetter(item.name)}</h2>
            <div className="pokemon-id-center">
              <h5 className="pokemon-id">#{item.id}</h5>
            </div>
            <div
              className="pokemon-list-item-background"
              style={{
                background: item.color.includes("%")
                  ? item.color
                  : `linear-gradient(${item.color} 25%, #fff 100%)`,
              }}
            >
              <br />
              <br />
              <div className="pokemon-box">
                <img
                  src={item.image}
                  className="img-pokemon-m-f"
                  style={{ background: "transparent" }}
                />
              </div>
              <br />
              <br />
              <div className="pokemon-type-container">
                <div className="pokemon-type-container-row">
                  {item.types.map((type, typeId) => {
                    return (
                      <React.Fragment key={typeId}>
                        <h5
                          className="pokemon-type"
                          style={{ background: item.color }}
                        >
                          <img src={handleSetImageType(type)}></img>

                          {capitalizeFirstLetter(type)}
                        </h5>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="stats-bar-container">
                <div className="stats-bar">
                  {item.stats.map((stats, statsId) => {
                    return (
                      <React.Fragment key={statsId}>
                        <section className="stats">
                          <img src={stats.image}></img>
                          <h5 className="stats-name">
                            {capitalizeFirstLetter(stats.name)}
                          </h5>
                          <h5 className="stats-value">{stats.value}</h5>
                        </section>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <br />
        </React.Fragment>
      );
    });
  }, [props.pokemonListValue]);

  return <div className="pokemon-list">{pokemonList}</div>;
});
