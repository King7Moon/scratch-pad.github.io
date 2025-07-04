// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in a string
O: Returns the length prop of the string
C
E
*/
function length(string) {
    // YOUR CODE BELOW HERE //
return string.length;

    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 *
 * I: A string is being passed as the param
 * O: Function should return the string in lowercase
 * C: I will be using a method
 * E: n/a
 */

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   return string.toLowerCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
return string.toLowerCase().split(" ").join("-");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *   
 *   ensure uppercase and lowercase can be compared equally?
 *
 * I: The data being passed is a string and string letter 
 * O: This function will return true if the letter and string match, false if they do not
 * C:
 * E: line 91 
 */

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
return string[0].toLowerCase() === char.toLowerCase();
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: Strings are passed to the function
 * O: boolean value
 * C: we are matching last letter of string to char.
 * E: lower/upper case must be compared equally
 * 
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
return string[string.length -1].toLowerCase() === char.toLowerCase();

//string.length- 1 will always give you the last letter opf any string, any length
// we are comparing two strings and the computer does not recognize L and l as the same
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * 
 * I: strings
 * O: two strings put together
 * C: n/a
 * E: must use the + operator 
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 * 
 * I: strings
 * O: strings concat. together
 * C:
 * E:
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//if (stringOne.length > stringTwo.length)
return stringOne.length > stringTwo.length ? stringOne : stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * I: Two strings
 * O: Returns 1 if the string is higher in alphabetical order than the second string or Returns 0 if they are equal
 * C:  line 199
 * E: n/a
 */

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if (stringOne < stringTwo) {
    return 1;
} if (stringOne > stringTwo) {
    return -1;
} if (stringOne === stringTwo) {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * 
 * Same concept as previous question
 */

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if (stringOne > stringTwo) {
    return 1;
} if (stringOne < stringTwo) {
    return -1;
} if (stringOne === stringTwo) {
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}