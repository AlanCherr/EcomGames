
import React, { useState } from "react";
import "../styles/card.css"

function Card(datos) {
    const {props} = datos;
    const [añadir, setAñadir] = useState({})
    return (
          <div className="card">
              <div className="headerContainer">
                <div >
                  <input type={"checkbox"} className="checkbox" />
                </div>
                <div className="title">
                    {props.title}
                </div>
              </div>
              <div className="image">
                <img src={props.image} width="200px" height="140px"/>
              </div>
              <div className="price">
                <b>${props.price}</b>
              </div>
              <div className="actionscard">
                  <button className="buttonCard">Detalle</button>
                  <button className="buttonCard"  onClick={()=> setAñadir(datos)}>Añadir al carro</button>
              </div>
          </div>
    );
  }
  
  export default Card;
  