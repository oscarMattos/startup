
//////EventEmitter Class

export class EventEmitter{ 

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



/* export EventEmitter; */