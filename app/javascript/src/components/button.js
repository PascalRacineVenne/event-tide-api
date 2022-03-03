import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--primary-light-gray);
  color: var(--primary-pink);
  width: 232px;
  font-size: 16px;
  text-align: center;
  margin: 4px 0px;
  padding: 4px 16px;
  border: none;
  border-radius: var(--border-radius);
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