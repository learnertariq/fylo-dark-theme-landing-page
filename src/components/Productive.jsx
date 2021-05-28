import React from "react";
import productiveImage from "../assets/illustration-stay-productive.png";
import iconArrow from "../assets/icon-arrow.svg";

function Productive(props) {
  return (
    <section className="section section-productive">
      <div className="container">
        <div className="productive flex">
          <img
            className="image productive__image"
            src={productiveImage}
            alt=""
          />
          <div className="productive__details">
            <h2 className="productive__heading">
              Stay productive, wherever you are
            </h2>
            <p className="productive__text">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="productive__text">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#" className="link productive__link-how">
              See how Fylo works
              <img
                className="productive__icon-arrow"
                src={iconArrow}
                alt="arrow icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productive;
