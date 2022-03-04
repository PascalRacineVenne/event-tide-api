import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 350px;
  height: 100px;
  font-size: 14px;
  font-family: var(--body-font);
  color: var(--primary-dark-green);
  margin: 4px 0px;
  padding: 15px 20px;
  background: var(--primary-light-gray);
  border: none;
  border-radius: var(--border-radius);
  text-align: left;
  resize: none;
  outline: none;
  box-shadow: var(--box-shadow);
  &::placeholder {
    font-family: var(--body-font);
    font-size: 14px;
  }
`;

const TextArea = ({placeholder, name, value, onChange}) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      name={name}
      value={value} 
      onChange={onChange} 
    />
  )
}

export default TextArea;