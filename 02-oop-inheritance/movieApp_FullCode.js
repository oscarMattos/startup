

//////EventEmitter Class

class EventEmitter{ 

    //Properties of constructor

    constructor( title, year, duration, friendName ) {

        this.title = title;

        this.year = year;

        this.duration = duration; 
        
    } 

    //Methodes
    
    on(){

    }
    
    emit(){
          
        return " is rolling! The best movie ever!";

    }
    
    
    off(){

        return "The movie has finished. ";

    }
    
}

//////Movie SubClass

class Movie extends EventEmitter{ 

    //Properties of constructor

    constructor( title, year, duration, friendName ) {

        super( title, year, duration, friendName );

        this.actors = []; //empty array that after will contain actors movie
        
    } 

    //Methodes

    play(){

        console.log( "The \'play\' event has been emitted on " + this.title + "." );

    }

    pause(){

        console.log( this.title + " Movie has been paused!" );

    }

    resume(){

        console.log( "Returning to " + this.title + " Movie!" );

    }

    //Social Methodes

    share( friendName ){

        console.log( friendName + " share with" + this.title + "." );

    }

    like( friendName ){

        console.log( friendName + " like  with" + this.title + "." );

    }

    //addCast Methodes: include actors into array

    addCast( actor, years ){

        this.actors.push({name: actor, age: years});

        console.log( this.actors[0] );

        console.log( this.actors[1] );

        console.log( this.actors[2] );

        console.log( this.actors[3] );

        console.log( "This is the array: " + this.actors );

        console.log( "This is the array length: " + this.actors.length );

    }

    //Extended Methodes
    
    on( data, callback ){

        super.on();
        
        if( data.toString() === "play" && callback ){

            console.log ( callback + "\nTitle: " + this.title + "." + "\nYear: " + this.year + "." + "\nDuration: " + this.duration + "min." );

        }

        else if( data.toString() !== "play" ){

            console.log("Please write a 'play' string into the first parameter of the function on");

        }

        else{

            console.log("There was an error!");
        
        }

    }
    
    
    emit(){

        console.log( this.title + super.emit() ); 

    }
    
    
    off(){

        console.log( super.off() + this.title + " rules." );

    }
    
}

//////Logger Class

class Logger{ 

    constructor(){

        this.log = "Movie Info: "; 

    }
  
}

//////Social Object

let social = {

    share: "friendName", // output: Share Iron Man with Mike Blossom

    like: "friendName"  // output: Like Iron Man with Mike Blossom

};

Object.assign(Movie, social);



//////Terminator

let terminator = new Movie( 'Terminator', 1984, 90 );

let logger = new Logger();

//Movie Info (extended method)

terminator.on('play', logger.log);

//Movie Cast

terminator.addCast("Arnold Alois Schwarzenegger", 68);

terminator.addCast("Michael Connell Biehn", 59);

terminator.addCast("Earl Boen", 70);

terminator.addCast("Linda Carroll Hamilton", 59);

//Movie Methodes

terminator.play(); // output: The 'play' event has been emitted

terminator.pause();

terminator.resume();

//Movie Extended Methodes

terminator.emit();

terminator.off();

//Movie Social

terminator.share('Oscar Mattos');

terminator.like('Oscar Mattos');

terminator.share('Esteban Lozano');

terminator.like('Agustin Ortueta');



//////Batman vs Superman

let batman = new Movie( "Batman vs Superman", 2016, 145 );

let loggerBatman = new Logger();

//Movie Info (extended method)

batman.on('play', loggerBatman.log);

//Movie Cast

batman.addCast("Benjamin Géza Affleck", 43);

batman.addCast("Henry William Dalgliesh Cavill", 32);

batman.addCast("Gal Gadot", 30);

batman.addCast("Jesse Adam Eisenberg", 32); 

//Movie Methodes

batman.play(); // output: The 'play' event has been emitted

batman.pause();

batman.resume();

//Movie Extended Methodes

batman.emit();

batman.off();

//Movie Social

batman.share('Oscar Mattos');

batman.like('Oscar Mattos');

batman.share('Esteban Lozano');

batman.like('Agustin Ortueta');



//////Mad Max

let madMax = new Movie( "Mad Max", 2015, 180 );

let loggerMadMax = new Logger();

//Movie Info (extended method)

madMax.on('play', loggerMadMax.log);

//Movie Cast

madMax.addCast("Edward Thomas Hardy", 38);

madMax.addCast("Charlize Theron", 40);

madMax.addCast("Hugh Keays Byrne", 68);

madMax.addCast("Nathan Darren Jones", 48);

//Movie Methodes

madMax.play(); // output: The 'play' event has been emitted

madMax.pause();

madMax.resume();

//Movie Extended Methodes

madMax.emit();

madMax.off();

//Movie Social

madMax.share('Oscar Mattos');

madMax.like('Oscar Mattos');

madMax.share('Esteban Lozano');

madMax.like('Agustin Ortueta');

 




































