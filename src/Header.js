import React from "react";
import "./Header.css";

function Header({name, imageSrc, birthday}) {
  return (
    
    <header className="header">
      <img src={imageSrc}></img>
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </header>
    
  )
}

export default Header;
