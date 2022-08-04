
import React from "react";
import "../styles/card.css"

function Card(datos) {
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
                  <button >Detalle</button>
                  <button >Comprar</button>
              </div>
          </div>
      </div>
    );
  }
  
  export default Card;
  