import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./styled";

const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const {pokedex} = context

  return (
    <>
      <Header />
      <Container>
        <Title>
        <h1>Meus Pokémons</h1>
        </Title>
        <ContainerCard>
        {pokedex?.map((pokemon) => {
          return (
            <Card key={pokemon.name} pokemon={pokemon}/>
          )
        })}
        </ContainerCard>
      </Container>
      <Footer/>
    </>
  );
};

export default PokedexPage;
