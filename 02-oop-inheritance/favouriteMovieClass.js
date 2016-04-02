

//////Actor Class for my favourite movie: "El secreto de sus ojos"

class Actor{

    //Properties of constructor

    constructor(){


        this.actors = [];

    }

    //Methodes  

    addCast( actor, years ){

        
        this.actors.push({name: actor, age: years});

        console.log( this.actors[0] );

        console.log( this.actors[1] );

        console.log( this.actors[2] );

        console.log( this.actors[3] );

        console.log( this.actors );

        console.log( this.actors.length );

    }


}

let actor = new Actor;

actor.addCast("Guillermo Francella", 61);

actor.addCast("Ricardo Darín", 59);

actor.addCast("Soledad Villamil", 46);

actor.addCast("Pablo Rago", 43);


