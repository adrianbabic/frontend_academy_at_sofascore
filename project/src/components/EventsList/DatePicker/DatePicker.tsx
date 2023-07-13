import React, { useState, useEffect, PropsWithChildren } from 'react';
import { Button, DateItem, DatesContainer } from './DatePicker.styles';

type DatePickerProps = {
  onSelectedDateChange: (selectedDate) => void;
};

export default function DatePicker(props: PropsWithChildren<DatePickerProps>) {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {

    props.onSelectedDateChange(selectedDate);

    const newDates = [];
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + i);
      newDates.push(newDate);
    }
    setDates(newDates);
  }, [selectedDate]);

  const handleButtonClick = (daysToAdd: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + daysToAdd);
    setSelectedDate(newDate);
  };

  const areDatesEqual = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  };

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const selectDay = (date: Date) => {

    if (areDatesEqual(date, new Date())) {
      return "TODAY";
    } else {
      return daysOfWeek[date.getDay()];
    }
  };

  return (
    <DatesContainer>
      <Button onClick={() => handleButtonClick(-1)}>{'<'}</Button>
      {dates.map((date) => (
        <DateItem key={date.getTime()} active={date.toDateString() === selectedDate.toDateString()}>
          <a>{selectDay(date)}</a>
          <a>{date.getDate().toString()}.{(date.getMonth() + 1).toString()}.</a>
        </DateItem>
      ))}
      <Button onClick={() => handleButtonClick(1)}>{'>'}</Button>
    </DatesContainer>
  );
}

