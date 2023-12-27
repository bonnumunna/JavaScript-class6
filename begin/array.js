/*
    ============== ARRAYS IN JS ===============
    Arrays are a way of storing multiple values under a single variable name.
    There are two ways of defining arrays in JavaScript:
    1. var items = ['toy','glass','cup'];
    2. var items = new Array('toy','glass','cup');
*/

let cars = ['Volvo', 'Mercedes', 'Ford', 'Audi'];

/*
    There are various operations we can perform on an array:
    i. Fetching individual elements
    ii. Determining the length
    iii. Adding to the array.
    iv. Removing from an array

    NOTE: JavaScript arrays can contain any type of data. It is not a strongly typed language like Java.

    To access an array, we specify the index location of the element we want to access. This count starts from 0.
*/

// Accessing an element of the array
// console.log(cars[0]);

// Checking the length of array
// console.log(cars.length);

// Removing and checking the last of array
// var lastCar = cars.pop();
// console.log(lastCar);
// Now let's check the original array
// console.log(cars); // It is without the last car

// Adding to an array
cars.push('Mazda', 'Lexus')
    // Check new cars
    // console.log(cars);

let values = new Array('Kola', 84, true, null, ['sun', 'star'], 4.15);
// console.log(values[4][1]);

// Arrays of Array (Multidimensional Array)
const matrix = [
    [35, 38, 41],
    [95, 38, 82, 45, 98],
    [54, 78, 31],
    [17, 28, 72, 19]
];

// console.log(matrix[0][2]);

// Looping through Multidimensional

// for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
//     console.log("===========")
// }


var js_students = ['Fej', 'May', 'Kobi', 'Edafe', 'Gabriel', 'Kelvin', 'Anoiniting'];

// Skipping an element of an array using loop -Continue statement 
for (var i = 0; i < js_students.length; i++) {
    // State condition to skip an item
    if (js_students[i] == "Gabriel") {
        continue; // Skip that element
    }
    // console.log(js_students[i]);
}

// Stopping loop operation using Break statement 
for (var i = 0; i < js_students.length; i++) {
    // State condition to skip an item
    if (js_students[i] == "Gabriel") {
        break; // breaks the loop once reached
    }
    console.log(js_students[i]);
}