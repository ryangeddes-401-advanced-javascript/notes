'use strict';

const schema = require('./notes-schema');

class NoteCollection {

  constructor() {
  }
  
  // GET one or more records
  // read() {} <= CRUD
  // get() {} <= ReST
  read(category) {
    if (category) {
      return schema.find({category});
    }
    else {
      return schema.find({});
    }
  }
  
  // Add a new record to the database
  // create() { }
  create(record) {
    // client.query('INSERT INTO ....')
    let newRecord = new schema(record);
    return newRecord.save();
  }
  
  delete(id){
    return schema.findByIdAndRemove(id);
  }
}
  
module.exports = NoteCollection;