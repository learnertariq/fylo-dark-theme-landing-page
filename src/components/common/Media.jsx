import React from "react";

function Media({ image, title, details, imageAltText }) {
  return (
    <div className="media">
      <img className="media__image" src={image} alt={imageAltText} />
      <div className="media__body">
        <h3 className="media__title">{title}</h3>
        <p className="media__details">{details}</p>
      </div>
    </div>
  );
}

export default Media;
