// input.js will:
// Parse the users’ input
// Map that to a command (i.e. add, delete)
// Identify the data to give to the command (i.e. the note text)


// Exports a constructor function
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// On instantiation, evaluates and validates the input
// Is the command (i.e. ‘–add’) a valid command
// Is there data associated with the command
// Returns an instance containing the action to perform and the payload for the action
// for example:

'use strict';

const minimist = require('minimist');

class Input {

  constructor(){
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.getPayload(args);
  }

  getAction(args = {}){
    let validAction = /add|\ba\b|delete|\bd\b/i;
    let userInput = Object.keys(args)[1];
    return ( validAction.test(userInput) ? userInput : 'syntaxerror');
  }

  getPayload(args = {}){
    let userInput = Object.keys(args)[1];
    let payload = args[userInput];
    return payload ? payload : 'payloadempty';
  }


}



module.exports = Input;