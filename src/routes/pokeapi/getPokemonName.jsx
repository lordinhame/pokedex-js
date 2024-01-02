import axios from "axios";

export const getPokemonName = async (searchValue) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
    .then((response) => {
      let dadosPokemon = response.data;
      return dadosPokemon;
    })
    .catch((error) => {
      console.log(error);
    });
};
