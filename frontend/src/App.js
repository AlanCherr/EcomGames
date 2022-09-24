import './App.css';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import RoutesComp from './Routes';

function App() {
  return (
    <div >
      <Router>
        <RoutesComp />
      </Router>
    </div>
  );
}

export default App;
