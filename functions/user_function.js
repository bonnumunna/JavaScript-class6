/*
    ========== JAVASCRIPT FUNCTIONS ========
    Functions are named blocks of code(s) which when called, performs one or more specific actions.
    Programmers can't do without functions. 
    JavaScript as with most programming languages has two broad categories of functions:
    i.  User-defined functions
        -These are created by the user 
    ii. Inbuilt functions
        -These come with the programming language
    
    Functions enable us to repeat certain operatinos anytime without re-writing the code. All we just have to do, is call the function.
    ------- DEFINING A FUNCTION-------
    To define a function, we use the keyword, 'function', followed by the name and set of parenthesis and curly braces e.g.
    function greetPerson(){
        ...action to perform here...
    } 
    NOTE: Functions can carry parameters when defining them. This makes possible to pass in arguements that can be used while processing the function e.g.
    
    function greetPerson(name){
        ...action to perform here...
    }
    In the above code, we specified the parameter 'name' which will used inside the function.
    NOTE: A function will NEVER run until it is called.
    ------- CALLING A FUNCTION -------
    To call a function, simply write the name of the function followed by a parenthesis. If the function was defined with parameter, then you will need to pass in an arguement representing the parameter.
*/

function greetPerson(name = "person") {
    console.log("Good afternoon " + name);
}
// calling the above function
// greetPerson("Mr. Jones");

function areaOfTriangle(base, height) {
    let area = 0.5 * base * height;
    // console.log(area);
    return area;
}
var answer = areaOfTriangle(9, 12);
// console.log("The answer is " + answer);


// More on Functions
/*
    Write a function called geometry that will accept shape, side 1, side 2 and side 3 and be able to calculate the area of the geometrical figure accordingly.
    Allowed shapes are: triangle, rectangle, trapezium and circle
*/
function geometry(shape, side1, side2 = 1, side3 = 1) {
    switch (shape) {
        case "triangle":
            var area = 0.5 * side1 * side2;
            return area;
            break;
        case "rectangle":
            var area = side1 * side2;
            return area;
            break;
        case "trapezium":
            var area = 0.5 * (side1 + side2) * side3;
            return area;
            break;
        case "circle":
            var area = (22 / 7) * side1;
            return area;
            break;
        default:
            return "Error... wrong input.";
    }
}
var result = geometry("square", 12)
    // console.log(result);


/*
 ============ FORMS OF FUNCTIONS ==========
    1. Function literal
    2. Function variable
    3. Anonymous/Callback functions
    4. Self-calling function
*/

// Function literal
function getDetails() {
    return "Username: adambecker224 \n" +
        "Password: admin@123";
}
// Function variable
let payFees = function(amount) {
    return "You have paid N" + amount;
}

// Anonymous/Callback function
/*
    This type are located inside of a method or function.
*/
setInterval(() => {
    console.log("JavaScript is interesting");
}, 3000);

// setTimeout(function() {
//     console.log("JavaScript is interesting");
// }, 3000);

// Example of Selfcalling function
(function() {
    console.log("This will call itself");
})();