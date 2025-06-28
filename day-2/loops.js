// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 * 
 * I: an object is our input
 * O: our Output is an array containing Obj Keys
 * C: N/A we would use the return command
 * E: N/A
 * It is difficult to place psuedocode here cause I do not want to mess up the tests. We use the Object.keys method to return all keys. and since this is a function that is meant to be reused, we are not going to know whats in the object. so thats why we use this method
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let keys = Object.keys(object);   // set a var to the grab keys method. object is our imaginary input 
  for (let i = 0; i < keys.length; i++){ // loop over the keys, again we do not know how many keys are in a given imaginary object
    console.log(keys[i]); // 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 * 
 * I: our input is a random object
 * O: return an array containing the obj's vals
 * C: There no specific instructions but I know I will need a method
 * E: We are only looking for the obj's vals, not keys
 */

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 * 
 * I: random object is our input
 * O: print all of the values 
 * C: we will use a for loop 
 * E: We have to make sure we are setting a variable to attach to our object.values method. 
 */

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    let powpow = Object.values(object);
  for (let i = 0; i < powpow.length; i++) {
    console.log(powpow[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 * I- an random object is our input
 * O- return the NUMBER of key/value pairs stored 
 * C- sounds like a new method to use
 * E
 */

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object).length;
  // I tried doing object length and thats not a method according to Mozzilla. 
  //I tried diff combos of keys.length and obj.keys && obj.length 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 * 
 * I- random obj
 * O- print obj values in reverse
 * C- reverse ; remember length -1 tells us the last in an index even if we do not know how many 
 * E- N/A
 *
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let nanaBanana = Object.values(object);
  for (let i = nanaBanana.length -1; i > -1; i--) {
    console.log(nanaBanana[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}