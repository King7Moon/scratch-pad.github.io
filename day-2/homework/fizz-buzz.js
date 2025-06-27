// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * 
 * my notes
 * first we set the thing to count to 100 then we have to check if they are mults of 3 and 5 first. if you did just 3, it would give the wrong output. 
*/

/**
 * I: integers 1 to 100
 * O: returns multiples of 3 as "Fizz", 5 as "Buzz", mults of 5 & 3 as "FizzBuzz", and nums in between from 1 to 100
 * C: use a for loop
 * E:
 */


function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
for (var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}