import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPokemonType } from "../../constants/types";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator";
import { CardType, Container, ImgPokemon, Link, Pokemon, Type } from "./styled";

const Card = (props) => {
  const { pokemonUrl } = props;
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  const context = useContext(GlobalContext);
  const { pokedex, setPokedex } = context;

  const fetchPokeDetails = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar detalhes de pokemon");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonAdd) => {
    const filterPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonAdd.name
    );
    if (!filterPokedex) {
      const newPokedex = [...pokedex, pokemonAdd.name];
      setPokedex(newPokedex);
    }
  };

  console.log(pokedex);

  useEffect(() => {
    fetchPokeDetails();
  }, []);

  return (
    <Container>
      <Pokemon>
        <div>
          <p>#{pokemon.id}</p>
          <h1>{pokemon.name}</h1>
          <Type>
            {pokemon.types?.map((type, index) => {
              return <CardType src={getPokemonType(type.type.name)}/>;
            })}
          </Type>
        </div>
        <ImgPokemon
          src={pokemon.sprites?.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </Pokemon>
      <Link>
        <a onClick={() => goToDetailsPage(navigate)}>
          <p>Detalhes</p>
        </a>
        <button onClick={() => addToPokedex(pokemon)}>Capturar!</button>
      </Link>
    </Container>
  );
};

export default Card;
