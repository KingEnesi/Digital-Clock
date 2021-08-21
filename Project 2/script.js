"use strict";

let hours;
let minutes;
let seconds;
let amPm;

let h;
let m;
let s;
let am;

function clock() {
  hours = document.getElementById("hour");
  minutes = document.getElementById("minutes");
  seconds = document.getElementById("seconds");
  amPm = document.getElementById("ampm");

  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();
  am = `AM`;

  if (h > 12) {
    h = h - 12;
    am = `PM`;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  amPm.innerHTML = am;
}

const interval = setInterval(clock, 1000);
