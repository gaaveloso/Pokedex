import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { getPokemonType } from "../../constants/types";
import { BASE_URL } from "../../constants/url";
import {
  BaseStats,
  CardDetails,
  Container,
  ContainerLeft,
  ContainerRight,
  DivInfos,
  DivMoves,
  DivType,
  DivTypes,
  ImageLeft,
  ImgPokemon,
} from "./styled";
import { Flex, Heading, Progress, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import { getPokemonColors } from "../../constants/color";

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState({});

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
      <Header pokemon={pokemon} />
      <Container>
        <h1>Detalhes</h1>
        <CardDetails color={getPokemonColors(pokemon.types && pokemon.types[0].type.name)}>
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
                {pokemon.stats?.map((stat) => {
                  return (
                    <div key={stat.stat.name}>
                      <Flex
                        borderBottom={"1px grey solid"}
                        h={"40px"}
                        alignItems={"center"}
                      >
                        <Flex w="100px">
                          <Text w="60px" textAlign={"end"} fontSize={"14px"}>
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
                    </div>
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
                {pokemon.moves?.slice(0, 4).map((move, index) => {
                  return <h3 key={index}>{move.move.name}</h3>;
                })}
              </DivMoves>
            </DivInfos>
            <ImgPokemon
              src={pokemon.sprites?.other.dream_world.front_default}
            />
          </ContainerRight>
        </CardDetails>
      </Container>
      <Footer />
    </>
  );
};

export default DetailsPage;
