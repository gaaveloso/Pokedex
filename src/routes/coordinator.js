export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToDetailsPage = (navigate, pokemon) => {
  navigate(`/detail/${pokemon}`);
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

export const goToHomeTurnPage = (navigate, page) => {
  navigate(`/page/${page}`);
};
