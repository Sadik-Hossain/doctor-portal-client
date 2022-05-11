import React, { useState } from "react";
import Footer from "../Home/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      {/* 
      //* siblings er moddhe data share korte state lift kora lage. ekhane banner er data available er kase pathate chai . tai baaner er data age parent e pathabo then parent theke sibling e pahtabo
      */}
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
