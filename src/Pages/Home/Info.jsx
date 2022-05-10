import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../src/assets/icons/clock.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-3">
      <InfoCard img={clock} />
      <InfoCard img={clock} />
      <InfoCard img={clock} />
    </div>
  );
};

export default Info;
