import React from 'react'

const Event = ({title, description, start_time, end_time}) => {

  const getTime = (time) => {
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const moment = new Date(time),
      year = moment.getFullYear().toString(),
      month = monthName[moment.getMonth()],
      date = ("0" + moment.getDate()).slice(-2),
      day = dayName[moment.getDay()],
      hours = ("0" + moment.getHours()).slice(-2),
      minutes = ("0" + moment.getMinutes()).slice(-2)

    return {
        year: year,
        month: month,
        date: date,
        day: day,
        hours: hours,
        minutes: minutes
    };
  } 

  const start = getTime(start_time)
  const end = getTime(end_time)

  return (
    <div>
      <div className="start-date">
        <p>{start.day}</p>
        <h3>{start.date}</h3>
        <p>{start.month}</p>
        <p>{start.year}</p>
        <h4>{start.hours}:{start.minutes}</h4>
      </div>
      <div className="event-infos">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{end.day} {end.month} {end.date} {end.year} at {end.hours}:{end.minutes}</p>
      </div>
    </div>
  )
}

export default Event