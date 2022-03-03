import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
  background: #F1F5F8;
  color: #E93B6F;
  width: 232px;
  font-size: 16px;
  text-align: center;
  margin: 4px 0px;
  padding: 4px 16px;
  border: none;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    color: #F1F5F8;
    background: #E93B6F;
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