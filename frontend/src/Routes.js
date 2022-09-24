import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import HomeAdmin from './views/HomeAdmin';

import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function RoutesComp() {
  return (
        <Routes>
            <Route path='/' element={<HomeAdmin/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Register/>}/>
        </Routes>
   
  );
}

export default RoutesComp;
