import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { getPokemonType } from "../../constants/types";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  BaseStats,
  CardDetails,
  Container,
  ContainerLeft,
  ContainerRight,
  DivInfos,
  DivMoves,
  DivStats,
  DivType,
  DivTypes,
  ImageLeft,
  ImgPokemon
} from "./styled";

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

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhes</h1>
        <CardDetails>
          <ContainerLeft>
            <ImageLeft>
              <div>
                <img src={pokemon.sprites?.front_default} />
              </div>
              <div>
                <img src={pokemon.sprites?.back_default} />
              </div>
            </ImageLeft>
            <BaseStats>
              <h2>Base stats</h2>
              <DivStats>
                <div>
                  {pokemon.stats?.map((stats, index) => {
                    return <h3 key={index}>{stats.stat.name}</h3>;
                  })}
                </div>
                <div>
                  {pokemon.stats?.map((stats, index) => {
                    return <h3 key={index}>{stats.base_stat}</h3>;
                  })}
                </div>
              </DivStats>
            </BaseStats>
          </ContainerLeft>
          <ContainerRight>
            <DivInfos>
              <DivType>
                <h6>#{pokemon.id}</h6>
                <h2>{pokemon.name}</h2>
                <DivTypes>
                  {pokemon.types?.map((type, index) => {
                    return (
                      <img src={getPokemonType(type.type.name)} key={index} />
                    );
                  })}
                </DivTypes>
              </DivType>
              <DivMoves>
                <h2>Moves: </h2>
                {pokemon.moves?.slice(0,4).map((move) => {
                    return (
                  <h3>{move.move.name}</h3>
                    )
                  })}
              </DivMoves>
            </DivInfos>
              <ImgPokemon src={pokemon.sprites?.other.dream_world.front_default} />
          </ContainerRight>
        </CardDetails>
      </Container>
    </>
  );
};

export default DetailsPage;
