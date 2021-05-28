import React from "react";
import Media from "./common/Media";

function Testimonial({ text, userImage, userName, userDetails, userImageAltText }) {
  return (
    <div className="testimonial">
      <p className="testimonial__text">{text}</p>
      <Media
        image={userImage}
        title={userName}
        details={userDetails}
        imageAltText={userImageAltText}
      />
    </div>
  );
}

export default Testimonial;
