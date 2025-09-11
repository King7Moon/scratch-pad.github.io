// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 * 
 * 
 * I: string or a number
 * O: return a function that tests whether a rando value is greater than the base
 * C: function within a function
 * E
 */
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
   return function moreBase(value){
    return value > base;
   }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function (value){ //naming the function here does not really matter unless you would like to call it outside of this higher function
    return value < base; // anon function example!!!
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 * 
 * 
 * I: A single character
 * O: A func that tells if first letter of string matches single char
 * C: function needs to be case insensitive.
 * E: /\ possibly regex or to.UpperCase() or lower. we do not want empty strings
 */
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
return function (string){ // return anon func with string as param
  return string.length > 0 && string[0].toLowerCase() // returns a non empty string to lowercase
  // and grabs the first letter also converting it then compares them A == APPLE 
  === startsWith.toLowerCase();
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
return function (string) {
  return string.length > 0 // 0 represents empty strings
  && string[string.length - 1].toLowerCase() // the last string
  === endsWith.toLowerCase();
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples:
 * 
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 * 
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 */
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //

  // YOUR CODE ABOVE HERE //
}


/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * examples:
 * 
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 * 
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */


function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //

  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
