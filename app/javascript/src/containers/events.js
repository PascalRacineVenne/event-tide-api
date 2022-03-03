import React from 'react'
// import axios from 'axios'
import Event from '../components/event'

const Events = ({events}) => {

  const list = events.map(item => {
    const {title, description, start_time, end_time} = item.attributes
 
    return(
      <Event
        key={item.id}
        title={title}
        description={description}
        start_time={start_time}
        end_time={end_time}
      />
    )
  })

  return (
    <div>
      <h3>Hello from events</h3>
      <ul>{list}</ul>
    </div>
  )
}

export default Events