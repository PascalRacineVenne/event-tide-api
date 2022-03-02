import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const Calendar = ({ onChange }) => {
  // const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const dateRange = [startDate, endDate]
  // console.log(`Start date is :${startDate}, & end date is ${endDate}`)

  // const handleChange = (startDate, endDate) => {
  //   console.log(startDate, endDate);
  // }

  return (
    <div>
      <DatePicker
        placeholderText="Starting date"
        selected={startDate}
        showTimeSelect
        onChange={(date) => {
          console.log('start ' + date)
          setStartDate(date);
          if (onChange) {
            onChange(date);
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
          console.log('end ' + date)
          setEndDate(date);
          if (onChange) {
            onChange(date);
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