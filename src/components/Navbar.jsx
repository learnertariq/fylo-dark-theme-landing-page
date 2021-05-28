import React from "react";
import logo from "../assets/logo.svg";
import Toggler from "./common/Toggler";

function Navbar({isDark, onToggleDark}) {

  return (
    <section className="section section-nav">
      <div className="container">
        <nav className="nav flex">
        <Toggler isOn={isDark} onToggle={onToggleDark} />
          <img className="nav__brand" src={logo} alt="nav brand logo" />
          <ul className="list list--inline nav__list">
            <li className="list__item nav__item">
              <a className="link nav__link" href="#">
                Features
              </a>
            </li>
            <li className="list__item nav__item">
              <a className="link nav__link" href="#">
                Team
              </a>
            </li>
            <li className="list__item nav__item">
              <a className="link nav__link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
