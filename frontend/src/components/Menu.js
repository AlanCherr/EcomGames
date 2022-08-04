import React from "react";
import Search from "./Search";
import "../styles/menu.css"

function Menu(props) {
    return (
      <div className="container">
        <div className="subcontainer">
            <div className="logo">
              {props.title}
            </div>
            <div className="searchContainer">
              <Search />
            </div>
            <div className="actions">
              <button className="buttonMenu">Ingresar</button>
              <button className="buttonMenu">Registrarse</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Menu;
  