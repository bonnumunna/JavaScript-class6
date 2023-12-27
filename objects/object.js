/*
    ======== JAVASCRIPT OBJECTS ========
    The JavaScript programming language is structured such that almost everything is an object. From the moment you create a variable, an object is formed. That variable has properties and (maybe) a method (i.e. function) associated with it. These can be accessed using the dot notation. Hence we have so many things like document.body.style, window.innerWidth etc.

    Aside in-built objects, programmers can also create their own objects as shown below:
*/
let person = {
    name: "Adam Becker",
    age: 48,
    height: 1.42,
    gender: "male",
    isMarried: true,
    children: ['Volta', 'Amanda', 'Zedd'],
    occupation: function() {
        return "I am an accountant";
    },
    address: {
        country: "USA",
        state: "Texa",
        city: "Boston",
        street: "4810A St. Palmo, port Elizabeth"
    }
}

// console.log(person.name);
// console.log(person.isMarried);
// console.log(person.children[0]);
// console.log(person.occupation());
// console.log(person.address.state);

// ACCESSING VARIABLES AS OBJECTS - Properties & Methods
// String Object
var word1 = "international";

// Returns the length of a string
console.log(word1.length);
// Returns a upper case of word
console.log(word1.toUpperCase());
// Returns character at specified location
console.log(word1.charAt(3));
// Returns a replacement string
console.log(word1.replace('t', 'z'));
// Returns a part of the main string
console.log(word1.substr(2, 5));

// Array As Objects
var words = ['able', 'barbeque', 'compliment', 'daze'];

// Returns length of an array
console.log(words.length);
// Removes and returns an array last element
console.log(words.pop());
// Check length
console.log(words.length);
// console.log(words);

// To add elements to an array we use push() method. 
words[3] = "amalgamation";
words[4] = "victory";
words.push("glory");
words.push("conservative");
// console.log(words);
words.reverse();
// console.log(words);

// Looping through an array using forEach method
words.forEach(function(x) {
    // console.log(x);
});
// Same as this:
for (var i = 0; i < words.length; i++) {
    // console.log(words[i]);
}
/*
    JS Higher Order Functions
    filter();
    map();
    sort();
    reduce();
    Read them up and learn to use them
*/

// Date Object
/*
    These are used to handle objects partaining to dates and time. 
    NOTE: All time calculation is based on UTC - Coordinated Universal Time (Jan 1st 1970)
*/
var date = new Date();
// Get current year in full
console.log(date.getFullYear());
// Get current month in number
console.log(date.getMonth());
// Get current calendar date in number
console.log(date.getDate());
// Get day of the week in number
console.log(date.getDay());

// Math Object
// Square root
console.log(Math.sqrt(25));
// Raise to power
console.log(Math.pow(5, 3));
// Random number between 0 and 1
console.log(Math.random());
// Returns whole number part of a number
console.log(Math.floor(3.723));
// Random number between 0 and 100
console.log(Math.floor(Math.random() * 100));
// Returns absolute values
console.log(Math.abs(-3.823));