// ========INTRODUCTION TO JAVASCRIPT ==========
/*
    BASIC GUIDING RULES FOR WRITING JS PRGORAMS
    - GENERAL
    1. Always end your codes with semi-colon (;)
    2. Semi-colon is the logical end of a line 
        of code
    3. JavaScript is lenient to ignore absence 
        of ; at the end of a line of code. But if two separate codes are on same line, differentiate them with a ;

    4. Almost everything in JavaScript is an object.
    
    -VARIABLES
        These are named memory locations used to store values used in your program.

    1. Variables are declared by using key words
        such as 'var', 'let' and 'const'.
        NOTE: 'const' is meant for what will not change in value while the program is running.
        'var' and 'let' are basically the same, only for their scope and ability to reassign values to such variables

    2. Variables are case sensitive in JS. I.e. 
        var firstName, var FirstName, var firstname are all different variables.

        In declaring variables, always beging with lowercase. You may use uppercase for constants, though strongly discouraged. The following format may be used:
        i.      firstname (all lowercase)
        ii.     firstName (carmel case)
        iii.    first_name (underscore)
        iv.     FirstName (Only use for class names)
    
    3. Variables can hold data of various types:
        i.      Number -integer
        ii.     Number -float (decimal)
        iii.    Boolean (true or false)
        iv.     String
                Anything between single or double quotes is a string.
                e.g. "John Doe", 'Carlos Slim'
                are both strings.
        v.      Array (set of values)
        vi.     Null (Nothing)
        vii.    Object
        viii.   Resource (some path locations)

    NOTE: Variables are not strongly typed, unlike Java. Meaning, a variable declared as var can be reassigned another value of different data type.

    To assign a value to a variable, we use the = sign. e.g. 
    var age = 3;
    Meaning, the variable age, holds the integer value, 3. So we can use age in our program instead writing 3.

    - BRACKETS IN PROGRAMMING -
    1. () - Parenthesis
    2. <> - Angle brackets
    3. [] - Bracket (square bracket)
    4. {} - Curly brace

*/

// VARIABLES

var firstName = "John"; // String
var lastName = "Decker";
var age = 54; //integer
var height = 1.54 //float(decimal)
var isMarried = true;
var bloodGroup = null;

// We output things on the console like this:
// console.log(firstName);

// CONCATENATION -Joining variables with string text.
/*
    Use + sign to concatenate as shown below:
*/
var fullName = firstName + " " + lastName;
var text = "My name is " + fullName + " I am " + age + " years old. My height is " + height + "m";
// console.log(bloodGroup);

text = "They're coming today from Lagos";
text = 'They\'re just coming right now';

var guest = "Mr. Jones Schneider";
var guestLocation = "Hamburg, Germany";
var day = "next week Friday";
var guestLocation = guest + " is coming from " + guestLocation + " by " + day;

console.log(guestLocation);

/* ========= OPERATORS ===========
    Operators are symbols used to manipulate, combine and mix variables with other variables or values or numbers
    1. ASSIGNMENT OPERATOR
        i. = Used to assign values to variables
            e.g var age = 17.
    2. ARITHMETIC OPERATOR
        i. +    Add values (also used to concatenate)
        ii. -   Subtracton
        iii. *  Multiplication
        iv. /   Division
        v. %    Modulus - Remainder after   division

    3. ARITTHMETIC-ASSIGNMENT OPERATOR
        i. += Add and assign
        ii. -= Subtract and assign
        iii. *= Multiply and assign
        iv. /= Divide and assign
        v. %= Modulus and assign
    4. COMPARISON OPERATOR
        i. < Less than
        ii. > Greater than
        iii. <= Less than or equal to
        iv. >= Greater than or equal to
        v. == Equal to
        vi. != Not equal to
        vii. === Identical (in value and type)
    5. LOGICAL OPERATOR
        i. && Logical AND
        ii. ! Logical NOT
        iii. || Logical OR

    CONTROL FLOW 
    These are program declaratives that help to control the flow of programs based on logical decisions made.
    1. if...else
        if(logical decision){
            run if true
        }else{
            run if false
        }
    2. switch...case
*/


var num1 = 5;
var num2 = '5';
/*
if (num1 == num2) {
    console.log(num1 + " is equal to " + num2);
} else {
    console.log(num1 + " is not equal to " + num2);
}

if (num1 === num2) {
    console.log(num1 + " is identical to " + num2);
} else {
    console.log(num1 + " is not identical to " + num2);
}

// Testing For Two Conditions
var firstname = "Alex";
var lastname = "Bowman";
if (firstname == "Alex" && lastname == "Branson") {
    console.log('This is the man')
} else {
    // console.log('This is not the man');
    if (firstname != "Alex") {
        console.log("Please check firstname");
    } else {
        console.log("Please check lastname");
    }
}
*/

var day = "Friday";

if (day == "Monday") {
    console.log("We don't have class");
} else if (day == 'Tuesday') {
    console.log("We have class");
} else if (day == 'Wednesday') {
    console.log("We don't have class");
} else if (day == 'Thursday') {
    console.log("We have class");
} else {
    console.log("That should be weekend");
}

/*
    SWITCH CASE
    Switch case is an advancement over else..if statements. The syntax is:
    switch(condition){
        case value1:
            run code
            break;
        case value2:
            run code
            break;
        .
        .
        .
        default:
            run code
    }
*/

var fruit = "Pineapple";
switch (fruit) {
    case "Orange":
        console.log("Orange is sweet");
        break;
    case "Apple":
        console.log("Apple is good for the heart")
        break;
    case "Pear":
        console.log("Pear is good for the heart and skin");
        break;
    case "Carrot":
        console.log("Carrot is good for the skin and eye");
        break;
    default:
        console.log("We don't have that fruit");
}