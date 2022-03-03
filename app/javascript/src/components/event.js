import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  border: 1px solid var(--primary-light-gray);
  height: 80px;
  margin: 8px 0;
`;

const StartDate = styled.div`
  text-align: center;
`;

const EventInfos = styled.div`
  
`;

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
    <Wrapper>
      <StartDate>
        <h3>{start.date}</h3>
        <p>{start.month} {start.year}</p>
        <p>{start.hours}:{start.minutes}</p>
      </StartDate>
      <EventInfos>
        <h4>{title}</h4>
        <p>{description}</p>
        <p><strong>to: </strong>{end.month} {end.date} {end.year} {end.hours}:{end.minutes}</p>
      </EventInfos>
    </Wrapper>
  )
}

export default Event