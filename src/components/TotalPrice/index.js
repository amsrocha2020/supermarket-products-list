import React from 'react'

const TotalPrice = ({ price }) => {
  return (
    <div className="total-price">
      <span>TOTAL PRICE</span>
      <div className="price">{price} €</div>
    </div>
  )
}

export default TotalPrice;
