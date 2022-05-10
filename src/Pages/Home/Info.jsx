import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../src/assets/icons/clock.svg";
import marker from "../../../src/assets/icons/marker.svg";
import phone from "../../../src/assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        bgClass="bg-gradient-to-r  from-primary to-secondary"
      />
      <InfoCard cardTitle="Our Locations" img={marker} bgClass="bg-accent" />
      <InfoCard
        cardTitle="Contact Us"
        img={phone}
        bgClass="bg-gradient-to-r  from-primary to-secondary"
      />
    </div>
  );
};

export default Info;
