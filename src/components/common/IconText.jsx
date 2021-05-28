import React from "react";

function IconText({icon, text}) {
  return (
    <div className="icon-text flex">
      <img className="icon-text__image" src={icon} alt="icon text image" />
      <p className="icon-text__text">
        {text}
      </p>
    </div>
  );
}

export default IconText;
