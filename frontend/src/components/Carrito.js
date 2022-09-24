
import React, { useState, useEffect } from "react";
import "../styles/carrito.css"

function Carrito(props) {
  const [carrito, setCarrito] = useState([]);
  const [carga, setCarga] = useState(true)
  const [total, setTotal] = useState(0)
  
  useEffect(()=>{
    console.log("entro");
    setCarrito([{
      titulo:"Grand Theft Auto",
      precio:3000,
      descripcion:"Nose"
    },{
      titulo:"Gran Turismo 7",
      precio:8000,
      descripcion:"Nosexd"
    },
  ])
  
  setCarga(false)
  },[])

  
  return (
    <div className="ContainerCarrito">
       {
        carga ? (

          <div className="carritocont">
              Cargando...
          </div>
        
          ):(
          <div>
                <div className="carritocont">
                      {
                        (carrito.length === 0) ? (
                          <div>
                            <h1>No hay productos</h1>
                          </div>
                        ):(
                          <div>
                                {
                                  
                                  carrito.map((juego)=>{
                                    return(
                                      <div className="miniCard">
                                        <b >{juego.titulo}</b>
                                        <b >Price: {juego.precio}</b>
                                      </div>
                                    )
                                  })
                                }
                            <h1>total: {total}</h1>
                          </div>
                        )
                      }
                  </div>
          </div>
        )
      }     
    </div>
    );
  }
  
  export default Carrito;
  