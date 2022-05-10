import React from "react";

const InfoCard = ({ img }) => {
  return (
    <div>
      <div class="card lg:card-side  shadow-xl bg-accent px-3 text-white">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
