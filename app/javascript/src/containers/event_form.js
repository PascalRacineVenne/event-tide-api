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

const Error = styled.span`
  color: var(--primary-pink);
`;

const EventForm = ({ onCreate }) => {
  const [formData, setFormData] = useState(
    { title: "", description: "", start_time: null, end_time: null }
  )
  const [errorState, setErrorState] = useState(
    { titleError: "", descriptionError: "", dateError: "" }
  )
  const [formIsValid, setFormIsValid] = useState(false)

  const validateForm =(data) => {
    let titleError = "";
    let descriptionError = "";
    let dateError = "";

    console.log(data);
    
    if (data.title === "") {
      titleError = "Title field is required"
    }
    if (data.title.length > 32) {
      titleError = "You have a maximum of 32 characters"
    }
    if (data.description.length > 100) {
      descriptionError = "You have a maximum of 100 characters"
    }
    if (data.start_time === null || data.end_time === null) {
      dateError = "Please pick a starting and ending date"
    }
 
    if (titleError || descriptionError || dateError) {
      setErrorState({ titleError, descriptionError, dateError });
      // console.log(titleError, descriptionError, dateError );
      setFormIsValid(false);
    }
    setFormIsValid(true)
  }

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

    validateForm(formData)

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
      <Error>{errorState.titleError}</Error>
      <TextArea
        placeholder="Description"
        name="description"
        value={formData.description} 
        onChange={handleChange}
        className="Description"
      />
      <Error>{errorState.descriptionError}</Error>
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
      <Error>{errorState.dateError}</Error>
      <Button name="SUBMIT" />
    </Wrapper>
  )
}

export default EventForm;
