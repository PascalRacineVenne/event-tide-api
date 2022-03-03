import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 200px;
  height: 100px;
  font-size: 16px;
  color: #E93B6F;
  margin: 4px 0px;
  padding: 4px 16px;
  background: #F1F5F8;
  border: none;
  border-radius: 2px;
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