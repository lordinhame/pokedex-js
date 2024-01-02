import "./Header.css";
import { Menubar } from "primereact/menubar";
import Searchbar from "../Searchbar";

const Header = () => {
  const end = (
    <div className="div-logo">
      <img className="logo" src="../public/img/pokeapi-logo.png" />
      <img className="icon" src="../public/img/pokeball-icon.png" />
    </div>
  );
  const start = (
    <>
      <Searchbar />
    </>
  );

  return <Menubar start={start} end={end} />;
};

export default Header;
