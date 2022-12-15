import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { Container, ContainerCard, Title } from "./styled";

const HomePage = () => {
  const [pokelist, setPokelist] = useState([]);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemon");
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokelist();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Todos Pokémons</h1>
        </Title>
        <ContainerCard>
          {pokelist.map((pokemon) => {
            return <Card key={pokemon.name} pokemonUrl={pokemon.url} pokemon={pokemon} />;
          })}
        </ContainerCard>
      </Container>
    </>
  );
};

export default HomePage;
