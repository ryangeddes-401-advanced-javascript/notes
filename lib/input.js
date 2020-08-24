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
    this.action = this.getActions(args);
    this.payloads = this.getPayloads(args);
    this.category = this.getCategory(args);
  }

  getKeys(args = {}){
    let actions = [];
    let objKeys = Object.keys(args);
    objKeys.forEach( action => actions.push(action));
    return actions;
  }

  getCategory(args = {}){
    let categoryKey;
    let actions = this.getKeys(args);
    let validateCat = /category|\bc\b/i;
    actions.forEach( (action) =>{
      if (validateCat.test(action)){
        categoryKey = action;
      }
    });
    let categoryPayload = args[categoryKey];
    return (categoryPayload ? categoryPayload : 'general');
    //return ( validAction.test(userInput) ? userInput : 'syntaxerror');
  }

  getActions(args = {}){
    let validAction = /add|\ba\b|delete|\bd\b|list|\bl\b/i;
    let userInput = Object.keys(args)[1];
    //let actions = this.getKeys(args);
    //console.log('line 44 Actions', actions);
    //return actions;
    return ( validAction.test(userInput) ? userInput : 'syntaxerror');
  }

  getPayloads(args = {}){
    //let userInput = Object.keys(args)[1];
    let actions = this.getKeys(args);
    let payloads = [];
    actions.forEach( action => payloads.push(args[action]));
    //let payload = args[userInput];
    return payloads;
    //return payload ? payload : 'payloadempty';
  }


}



module.exports = Input;