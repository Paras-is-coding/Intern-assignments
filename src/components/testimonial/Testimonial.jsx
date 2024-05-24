import React, { useState } from "react";
import * as classes from "./testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      imageUrl:
        "https://media.istockphoto.com/id/484143828/photo/african-american-female-college-student.jpg?s=612x612&w=0&k=20&c=Dyv0_iXrqOVNb21zZ5E24lYn1LqvE3r6hpjOC5XM0Q0=",
      content: `"I relied on my independence, tenacity and ability to take things
            lightly - because college was a walk in the park compared to where I
            grew up."`,
      username: "Angelina Francis",
      date: "ALUMNI 2012",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/smiling-woman-pointing-stack-books_114579-70564.jpg",
      content: `"I relied on my independence, tenacity and ability to take things
            lightly - because college was a walk in the park compared to where I
            grew up."`,
      username: "Lagena Phlyangi",
      date: "ALUMNI 2014",
    },
  ]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider autoplay {...settings} className={classes.container}>
      {testimonials &&
        testimonials.map((testimonial, ind) => (
          <div key={ind} className={classes.indideContainer}>
            <div className={classes.left}>
              <div className={classes.colorBox}></div>
              <div className={classes.imageContainer}>
                <img src={testimonial.imageUrl} alt="IMG" />
              </div>
            </div>

            <div className={classes.right}>
              <div className={classes.content}>{testimonial.content}</div>
              <div className={classes.bar}></div>
              <div className={classes.userDetails}>
                <span className={classes.name}>
                  <div className={classes.dash}></div>

                  <span className={classes.text}>{testimonial.username}</span>
                </span>
                <span className={classes.date}>{testimonial.date}</span>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
}
