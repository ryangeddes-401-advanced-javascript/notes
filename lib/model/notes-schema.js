'use strict';

const mongoose = require('mongoose');

const mongoNote = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('mongoNote', mongoNote);

/*
foodDefinition.pre('validate', function () {
  // `this` is ... the current record
  this.type = this.type.toLowerCase();
})

foodDefinition.pre('save', function () {
  // `this` is ... the current record
  this.calories = this.calories * 100;
})

foodDefinition.post('save', function () {
  // `this` is ... the current record
  // if (this.inStock <= 0) {
  //   superagent.get('http://pokeapi.co/api/v1/pokemon')
  //   then(results => console.log(results.body));
  // }
  // console.log('POST SAVE', this);
})

*/