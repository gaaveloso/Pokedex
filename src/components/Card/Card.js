import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getPokemonColors } from "../../constants/color";
import { getPokemonType } from "../../constants/types";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator";
import {
  ButtonPokedex,
  ButtonPokemon,
  CardType,
  Container,
  ImgPokemon,
  Link,
  Pokemon,
  Type,
} from "./styled";

  const Card = (props) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();

  const context = useContext(GlobalContext);

  const {
    setIsOpen,
    setFlow,
    addToPokedex,
    removeToPokedex,
  } = context;

  const fetchPokeDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${props.pokemon.name}`);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar detalhes de pokemon");
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokeDetails();
  }, []);

  return (
    <Container
      color={getPokemonColors(pokemon.types && pokemon.types[0].type.name)}
    >
      <Pokemon>
        <div>
          <p>#{pokemon.id}</p>
          <h1>{pokemon.name}</h1>
          <Type>
            {pokemon.types?.map((type, index) => {
              return (
                <CardType src={getPokemonType(type.type.name)} key={index} />
              );
            })}
          </Type>
        </div>
        <ImgPokemon
          src={pokemon.sprites?.other["official-artwork"]["front_default"]}
          alt={pokemon.name}
        />
      </Pokemon>
      <Link>
        <a onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          <p>Detalhes</p>
        </a>
        {location.pathname === "/pokedex" ? (
          <ButtonPokedex
            onClick={() => {
              setFlow(2);
              setIsOpen(true);
              removeToPokedex(pokemon);
            }}
          >
            Excluir
          </ButtonPokedex>
        ) : (
          <ButtonPokemon
            onClick={() => {
              setFlow(1);
              setIsOpen(true);
              addToPokedex(pokemon);
            }}
          >
            Capturar!
          </ButtonPokemon>
        )}
      </Link>
    </Container>
  );
};

export default Card;