import "./Searchbar.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { getPokemonName } from "../../routes/pokeapi/getPokemonName";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const btnClickHandler = async () => {
    const dadosPokemon = await getPokemonName(search);
    console.log(dadosPokemon);
  };

  return (
    <>
      <i
        className="pi pi-fw pi-search icon"
        style={{ color: "var(--primary-color)" }}
      ></i>
      <InputText
        placeholder="Pesquisar Pokemon"
        type="text"
        className="w-full h-full"
        value={search}
        onChange={searchHandler}
      />
      <Button className="w-full h-full btn" onClick={btnClickHandler}>
        Pesquisar
      </Button>
    </>
  );
};

export default Searchbar;
