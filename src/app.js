/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let who = [
    "The duck",
    "My akward aunt",
    "His ninja turtle",
    "Spiderman",
    "Forrest Gump"
  ];
  let action = ["ate", "revolutionized", "peed", "trampled", "stole", "broke"];
  let what = [
    "my homework",
    "my arm",
    "the keys",
    "the Xbox",
    "my computer",
    "the car",
    "the speakers"
  ];
  let when = [
    "before the class",
    "after the game",
    "right on time",
    "when I finished my dinner",
    "while we were sleeping",
    "during my lunch",
    "while I was praying"
  ];
  const getRandomElement = myParameter => {
    let randomElement =
      myParameter[Math.floor(Math.random() * myParameter.length)];

    return randomElement;
  };

  let stringGenerator =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);

  document.querySelector("#excuse").innerHTML = stringGenerator;
};
