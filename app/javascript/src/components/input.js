import React from 'react'
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  font-size: 16px;
  color: var(--primary-pink);
  margin: 4px 0px;
  padding: 4px 16px;
  background: var(--primary-light-gray);
  border: none;
  border-radius: var(--border-radius);
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