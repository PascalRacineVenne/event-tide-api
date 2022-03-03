import React, { useState } from 'react'
import axios from 'axios'

import Input from '../components/input'
import Calendar from './calendar'
import Button from '../components/button'
import TextArea from '../components/textArea'

import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const description = styled.input`
  height: 200px;
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
      <Input 
        type="text"
        placeholder="enter event title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <TextArea
        placeholder="enter a description"
        name="description"
        value={formData.description} 
        onChange={handleChange}
        className="description"
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
      <Button name="Submit" />
    </Wrapper>
  )
}

export default EventForm
