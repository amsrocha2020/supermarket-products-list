import React from 'react';

import Input from './Input';

const Fields = ({ 
    submit, 
    valueInputQtd,
    handleChangeQtd,
    valueInputName,
    handleChangeName, 
    valueInputPrice,
    handleChangePrice 
  }) => {

  return (
    <div className="fields-div">
      <form onSubmit={submit}>
        <Input 
          type="number"
          className="fields-input fields-input-quantity"
          value={valueInputQtd} 
          onChange={handleChangeQtd}
          placeholder="Qtd" />
        <Input
          type="text"
          className="fields-input fields-input-product" 
          value={valueInputName}
          onChange={handleChangeName}  
          placeholder="Product Name" />
        <Input 
          type="number"
          className="fields-input fields-input-price" 
          value={valueInputPrice} 
          onChange={handleChangePrice}
          placeholder="Price" />
        <button className="button-form" type="submit">ADD PRODUCT</button> 
      </form>
      
    </div>
  )
}

export default Fields;