import React, { useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const context = { pokedex, setPokedex, pokemon, setPokemon };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
        <GlobalStyle />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
