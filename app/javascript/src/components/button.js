import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
  width: 350px;
  height: 48px;
  background: var(--primary-light-gray);
  color: var(--primary-pink);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 4px 0px 24px;
  padding: 15px 20px;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: all 0.3s;
  &:hover {
    color: var(--primary-light-gray);
    background: var(--primary-pink);
  }
`;

const Button = ({ name }) => {
  return (
    <StyledButton>
      {name}
    </StyledButton>
  )
}

export default Button