import React from "react";
import "./card-list.styles.css";
import {Card} from "../card/card.component"

export const CardList = ({sneakers}) => ( 
  <div className="card-list">
    {sneakers.map((sneaker) => (
      <Card sneaker={sneaker} key={sneaker.id}/>
    ))}
  </div> 
);