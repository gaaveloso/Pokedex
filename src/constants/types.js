import bug from "../img/bug.png";
import dark from "../img/dark.png";
import dragon from "../img/dragon.png";
import electric from "../img/electric.png";
import fairy from "../img/fairy.png";
import fighting from "../img/fighting.png";
import fire from "../img/fire.png";
import flying from "../img/flying.png";
import ghost from "../img/ghost.png";
import grass from "../img/grass.png";
import ground from "../img/ground.png";
import ice from "../img/ice.png";
import normal from "../img/normal.png";
import poison from "../img/poison.png";
import psychic from "../img/psychic.png";
import rock from "../img/rock.png";
import steel from "../img/steel.png";
import water from "../img/water.png";

export const getPokemonType = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};
