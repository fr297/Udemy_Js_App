"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".button"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

box.style.cssText = "background-color: red; width: 500px";
// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = "black";
// }

// button.forEach((item) => {
//   item.style.backgroundColor = "green";
// });

const div = document.createElement("div");
// const text = document.createTextNode("I was here");

div.classList.add("black");

// wrapper.append(div);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello World"

div.insertAdjacentHTML("afterbegin", <h2>Hello</h2>);
