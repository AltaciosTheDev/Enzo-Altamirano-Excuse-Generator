/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//control the DOM element
const excuseEl = document.getElementById("excuse");
const btnEl = document.getElementById("btn");

//Declare the parts of the excuse
let who = ["The dog", "My grandma", "His turtle", "My bird", "My friend"];
let action = ["ate", "peed", "crushed", "broke", "stole"];
let what = ["my homework", "the keys", "the car", "my money"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "before church started"
];

window.onload = function() {
  btnEl.addEventListener("click", generateExcuse);
};

function generateRandomIndex(anArray) {
  let randomIndex = Math.floor(Math.random() * anArray.length);
  return randomIndex;
}

function generateExcuse() {
  let excuseStr = "";
  excuseStr =
    who[generateRandomIndex(who)] +
    " " +
    action[generateRandomIndex(action)] +
    " " +
    what[generateRandomIndex(what)] +
    " " +
    when[generateRandomIndex(when)];
  excuseEl.innerHTML = excuseStr;
}
