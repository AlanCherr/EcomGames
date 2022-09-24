
import React from "react";
import "../styles/card.css"

function CardAdmin(datos) {
    const {props} = datos;
    return (
      <div className="contCard">
          <div className="card">
              <div className="title">
                {props.title}
              </div>
              <div className="image">
                <img src={props.image} width="200px" height="140px"/>
              </div>
              <div className="price">
                {props.price}
              </div>
              <div className="actionscard">
                  <button className="buttonCard">Eliminar</button>
                  <button className="buttonCard">Editar</button>
              </div>
          </div>
      </div>
    );
  }
  
  export default CardAdmin;
  