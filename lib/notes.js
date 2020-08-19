'use strict';

class Notes {

  constructor(input){
    this.command = input.action;
    this.payload = input.payload;
  }
  

  execute (input) {
    const command = this.command;
    if (command === 'add'|| command ==='a'){
      return this.add(input);
    }

    else if (command === 'd'|| command === 'delete'){
      return this.delete(input);
    }

    else if (command === 'list'|| command ==='l'){
      return this.list(input); 
    }

    else{
      return 'Valid commands are add, delete, or list';
    }
  }

  add (input) {
    return (this.payload === 'payloadempty' ? 'No data entered into note' :`You used the add method with the following note: ${this.payload}`);
  }

  delete (input) {
    return (this.payload === 'payloadempty' ? 'No data entered into note' :`You used the delete method with the following note: ${this.payload}`);
  }

  list (args = {}) {
    return `I haven't added any logic for list yet, but you hit this somehow.`;
  }
}

module.exports = Notes;