import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "The 19th Hole",
    image: "public/images/screesnhot pro.png",
    description: "The purpose of this project was to work collaboratively in a group to build an app implementing two API'S, a new framework, and local storage.",
    repo: "https://github.com/dannydelts94/the-19th-hole",
    live: "https://dannydelts94.github.io/the-19th-hole/",
  },
  {
    id: 1,
    title: "Dan's Weather Dashboard",
    image: "public/images/screencapture-localhost-52330-index-html-2023-04-23-21_28_15.png",
    description: "The purpose of this project was to put together a weather dashboard using JavaScript, OpenWeather API, and local storage.",
    repo: "https://github.com/dannydelts94/dans-weather-dashboard",
    live: "https://dannydelts94.github.io/dans-weather-dashboard/",
  },
  {
    id: 2,
    title: "DR Professional Portfolio",
    image: "public/images/updated.png",
    description: "The purpose of this project was to put together an interactive portfolio featuring my projects, a brief snippet about me, clickable link to my resume, and contact info at the bottom of the page.",
    live: "https://dannydelts94.github.io/dr-professional-portfolio/",
    repo: "https://github.com/dannydelts94/dr-professional-portfolio",
  },
  {
    id: 3,
    title: "Dan's Password Generator",
    image: "public/images/password-gen-screenshot.png",
    description: "The purpose of this project was to put together a random password generator. This web app interacts with user so they can customize the character types and lengths that make up the password. When the user is done setting the parameters the computer will generate a random password in the dashed box according to the user's specifications.",
    repo: "https://github.com/dannydelts94/dans-password-generator",
    live: "https://dannydelts94.github.io/dans-password-generator/",
  },
  {
    id: 4,
    title: "Dan's Movie Quiz",
    image: "public/images/quiz-screenshot.png",
    description: "The purpose of this project was to put together a quiz that will demonstrate our proficiency in HTML, CSS, and JavaScript.",
    repo: "https://github.com/dannydelts94/dans-movie-quiz",
    live: "https://dannydelts94.github.io/dans-movie-quiz/",
  },
  {
    id: 5,
    title: "Dan's Workday Scheduler",
    image: "public/images/workdayscheduler screenshot.png",
    description: "The purpose of this project was to put together a work day scheduler that is color coded according to time, displays the current date, and saves the user's input to local storage while also displaying the user's input upon refresh.",
    repo: "https://github.com/dannydelts94/dans-work-day-scheduler",
    live: "https://dannydelts94.github.io/dans-work-day-scheduler/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;