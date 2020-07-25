import React from "react";

const List = ({ index, product, complete, remove }) => {
  return (
    <div className="product-info">
      <div key={index} className="product-item-list" 
        onClick={() => complete(index)}
        style={{ backgroundColor: product.isCompleted ? "#d4b5b0" : "" }}>
        <div className="product-item product-item-qtd" 
          style={{ textDecoration: product.isCompleted ? "line-through" : "" }}
        >{product.qtd}</div>
        <div className="product-item product-item-name" 
          style={{ textDecoration: product.isCompleted ? "line-through" : "" }}
        >{product.name}</div>
        <div className="product-item product-item-price" 
          style={{ textDecoration: product.isCompleted ? "line-through" : "" }}
        >{(product.qtd * product.price).toFixed(2)} €</div>
        
      </div>
      <div className="product-item delete-item" 
      onClick={() => remove(index)}>
        <i className="fa fa-trash-o" aria-hidden="true"></i>
    </div>
  </div>
  );
};

export default List;
