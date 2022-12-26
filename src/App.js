import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalStyle from "./GlobalStyle";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import { ChakraProvider, useDisclosure, ModalOverlay } from "@chakra-ui/react";

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const [pokelist, setPokelist] = useState([]);

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOpen, setIsOpen] = useState(false)

  const [flow, setFlow] = useState(1)

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

  const context = {
    fetchPokelist,
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    pokemon,
    setPokemon,
    isOpen,
    setIsOpen,
    flow,
    setFlow
  };

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <Router />
        <GlobalStyle />
      </GlobalContext.Provider>
    </ChakraProvider>
  );
};

export default App;
