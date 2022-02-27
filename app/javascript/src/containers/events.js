import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Get the events from the api
    // update events in state (setEvents)
    axios.get('/api/v1/events.json')
    .then(res => {
      setEvents(res.data.data)
    })
    .catch(res => console.log(res))
  }, [events.length])

  const list = events.map(item => {
    return(<li key={item.id}>{item.attributes.title}</li>)
  })

  return (
    <div>
      <h3>Hello from events</h3>
      <ul>{list}</ul>
    </div>
  )
}

export default Events