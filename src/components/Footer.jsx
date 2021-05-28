import React from "react";
import IconText from "./common/IconText";
import iconLocation from "../assets/icon-location.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconEmail from "../assets/icon-email.svg";
import logo from "../assets/logo.svg";
import Social from "./common/Social";

function Footer(props) {
  return (
    <footer className="section section-footer">
      <div className="container">
        <div className="footer">
            <img
              className="footer__brand"
              src={logo}
              alt="footer brand image"
            />
          <div className="footer__flex-container flex">
            <div className="footer__conclusion">
              <IconText
                icon={iconLocation}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              />
            </div>
            <div className="footer__contacts">
              <IconText icon={iconPhone} text="+1-543-123-4567" />
              <IconText icon={iconEmail} text="example@fylo.com" />
            </div>
            <div className="footer__links">
              <ul className="list">
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    About Us
                  </a>
                </li>
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Jobs
                  </a>
                </li>
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Press
                  </a>
                </li>
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <ul className="list">
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Contact Us
                  </a>
                </li>
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Terms
                  </a>
                </li>
                <li className="list__item footer__item">
                  <a href="#" className="link footer__link">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
