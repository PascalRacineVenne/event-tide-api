import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  outline: none;
`;

const StyledPicker = styled(DatePicker)`
  width: 350px;
  height: 48px;
  font-size: 16px;
  margin: 4px 0px;
  padding: 4px 16px;
  background: #F1F5F8;
  border: none;
  border-radius: var(--border-radius);
  text-align: left;
  box-shadow: var(--box-shadow);
  &::placeholder {
    font-family: var(--body-font);
    font-size: 14px;
  }
`;


const Calendar = ({ onChange, startDate, endDate }) => {
  return (
    <Wrapper>
      <StyledPicker
        placeholderText="Starting date"
        selected={startDate}
        showTimeSelect
        onChange={(date) => {
          if (onChange) {
            onChange(date, endDate);
          }
        }}
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        isClearable={true}
        withPortal
      />
      <StyledPicker
        placeholderText="Ending date"
        selected={endDate}
        showTimeSelect
        onChange={(date) => {
          if (onChange) {
            onChange(startDate, date);
          }
        }}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        isClearable={true}
        withPortal
      />
    </Wrapper>
  );
}

export default Calendar
