'use strict';
//3rd Party Libraries
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/notesy';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const MongoNote = require('./model/notes-schema');
const NoteCollection = require('./model/notes-collection.js');
const { collection } = require('./model/notes-schema');


class Notes {

  constructor(input){
    this.command = input.action;
    this.payloads = input.payloads;
    this.category = input.category;
  }
  

  validate (payload){
    return payload ? payload : 'payloadempty';
  }

  execute (input) {
    let command = this.command;

    if (command === 'add'|| command ==='a'){
      return this.add(command);
    }

    else if (command === 'd'|| command === 'delete'){
      return this.delete(input);
    }

    else if (command === 'list'|| command ==='l'){
      return this.list(command); 
    }

    else if (command === 'category'|| command ==='c'){
      return this.category(command); 
    }

    else{
      return 'Valid commands are add or list followed by category, or delete followed by ID number';
    }
  }
  
   
  async add (command) {
    // let payload = this.payloads[1];
    // let category = this.category;
    try{
      let note = {
        text: this.payloads[1],
        category: this.category,
      };
      let collectionNote = new NoteCollection();
      //let addNote = new MongoNote(note);
      let addedNote = await collectionNote.create(note);
      console.log('added Note', addedNote);
      console.log(`Note saved under category ${addedNote.category}: ${addedNote.text}`);
    } catch (e) {
      console.error(e);
    }
    //return (payload === 'payloadempty' ? 'No data entered into note' :`You used the add method for category: ${category} with the following note: ${payload}`);
  }

  async delete (command) {
    let id = this.payloads[1]; 
    console.log('You deleted note with id#: ', id);
    let collection = new NoteCollection();
    await collection.delete(id);
    //await MongoNote.findByIdAndRemove(id);
    //return (this.payload === 'payloadempty' ? 'No data entered into note' :`You used the delete method with the following note: ${this.payload}`);
  }
 
  async list (command) {
    let category = this.payloads[2];
    if (category){
      try {
        let collection = new NoteCollection();
        let allNotes = await collection.read(category);
        //let allNotes = await MongoNote.find({});
        allNotes.forEach( note =>{
          let text = note.text;
          let id = note._id;
          let category = note.category;
          console.log(text);
          console.log(`Category ${category} ID ${id}`);
          console.log('----------------------------------------------------------------');
        });
      } catch (e) {
        console.error(e);
      }
    }else {
      try {
        let collection = new NoteCollection();
        let searchNotes = await collection.read(category);
        //let searchNotes = await MongoNote.find({category});
        searchNotes.forEach( note =>{
          let text = note.text;
          let id = note._id;
          let category = note.category;
          console.log(text);
          console.log(`Category ${category} ID ${id}`);
          console.log('----------------------------------------------------------------');
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
}

module.exports = Notes;