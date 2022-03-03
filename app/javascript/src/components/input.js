import React from 'react'
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  font-size: 16px;
  color: #E93B6F;
  margin: 4px 0px;
  padding: 4px 16px;
  background: #F1F5F8;
  border: none;
  border-radius: 2px;
  text-align: left;
  outline: none;
`;

const Input = ({type, placeholder, name, value, onChange}) => {
  return (
    <StyledInput
    type={type}
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    />
  )
}

export default Input