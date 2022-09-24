
import React from "react";
import "../styles/filtros.css"
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'

function Filtros(props) {
    return (
      <div className="filtrocont">
       <select >
       <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
       </select>
      </div>
    );
  }
  
  export default Filtros;
  