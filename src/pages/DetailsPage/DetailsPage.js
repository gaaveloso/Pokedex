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
  ImgPokemon,
} from "./styled";
import { Flex, Heading, Progress, Stack, Text } from "@chakra-ui/react";

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState({});

  // const context = useContext(GlobalContext);
  const params = useParams();

  const { pokedex } = useContext(GlobalContext);

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

  // console.log(pokedex)
  // {pokedex.find((pokemon) => pokemon.name === params.pokemonName)?'existe':'não existe'}

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
            <Heading>Base stats</Heading>
            <Flex
              flexDirection={"column"}
              borderTop={"1px grey solid"}
              marginTop={"16px"}
            >
              {pokemon.stats &&
                pokemon.stats.map((stat) => {
                  return (
                    <>
                      <Flex
                        key={stat.stat.name}
                        borderBottom={"1px grey solid"}
                        h={"40px"}
                        alignItems={"center"}
                      >
                        <Flex w="100px">
                          <Text
                            w="60px"
                            textAlign={"end"}
                            fontSize={"14px"}
                          >
                            {stat.stat.name
                              .replace("special-attack", "Sp. Atk")
                              .replace("special-defense", "Sp. Def")}
                          </Text>
                          <Text fontSize={"14px"} margin={"auto"}>
                            {stat.base_stat}
                          </Text>
                        </Flex>
                        <Progress
                          w={"200px"}
                          borderRadius={"4px"}
                          bgColor={"#ffffff"}
                          colorScheme={
                            stat.base_stat < 50
                              ? "orange"
                              : stat.base_stat < 80
                              ? "yellow"
                              : "green"
                          }
                          value={stat.base_stat}
                        />
                      </Flex>
                    </>
                  );
                })}
              {pokemon.stats && (
                <Flex
                  borderBottom={"1px grey solid"}
                  h={"40px"}
                  alignItems={"center"}
                >
                  <Text
                    w={"60px"}
                    textTransform={"capitalize"}
                    textAlign={"end"}
                    fontSize={"14px"}
                  >
                    Total
                  </Text>
                  <Text margin={"8px"} fontSize={"14px"} fontWeight={"bold"}>
                    {pokemon.stats.reduce(
                      (acc, stat) => acc + stat.base_stat,
                      0
                    )}
                  </Text>
                </Flex>
              )}
            </Flex>
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
                {pokemon.moves?.slice(0, 4).map((move) => {
                  return <h3>{move.move.name}</h3>;
                })}
              </DivMoves>
            </DivInfos>
            <ImgPokemon
              src={pokemon.sprites?.other.dream_world.front_default}
            />
          </ContainerRight>
        </CardDetails>
      </Container>
    </>
  );
};

export default DetailsPage;
