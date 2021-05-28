import React from "react";
import Button from "./common/Button";

function Callout(props) {
  return (
    <section className="section section-callout">
      <div className="container">
        <div className="callout">
          <h2 className="callout__heading">Get early access today</h2>
          <p className="callout__text">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="callout__input-group flex">
            <input type="text" className="input callout__input" placeholder='email@example.com' />
            <Button category='primary' text='Get Started For Free' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Callout;
