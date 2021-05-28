import React from "react";

function Feature({ image, imageAltText, heading, details }) {
  return (
    <div className="feature">
      <img className="feature__image" src={image} alt={imageAltText} />
      <h2 className="feature__heading">{heading}</h2>
      <p className="feature__details">
        {details}
      </p>
    </div>
  );
}

export default Feature;
