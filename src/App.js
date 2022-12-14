import React from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
