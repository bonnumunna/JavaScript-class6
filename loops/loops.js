/*
    Loops are a way of repeating program tasks a number of times until certain conditions are met. And once met, the program breaks from the loop. 
    They can be categorized as:
    1. While...loop
        while(condition){
            run code while condition is true;
        }
    2. Do...While loop
        do{
            run code, then check if it is true
        }while(condition)
    
    3. For loop
    for(start; condition){
        run code as long as condtion is true
    } 
    OR
    for(start; condtition; increment){
        run code as long as condition is true
    }
    NOTE: In all cases, there must be a way of incrementing the counter that keeps track of how many times the code has run while checking if the condition has been met.
*/

var number = 1; // start point

/*
while (number <= 10) {
    // console.log(number);
    console.log("Server guest " + number);
    console.log("Any more guest?");
    number = number + 1;
}
*/

// do {
//     console.log(number);
//     number += 1;
// } while (number <= 10);

// === FOR LOOP ===
var students = ['Great', 'David', 'Dami', 'May', 'Fej', 'Amos', 'John'];
for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}