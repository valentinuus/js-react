"use strict"

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотреле?", '');
	while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотреле?", '');
	}
}

// start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("какой последний фильм", ""),
			b = prompt("баллов поставите", "");
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
};

// rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('мало');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('нормчик');
	} else if (personalMovieDB.count >= 30) {
		console.log('много');
	} else {
		console.log('ошибка');
	}
};

// detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB)
	}
};

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const a = prompt(`Ваш любимый жанр ${i}`)
		if (a != '' && a != null && a.length < 50) {
			personalMovieDB.genres[i - 1] = a;
		} else{
			i--;
		}
		

	}
}

writeYourGenres()