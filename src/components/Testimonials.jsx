import React from "react";
import Testimonial from "./Testimonial";
import image1 from "../assets/profile-1.jpg";
import image2 from "../assets/profile-2.jpg";
import image3 from "../assets/profile-3.jpg";

const data = [
  {
    testimonial__text:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: image1,
    name: "Satish Patel",
    details: "Founder & CEO, Huddle",
    imageAltText: "user image",
  },
  {
    testimonial__text:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: image2,
    name: "Bruce McKenzie",
    details: "Founder & CEO, Huddle",
    imageAltText: "user image",
  },
  {
    testimonial__text:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: image3,
    name: "Iva Boyd",
    details: "Founder & CEO, Huddle",
    imageAltText: "user image",
  },
];

function Testimonials(props) {
  return (
    <section className="section section-testimonial">
      <div className="container">
        <div className="testimonials flex">
          {data.map((user) => (
            <Testimonial
              text={user.testimonial__text}
              userImage={user.image}
              userName={user.name}
              userDetails={user.details}
              userImageAltText={user.imageAltText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
