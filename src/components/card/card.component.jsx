import React from "react";
import "./card.styles.css"

export const Card = ({sneaker}) => (
  <div className="card-container">
    <img className="card-container-image" alt="sneaker" src={sneaker.main_picture_url}></img>
    <p>{sneaker.name}</p>
  </div>
);