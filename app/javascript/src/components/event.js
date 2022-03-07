import React from 'react'
import styled from 'styled-components'
import { getDateData } from '../utils/get_date_data'

const Wrapper = styled.div`
  display: flex;
  height: 100px;
  margin: 12px 0;
  background-color: var(--primary-light-gray);
  color: var(--primary-dark-green);
  border-radius: var(--border-radius);
`;

const StartDate = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  min-width: 100px;
  text-align: center;
  background-color: var(--primary-light-green);
  border-radius: 4px 0 0 4px;
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
`;

const Description = styled.div`
  margin-top: 4px;
`;

const EndsOn = styled.div`
  align-self: flex-end;
`;

const Event = ({title, description, start_time, end_time}) => {

  const start = getDateData(start_time)
  const end = getDateData(end_time)

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