import React from "react";
import Feature from "./Feature";
import iconAccessAnywhere from "../assets/icon-access-anywhere.svg";
import iconSecurity from "../assets/icon-security.svg";
import iconCollaboration from "../assets/icon-collaboration.svg";
import iconAnyFile from "../assets/icon-any-file.svg";

function Features(props) {
  return (
    <section className="section section-feature">
      <div className="container">
        <div className="features grid">
          <Feature
            image={iconAccessAnywhere}
            imageAltText="access anywhere icon"
            heading='Access your files, anywhere'
            details="The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere."
          />
          <Feature
            image={iconSecurity}
            imageAltText="security icon"
            heading='Security you can trust'
            details="2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files."
          />
          <Feature
            image={iconCollaboration}
            imageAltText="collaboration icon"
            heading='Real-time collaboration'
            details="Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required."
          />
          <Feature
            image={iconAnyFile}
            imageAltText="any file icon"
            heading='Store any type of file'
            details="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
