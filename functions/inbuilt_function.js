/* 
    ======== IN-BUILT FUNCTION ====== 
    We have learnt how to define functions in JavaScript, however, there are a few in-built functions supported in the language that enables programmers to perform certain tasks. Some of them are:
    isNaN()
    parseInt()
    eval()
    prompt()
    confirm()
    alert()
    parseFloat()
*/

var value = "23";
if (isNaN(value)) {
    console.log(true);
} else {
    console.log(false);
}

// var answer = confirm("Do you want to exit? ");
// if (answer) {
//     alert("You exited");
// } else {
//     alert("You canceled out");
// }
var name = prompt("Enter your name");
alert("Your name is " + name);

var number = "3.819";
console.log(parseInt(number));

console.log(parseFloat(number));