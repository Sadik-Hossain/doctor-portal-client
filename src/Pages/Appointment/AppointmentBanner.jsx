import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  /* 
? lifting state to parent 
* const [date, setDate] = useState(new Date()); 
*/
  return (
    <div
      className="hero min-h-screen "
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-24 lg:gap-56 ">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl aspect-w-16 aspect-h-9"
          alt="chair"
        />
        <div>
          {/* 
          //* date e dbl click krle error fix er soln. hocce onSelect er poriborte onDayClick deya
          */}
          <DayPicker mode="single" selected={date} onDayClick={setDate} />
          <p>You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
