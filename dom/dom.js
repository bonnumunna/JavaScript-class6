/*
    =========== DOM Manipulation ==========
    One of the most useful aspects of JavaScript programming is the manipulation of the Document Object Model (DOM).
    This is about the most interesting part. The ability to create, change and restructure components of web page that originally don't exist or exists, using JavaScript code.
*/
// Exposing the HTML DOM Content
// console.dir(document);
// console.log(document);

// console.dir(document.all);


/*
It is a good practice when performing DOM manipulations to first allow the HTML document (DOM) to load before interacting with it. There are different ways of achieving this:
An easy way will be to include the js file just before the closing body tag. Another way (if the JS script is added at the head section) is to include the defer attribute
*/
// SELECTING DOM ELEMENTS
/*
    The most common ways of getting hold of HTML elements is with the following document object methods.

    document.getElementsByTagName();
    document.getElementById();
    document.getElementsByClassName();
    document.querySelector();
    document.querySelectorAll();
*/

var h1 = document.getElementsByTagName('h1');
// console.log(h1);

var li = document.getElementsByClassName('list-item');
// console.log(li[3]);

var heading = document.getElementById('sub-heading');
// console.log(heading);

// Selecting a class with querySelector
// This will select only the first occurence
var classElement = document.querySelector('.list-item');
// console.log(classElement);

// This will select every occurence
var classElements = document.querySelectorAll('.list-item');
// console.log(classElements);