import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{
        background: `url(${appointment})`,
   
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-200px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appointment </h3>
        <h2 className="text-3xl text-white">Make Appointment Today</h2>
        <p className="text-white my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          tempore culpa laudantium eius, tenetur saepe cumque voluptatum
          necessitatibus, esse perferendis magni! Eum porro explicabo adipisci
          aspernatur quas vitae magni repellendus, ea consequatur ducimus
          eligendi a dolore dolorem velit. Inventore, hic.
        </p>
        <PrimaryButton>Get Appointment</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
