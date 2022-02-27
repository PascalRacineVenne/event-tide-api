import React, { useState, useEffect } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Get the events from the api
    // update events in state (setEvents)
  }, [])

  return (
    <h3>Hello from events</h3>
  )
}

export default Events