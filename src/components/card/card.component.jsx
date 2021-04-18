import React from "react";
import "./card.styles.css"

export const Card = ({sneaker}) => 
{

  const toCurrency = (num) => Number(num*0.01).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="card-container">
      <img className="card-container-image" alt="sneaker" src={sneaker.main_picture_url}></img>
      <span className="card-label-retail-price">Retail Price</span>
      <span className="card-label-price">{toCurrency(sneaker.retail_price_cents)}</span>
      
      <span className="card-label-name">{sneaker.name}</span>
    </div>
  )

}