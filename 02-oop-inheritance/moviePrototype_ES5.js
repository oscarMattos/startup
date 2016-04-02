

//////Movie Object


function movie (title,year,duration) {

	this.title = title;

	this.year = year;

	this.duration = duration;

	//methodes inside movie object

	/*
	this.play = function(){
		console.log( this.title + " is rolling!");
	};

	this.pause = function(){
		console.log( this.title + " has been paused!");
	};

	this.resume = function(){
		console.log("Returning to the movie!");
	};
	*/

}


////// Movie Prototype

//methodes inside movie prototype

movie.prototype.play = function(){
	console.log( this.title + " is rolling!" );
};

movie.prototype.pause = function(){
	console.log( this.title + " has been paused!" );
};

movie.prototype.resume = function(){
	console.log( "Returning to the movie!" );
};

movie.prototype.info = function(){
	console.log( "Movie: " + this.title + "." + " Year: " + this.year + "." + " Duration: " + this.duration + ".");
};


//////Batman vs Superman Movie


let batmanMovie = new movie( "Batman vs Superman", 2016, 160 );

console.log( batmanMovie.title );

console.log( batmanMovie.year );

console.log( batmanMovie.duration );

batmanMovie.info();

batmanMovie.play();

batmanMovie.pause(); 

batmanMovie.resume(); 

batmanMovie.play();


//////Mad Max Movie


let madmaxMovie = new movie( "Mad Max", 2015, 180 );

console.log( madmaxMovie.title );

console.log( madmaxMovie.year );

console.log( madmaxMovie.duration );

madmaxMovie.info();

madmaxMovie.play();

madmaxMovie.pause(); 

madmaxMovie.resume(); 

madmaxMovie.play();


//////300 Movie


let spartaMovie = new movie( "300", 2012, 165 );

console.log( spartaMovie.title );

console.log( spartaMovie.year );

console.log( spartaMovie.duration );

spartaMovie.info();

spartaMovie.play();

spartaMovie.pause(); 

spartaMovie.resume(); 

spartaMovie.play();

















