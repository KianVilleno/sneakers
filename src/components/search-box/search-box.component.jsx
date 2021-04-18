import React from "react";
import "./search-box.styles.css"

export const SearchBox = ({placeholder, handleChange}) => (
  <div className="search-box">
   <form action="">
  <input type="search" onChange={handleChange}/>
  <i className="fa fa-search"></i>
</form>
  </div>
);