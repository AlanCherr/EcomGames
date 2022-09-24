import React from "react";
import Search from "./Search";
import "../styles/menu.css"
import { Link } from "react-router-dom";

function Menu(props) {
    return (
      <div className="container">
        <div className="subcontainer">
            <div className="logo">
              {props.title}
            </div>
            <div className="searchContainer">
              <Search value="Buscar juego"/>
              <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
		              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
	            </svg>
            </div>
            <div className="actions">
              <button className="buttonMenu"><Link to="/login">Login</Link></button>
            <button className="buttonMenu"><Link to="/signin">Registrarse</Link></button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Menu;
  