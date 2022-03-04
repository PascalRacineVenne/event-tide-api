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
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const [formData, setFormData] = useState(
    { title: "", description: "", start_time: null, end_time: null }
  )
  const [errorState, setErrorState] = useState(
    { titleError: "", descriptionError: "", dateError: "" }
  )
  const [formError, setFormError] = useState(false);

  

  const validateForm =(data) => {
    let titleError = "";
    let descriptionError = "";
    let dateError = "";
    let formIsValid = false;
    
    console.log('this is the data passed');
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
 
    if (Boolean(titleError) || Boolean(descriptionError) || Boolean(dateError)) {
      console.log('booleans? ' + Boolean(titleError), Boolean(descriptionError), Boolean(dateError));
      setErrorState({ titleError, descriptionError, dateError });
      setFormError(true);
      formIsValid = false;
    } else {
      console.log('No if Statement booleans? ' + Boolean(titleError), Boolean(descriptionError), Boolean(dateError));
      formIsValid = true;
      console.log('before going out of the function ' + formIsValid);
    }
    console.log('before going out with Max' + formIsValid);
    return formIsValid
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

    // console.log("before validationForm function" + formIsValid);
    // validateForm(formData)
    // console.log("after validation" + formIsValid);
    if (validateForm(formData)) {
      // POST request to the Api
      setErrorState( {titleError: "", descriptionError: "", dateError: ""} )
      axios.post("/api/v1/events", formData)
      .then(res => {
        onCreate();
        alert("Your new event has been added to the list")
        setFormData({title: "", description: "", start_time: null, end_time: null})
      })
      .catch(res => console.log(res))
    }
    // console.log("afterPOST" + formIsValid);
    // setFormIsValid(false);
    // console.log("after Reset" + formIsValid);
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
      { formError && <Error>{errorState.titleError}</Error>}
      <TextArea
        placeholder="Description"
        name="description"
        value={formData.description} 
        onChange={handleChange}
        className="Description"
      />
      { formError && <Error>{errorState.descriptionError}</Error>}
      <Calendar
        startDate={formData.start_time}
        endDate={formData.end_time}
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
      { formError && <Error>{errorState.dateError}</Error>}
      <Button name="SUBMIT" />
    </Wrapper>
  )
}

export default EventForm;
