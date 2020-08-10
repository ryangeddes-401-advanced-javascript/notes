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
//
let Input = function () {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(args);
  this.payload = this.getPayload(args);
};

//there is a better way to do this... I think I'll want to split up add delete list into separate functions 
//instead of throwing them all into getaction but for now this works.

Input.prototype.getAction = function (args = {}) {
  //remember regex? lol. i stands for case insensitive.
  let validAction = /add|\ba\b|delete|\bd\b/i;
  //in the arg object the KEY is where we find the user's action input, the VALUE contains the string.
  let userInput = Object.keys(args)[1];
  //ternary operator syntax refresher at: https://www.geeksforgeeks.org/ternary-operator-question-mark-and-colon-in-javascript/
  return ( validAction.test(userInput) ? userInput : 'syntaxerror');
};

Input.prototype.getPayload = function (args = {}) {
  //let userInput = Object.keys(args)[1];
  //I should be able to use just args.userInput below but it's not working sooooo I'm going to do it quick and dirty with ||
  //let payload = args.userInput
  let payload = args.a||args.add||args.d||args.delete;
  return payload ? payload : 'payloadempty';
};


module.exports = Input;