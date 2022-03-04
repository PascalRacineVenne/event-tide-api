import React, { useState } from 'react'
import axios from 'axios'

import Input from '../components/input'
import Calendar from './calendar'
import Button from '../components/button'
import TextArea from '../components/textArea'

import styled from 'styled-components'

const Wrapper = styled.form`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 48px;
  background-color: white;
  border-radius: var(--border-radius);
`;

const Description = styled.input`
  height: 200px;
  padding: 12px 0;
`;
const Title = styled.h3`
  padding: 12px 0;
  font-family: var(--special-font);
  color: var(--primary-dark-green);
  opacity: 0.7;
`;

const EventForm = ({ onCreate }) => {
  const [formData, setFormData] = useState(
    { title: "", description: "", start_time: null, end_time: null }
  )

  const handleChange = (event) => {
    const {name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // POST request to the Api
    axios.post("/api/v1/events", formData)
      .then(res => {
        onCreate();
        alert("Your new event has been added to the list")
        setFormData({title: "", description: "", start_time: null, end_time: null})
      })
      .catch(res => console.log(res))
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
        <Title>New Event</Title>
      <Input 
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <TextArea
        placeholder="Description"
        name="description"
        value={formData.description} 
        onChange={handleChange}
        className="Description"
      />
      <Calendar
        onChange= {(startDate, endDate) => {
          setFormData(prevFormData => {
            return {
              ...prevFormData,
              start_time: startDate,
              end_time: endDate
            }
          })
        }}
      />
      <Button name="SUBMIT" />
    </Wrapper>
  )
}

export default EventForm
