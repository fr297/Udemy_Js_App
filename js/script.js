"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("What is the last film you watched?", ""),
      b = +prompt("How would you rate it?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Not many films watched");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Good");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are a cinephile");
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Your favorite film genre number ${i}`,
      ""
    );
  }
}
writeYourGenres();

console.log(personalMovieDB);
