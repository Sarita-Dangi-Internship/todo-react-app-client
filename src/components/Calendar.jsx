import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = (props) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        props.handleDate(date);
        setStartDate(date);
      }}
      showDisabledMonthNavigation
    />
  );
};
export default Calendar;
