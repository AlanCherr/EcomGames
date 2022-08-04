
import React, { useState, useEffect } from "react";
import "../styles/listado.css"
import Card from "./Card";

function Listado(props) {

  const [juego, setJuego] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/games') // hacemos la petición get
    .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
    .then(res => setJuego(res)); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []);
    return (
      <>
      <div className="contenedor">
            {juego.map((juego)=>{
              return(
                    <Card props={juego}/>
              )
            })}
      </div>
      </>
    );
  }
  
  export default  Listado;
  