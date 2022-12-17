import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardDetails, Container } from "./styled";

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState({});

  // const context = useContext(GlobalContext);
  const params = useParams();

  const fetchPokeDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${params.pokemonName}`);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar detalhes de pokemon");
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokeDetails();
  }, []);

  console.log(pokemon.stats);
  return (
    <>
      <Header />
      <Container>
        <CardDetails>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites?.other.dream_world.front_default} />
          <img src={pokemon.sprites?.front_default} />
          <img src={pokemon.sprites?.back_default} />
          <div>
            <h1>Base stats</h1>
            {pokemon.stats.map((stats) => {
              return <h1>{stats.stat.name}</h1>;
            })}
            {pokemon.stats.map((stats) => {
              return <h1>{stats.base_stat}</h1>
            })}
          </div>
        </CardDetails>
      </Container>
    </>
  );
};

export default DetailsPage;
