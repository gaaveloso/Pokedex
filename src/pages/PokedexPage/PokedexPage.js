import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "./styled";

const PokedexPage = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Meus Pokémons</h1>
      </Container>
    </>
  );
};

export default PokedexPage;
