import React from 'react'
import Events from './containers/events'
import Form from './containers/form'

const App = () => {
  return (
    <div>
      <h1>Hello from App component</h1>
      <Events  />
      <Form />
    </div>
  )
}

export default App