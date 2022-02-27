import React from 'react'
import Events from './containers/events'
import Event from './containers/event'
import Form from './containers/form'

const App = () => {
  return (
    <div>
      <h1>Hello from App component</h1>
      <Events />
      <Event />
      <Form />
    </div>
  )
}

export default App