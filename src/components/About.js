import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + 'public/images/portdan.jpg'} alt="Dan Rescigno"/>
      <p className="content is-italic mt-4">
      My name is Dan Rescigno. Recently, I've decided on a career transition into full stack web development.
      </p>
      <p className="content">
      In March of 2023 I took the plunge and dove into University of Pennsylvania's intensive full time program.
      Below is a compilation of projects I've completed using the various skillsets aquired during my tenure.
      </p>
    </div>
  );
}

export default About;