"use strict";

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("How many films have you watched?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films have you watched?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("What is the last film you watched?", "").trim(),
        b = +prompt("How would you rate it?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Not many films watched");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Good");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a cinephile");
    } else {
      console.log("Error");
    }
  },
  showMyDB: function () {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 3; i++) {
      let genre = prompt(`Your favorite film genre number ${i}`, "");
      personalMovieDB.genres[i - 1] = genre;

      if (genre === "" || genre == null) {
        console.log("Try more");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favourite genre ${i + 1} is ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

console.log(personalMovieDB);
