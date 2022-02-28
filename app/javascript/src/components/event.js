import React from 'react'

const Event = ({title, description, start_time, end_time}) => {
  return (
    <div>
      <div className="start-date">
        <p>{start_time}</p>
      </div>
      <div className="event-infos">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{end_time}</p>
      </div>
    </div>
  )
}

export default Event