import React from "react";
import NavBar from "./NavBar/NavBar";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <h1>PaleoData</h1>
      <p>
        Venez faire un safari préhistorique à la rencontre d'animaux ayant
        peuplé notre Terre !
      </p>
      <NavBar />
    </header>
  );
}

export default Header;
