import React from 'react'
import styled from "styled-components";

const StyledInput = styled.input`
  width: 350px;
  height: 48px;
  font-size: 14px;
  color: var(--primary-dark-green);
  margin: 4px 0px;
  padding: 15px 20px;
  background: var(--primary-light-gray);
  border: none;
  border-radius: var(--border-radius);
  text-align: left;
  outline: none;
  box-shadow: var(--box-shadow);
  &::placeholder {
    font-family: var(--body-font);
    font-size: 14px;
  }
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