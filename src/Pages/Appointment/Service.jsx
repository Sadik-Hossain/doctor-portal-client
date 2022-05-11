import React from "react";

const Service = ({ service, setTreatment }) => {
  const { _id, name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500  capitalize">Try Another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces " : "space "} available
        </p>
        <div class="card-actions justify-center">

            {/* 
            //! ekahne button er bodole label use kra hyce, modal er jnno. kon button e click krle kon maodal show krbe tar jnno for attrib.
            */}
          <label
          for = 'booking-modal'
            //* jkhn kno slot thakbe na, tokhon button disabled dekhabe
            disabled={slots.length === 0}
            // * data/ param pathathe arrow func. use krte hoy
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white uppercase "
          >
           Book Appointmnet
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
