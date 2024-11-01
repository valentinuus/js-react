const numberOfFilms = prompt("Сколько фильмов вы уже посмотреле", "1");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("какой последний фильм", ""),
		b = prompt("баллов поставите", ""),
		c = prompt("какой последний фильм", ""),
		d = prompt("баллов поставите", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)