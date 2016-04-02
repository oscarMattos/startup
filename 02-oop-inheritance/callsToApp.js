
import classEventEmitter from './classEventEmitter.js';

import classLogger from './classLogger.js';

import social from './objectSocial.js';


Object.assign(Movie, social); //Assign object to Movie class


/************** Call to Movies **************/ 

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



