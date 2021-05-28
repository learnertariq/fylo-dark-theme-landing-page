import React from "react";

function Social(props) {
  return (
    <section className="social">
      <div className="social__link-group">
        <a className="link social__link" href="#">
          <i className="social__icon fa fa-facebook-f"></i>
        </a>
        <a className="link social__link" href="#">
          <i className="social__icon fa fa-twitter"></i>
        </a>
        <a className="link social__link" href="#">
          <i className="social__icon fa fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}

export default Social;
