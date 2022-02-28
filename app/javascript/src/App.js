import React from 'react'
import Events from './containers/events'
import EventForm from './containers/event_form'


const App = () => {
  return (
    <div>
      <h1>Hello from App component</h1>
      <Events />
      <EventForm />
    </div>
  )
}

export default App