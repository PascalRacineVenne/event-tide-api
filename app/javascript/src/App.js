import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import Events from './containers/events'
import EventForm from './containers/event_form'
import NavBar from './components/navbar'

import axios from 'axios'
import styled from 'styled-components'
import '../../assets/stylesheets/index.scss';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 50px 0;
`;

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
    <Fragment>
      <NavBar />
      <Wrapper>
        <Events events={events} />
        <EventForm onCreate={getEvents} />
      </Wrapper>
    </Fragment>
  )
}

export default App