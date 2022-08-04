import './App.css';
import Carrito from './components/Carrito';
import Menu from './components/Menu';
import Filtros from './components/Filtros';
import Listado from './components/Listado';

function App() {
  return (
    <div className="App">
      <Menu title="EcomGames"/>
      <div className="subcont">
        <Filtros />
        <Listado/>
        <Carrito />
      </div>
    </div>
  );
}

export default App;
