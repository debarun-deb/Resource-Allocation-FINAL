import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { useSelector } from "react-redux";

function MyCalendar() {
  const [date, setDate] = useState(null);
  const bookedDates = useSelector((state) => state.bookedDates);    
  const [focused, setFocused] = useState(null);
  const isDayHighlighted = (date) => {
    // Convert the date to a string in the 'YYYY-MM-DD' format
    const dateString = date.format("YYYY-MM-DD");

    // Check if the date falls within the highlighted range
    return bookedDates.some((range) => {
      return dateString >= range.startDate && dateString <= range.endDate;
    });
  };

  return (
    <div className="calendar-container border-2 border-black">
      <SingleDatePicker
        date={date}
        onDateChange={(newDate) => setDate(newDate)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="calendar" // A unique ID for the SingleDatePicker
        numberOfMonths={2} // You can adjust the number of months displayed here
        hideKeyboardShortcutsPanel // Hide keyboard shortcuts pane // Remove border
        block 
        noBorder
        isDayHighlighted={isDayHighlighted}// Make the calendar span the entire width
      />
    </div>
  );
}

export default MyCalendar;
