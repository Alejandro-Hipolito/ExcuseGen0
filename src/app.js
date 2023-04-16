/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // 1- Declaro los arrays.
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

  // 2- Creo una función tipo flecha que recoja el índice de cada array aleatoriamente y devuelva el índice aleatorio generado.
  const excuseGen = exIndex => {
    let idx = "";
    idx = exIndex[Math.floor(Math.random() * exIndex.length)];

    return idx;
  };

  // 3- Creo la función onLoad y dentro de ella creo una variable para juntarlo con el HTML.
  const onLoad = () => {
    let gen = document.querySelector("#excuse");

    // 4- A la variable de antes le añado los arrays creados al inicio para que se junten y generen la excusa
    gen.innerHTML =
      excuseGen(who) +
      " " +
      excuseGen(action) +
      " " +
      excuseGen(what) +
      " " +
      excuseGen(when);
  };
  window.onLoad = onLoad();
};
