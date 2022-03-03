import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendar = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dateRange = [startDate, endDate]
  // console.log('first: ' + dateRange[0] + 'second: ' + dateRange[1]);

  return (
    <div>
      <DatePicker
        placeholderText="Starting date"
        selected={startDate}
        showTimeSelect
        onChange={(date) => {
          // console.log('start ' + date)
          setStartDate(date);
          if (onChange) {
            onChange(...dateRange, dateRange[0]);
          }
        }}
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        isClearable={true}
      />
      <DatePicker
        placeholderText="Ending date"
        selected={endDate}
        showTimeSelect
        onChange={(date) => {
          // console.log('end ' + date)
          setEndDate(date);
          if (onChange) {
            onChange(...dateRange, dateRange[1]);
          }
        }}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        isClearable={true}
      />
    </div>
  );
}

export default Calendar

// const Calendar = ({ onChange }) => {
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//   // console.log(startDate, endDate)
//   return (
//     <div>
//       <DatePicker
//         placeholderText="Select your starting date"
//         selectsRange={true}
//         startDate={startDate}
//         endDate={endDate}
//         onChange={(update) => {
//           setDateRange(update);
//           if (onChange) {
//             onChange(update[0], update[1]);
//           }
//         }}
//         isClearable={false}
//       />
//     </div>
//   );
// }