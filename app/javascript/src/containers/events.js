import React from 'react'
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
      <ul>{list}</ul>
    </div>
  )
}

export default Events