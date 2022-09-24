import Carrito from '../components/Carrito';
import Menu from '../components/Menu';
import Filtros from '../components/Filtros';
import Listado from '../components/Listado';
import { useState } from 'react';
import "../styles/Home.css"

function Home() {
    const [carrito, setCarrito] = useState(false)
    return (
      <div className="homeContainer">
      <div>
          <div>
              <Menu title="EcomGames"/>
          </div>
          <div>
              <Filtros />
          </div>
      </div>
        
        <div className="subcontainer">
            <div className='listado'>
                <Listado  admin={false}/>
            </div>
            <div className='actionButton'>
                    {
                      carrito ? (
                        <div className='carrito'>
                          <button className="button"  onClick={()=> setCarrito(false)}>Ocultar Carrito</button>
                          <Carrito />
                        </div>
                        
                      ): (
                        <div className='carrito'>
                          <button className="button"  onClick={()=> setCarrito(true)}>Mostrar Carrito</button>
                        </div>
                      )
                    }
            </div>
        </div>
      </div>
    );
  }

  
export default Home;
