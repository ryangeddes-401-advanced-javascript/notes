'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'testing123',
  };
});

const Input = require('../lib/input.js');


describe('Input module', () => {
// Given invalid input:
// The Class’ valid() method returns false
  it('getAction() defaults to "syntaxerror" when no method is specified', () => {
    let options = new Input();
    expect(options.getAction()).toEqual('syntaxerror');
  });

  it('getPayload() defaults to "payloadempty" when no input is entered', () => {
    let options = new Input();
    expect(options.getPayload()).toEqual('payloadempty');
  });

//Given good input:
// The Class’ valid() method returns true

  it('getAction returns a valid method when one is entered', () => {
    let options = new Input();
    //NOTE this will likely fail bc I need to check syntax of obj passed into getAction function
    expect(options.getAction('add')).toEqual('add');
    expect(options.getAction('a')).toEqual('add');
    expect(options.getAction('delete')).toEqual('delete');
    expect(options.getAction('d')).toEqual('delete');
  });

// The input module creates a new instance with both action and payload properties

  it('getAction returns a valid method when one is entered', () => {
    let options = new Input();
    let input = 'add';
    expect(options.getAction(input)).toEqual(input);
  });

});

//Given good input:
// The Class’ valid() method returns true
// The input module creates a new instance with both action and payload properties
// Given invalid input:
// The Class’ valid() method returns false
//HINT: You will need to mock the minimist library so you can fake a user providing good and bad input



describe('Notes module', () => {



});

//For the notes module tests, you will need to assert the following:
// Nothing is logged to the console if there was no command given
// If the command (add) and data (the note) were both valid, assert that the console shows the output.
// HINT: You will need to use a spy to check that console.log was properly called








//Scratch Work Below:



describe('Input Module', () => {

  it('getMethod() defaults to "GET" when no method is specified', () => {
    let options = new Input();
    expect(options.getMethod()).toEqual('GET');
  });
  
  it('getMethod() defaults to "GET" when an invalid method is specified', () => {
    let options = new Input();
    expect(options.getMethod('foo')).toEqual('GET');
  });
  
  it('getMethod() uses a properly specified method, when specified', () => {
    let options = new Input();
    expect(options.getMethod('get')).toEqual('get');
    expect(options.getMethod('post')).toEqual('post');
    expect(options.getMethod('put')).toEqual('put');
    expect(options.getMethod('delete')).toEqual('delete');
    expect(options.getMethod('patch')).toEqual('patch');
  });
  
  it('getURL() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getURL()).toBeUndefined();
  });
  
  it('getURL() returns undefined if an invalid URL is presented', () => {
    let options = new Input();
    expect(options.getURL('foobar')).toBeUndefined();
  });
  
  it('getURL() returns localhost if only a :port presented', () => {
    let options = new Input();
    expect(options.getURL(':3000')).toEqual('http://localhost:3000');
  });
  
  it('getURL() returns a properly formatted URL when presented', () => {
    let options = new Input();
    let url = 'http://www.foo.com';
    expect(options.getURL(url)).toEqual(url);
  });
  
  it('getBody() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getBody()).toBeUndefined();
  });
  
  it('getBody() returns JSON if an stringified object is presented', () => {
    let options = new Input();
    let obj = { name: 'john' };
    let str = JSON.stringify(obj);
    expect(options.getBody(str)).toEqual(obj);
  });
  
  it('getBody() returns a sring if a non-object is presented', () => {
    let options = new Input();
    let str = 'This is a test';
    expect(options.getBody(str)).toEqual(str);
  });
  
  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });
  
  it('valid() rejects an invalid object', () => {
    let options = new Input();
    // force a bad url for the test
    options.url = undefined;
    expect(options.valid()).toBeFalsy();
  });
  
});
  