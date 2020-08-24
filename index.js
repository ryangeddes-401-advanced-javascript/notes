'use strict';


const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);
const output = notes.execute();

console.log(`this is output: ${output}`);


