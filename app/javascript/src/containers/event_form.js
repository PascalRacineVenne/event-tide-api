import React, { useState } from 'react'
import axios from 'axios'


import Input from '../components/input'
import Calendar from './calendar'

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
    // submit to Api!!!
    console.log(formData);
    axios.post("/api/v1/events", formData)
      .then(res => {
        onCreate();
        alert("Your new event has been added to the list")
        setFormData({title: "", description: "", start_time: null, end_time: null})
      })
      .catch(res => console.log(res))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text"
        placeholder="enter event title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <Input 
        type="text"
        placeholder="enter a description"
        onChange={handleChange}
        value={formData.description}
        name="description"
      />
      <Calendar

        // onChange={(startDate, endDate) => {
        //   console.log('start date:', startDate, typeof(startDate), '& end date:', endDate, typeof(endDate));
        // }}

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
      <button>Submit</button>
    </form>
  )
}

export default EventForm
