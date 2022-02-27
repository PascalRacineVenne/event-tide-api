import React from 'react'

const Input = ({type, placeholder, name, value, onChange}) => {
  return (
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    />
  )
}

export default Input