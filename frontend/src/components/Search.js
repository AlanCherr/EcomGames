
import React from "react";
import "../styles/search.css"

function Search(props) {
    return (
      <input type="search" className="search" placeholder={props.value}/>
    );
  }
  
  export default Search;
  