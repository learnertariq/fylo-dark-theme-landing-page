import React from "react";
import introImage from "../assets/illustration-intro.png";
import Button from "./common/Button";

function Intro(props) {
  return (
    <section className="section section-intro">
      <div className="container">
        <div className="intro">
          <img className="image intro__image" src={introImage} alt="" />
          <div className="intro__details">
            <h1 className="intro__heading">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="intro__tagline">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers
            </p>
            <Button category='primary' text='Get Started' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
