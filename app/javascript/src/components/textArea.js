import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 200px;
  height: 100px;
  font-size: 16px;
  color: var(--primary-pink);
  margin: 4px 0px;
  padding: 4px 16px;
  background: var(--primary-light-gray);
  border: none;
  border-radius: var(--border-radius);
  text-align: left;
  resize: none;
  outline: none;
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