import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // console.log(startDate, endDate)
  return (
    <div>
      <DatePicker
        placeholderText="Select your starting date"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
          if (onChange) {
            onChange(update[0], update[1]);
          }
        }}
        isClearable={false}
      />
    </div>
  );
}

export default Calendar