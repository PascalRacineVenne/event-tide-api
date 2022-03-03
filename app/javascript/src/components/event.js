import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 600px;
  min-width: 600px;
  height: 100px;
  margin: 12px 0;
  border-radius: var(--border-radius);
  background-color: var(--primary-light-gray);
  color: var(--primary-dark-green);
`;

const StartDate = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  min-width: 100px;
  text-align: center;
  background-color: var(--primary-light-green);
  color: var(--primary-light-gray);
`;

const EventInfos = styled.div`
  width: 500px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  ${'' /* border: 1px solid red; */}
`;

const Description = styled.div`
  margin-top: 4px;
  ${'' /* border: 1px solid blue; */}
`;

const EndsOn = styled.div`
  align-self: flex-end;
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
        <h4>{start.date}</h4>
        <p>{start.month} {start.year}</p>
        <p>{start.hours}:{start.minutes}</p>
      </StartDate>
      <EventInfos>
        <Title>
          <h5>{title}</h5>
        </Title>
        <Description>
          <p>{description}</p>
        </Description>
        <EndsOn>
          <small><strong>to: </strong>{end.month} {end.date} {end.year} {end.hours}:{end.minutes}</small>
        </EndsOn>
      </EventInfos>
    </Wrapper>
  )
}

export default Event