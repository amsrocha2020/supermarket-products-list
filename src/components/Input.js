import React from 'react'

const Input = ({ 
    placeholder, 
    className, 
    value, 
    onChange,
    type
  }) => {
  return (
    <input 
      type={type} 
      className={className} 
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      required 
    />
  )
}

export default Input;