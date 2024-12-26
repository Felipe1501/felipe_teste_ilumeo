import React from 'react';

interface Shift {
  date: string;
  hours: string;
}

interface ShiftListProps {
  shifts: Shift[];
}

const ShiftList: React.FC<ShiftListProps> = ({ shifts }) => {
  return (
    <ul className="shifts">
      {shifts.map((shift, index) => (
        <li key={index}>
          <span>{shift.date}</span>
          <span>{shift.hours}</span>
        </li>
      ))}
    </ul>
  );
};

export default ShiftList;
