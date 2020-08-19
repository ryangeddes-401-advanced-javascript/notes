// notes.js will take a command + it’s data and execute it
// add, delete, list

// Exports a constructor function
// Has a prototype method called execute() that executes the correct operation, given the above object
// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…
// Write a prototype method called add() that will create an object representing a note
//(with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

'use strict';

let Notes = function (input) {
  this.command = input.action;
  this.payload = input.payload;
};
  

Notes.prototype.execute = function (input) {
  //if input.action is add, run add
  const command = this.command;
  if (command === 'add'|| command ==='a'){
    return this.add(input);
  }
  //if it's delete, run delete
  else if (command === 'd'|| command === 'delete'){
    return this.delete(input);
  }
  //if it's list, run list
  else if (command === 'list'|| command ==='l'){
    return this.list(input); 
  }
  //if it's syntaxerror, run error handler
  else{
    return 'Valid commands are add, delete, or list';
  }

};

Notes.prototype.add = function (input) {
  return (this.payload === 'payloadempty' ? 'No data entered into note' :`You used the add method with the following note: ${this.payload}`);
};

Notes.prototype.delete = function (input) {
  return (this.payload === 'payloadempty' ? 'No data entered into note' :`You used the delete method with the following note: ${this.payload}`);
};

Notes.prototype.list = function (args = {}) {
  return `I haven't added any logic for list yet, but you hit this somehow.`;
};



module.exports = Notes;