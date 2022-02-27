import React, { useState } from 'react'

import Input from '../components/input'
import Calendar from './calendar'

const Form = () => {
  const [formData, setFormData] = useState(
    { title: "", description: ""}
  );
  // const [description, setDescription] = useState("");
  // console.log(`Title is ${title}. Description is ${description}`);
  // console.log(formData);

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
    const answers = event.target
    // console.log(`This is my ${answers}`)
    console.log(answers)
    // answers.forEach(element => {
    //   console.log(element)
    // })
    // submit to Api!!!
    // save it to state...?
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
      <Calendar />
      <button>Submit</button>
    </form>
  )
}

export default Form
