import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening ",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="mt-28 ">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl mb-20">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-60 my-28">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
