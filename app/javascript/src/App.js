import React, { useState, useEffect } from 'react'
import Events from './containers/events'
import EventForm from './containers/event_form'
import axios from 'axios'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`;

// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const App = () => {
  const [events, setEvents] = useState([])

  // get from axios
  const getEvents = () => {
    axios.get('/api/v1/events.json')
      .then(res => {
        setEvents(res.data.data)
      })
      .catch(res => console.log(res))
    }
  useEffect(() => {
    // Get the events from the api
    // update events in state (setEvents)
    getEvents()
  }, [])

  return (
    <Wrapper>
      <Events events={events} />
      <EventForm onCreate={getEvents} />
    </Wrapper>
  )
}

export default App