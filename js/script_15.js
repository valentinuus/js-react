"use strict"

const numberOfFilms = prompt("Сколько фильмов вы уже посмотреле?", '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


for (let i = 0; i < 1; i++) {
	const a = prompt("какой последний фильм", ""),
			b = prompt("баллов поставите", "");
	if (a != null && b != null && a != '' && b != '' && a.length < 10) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
};


if (personalMovieDB.count < 10) {
	console.log('мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('нормчик');
} else if (personalMovieDB.count >= 30 ) {
	console.log('много');
} else {
	console.log('ошибка');
};


console.log(personalMovieDB);