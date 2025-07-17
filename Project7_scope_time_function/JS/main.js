// *** Local and Global Variable Assignment ***

// Global variable
var x = 15; // Sets global variable

function counting() { // Uses global variable --x--
    var y = 10; // Sets local variable
    document.getElementById("glo_var").innerHTML = (x + " + " + y + " = " + (x + y)); // Display data based on the function --counting-- to the ID where called 
}

// Local variable

// This function will not work as it is calling a local variable --y-- from the previous function and cannot access it
function countdown() {
    var z = 25; // Sets local variable
    document.getElementById("loc_var").innerHTML = (z + " - " + y + " = " + (z - y)); // Display info to console as there is an error
}

// This function will use local variables correctly
function addition() {
    var z = 25; // Sets local variable
    var y = 10; // Sets local variable
    document.getElementById("local_var").innerHTML = (z + " - " + y + " = " + (z - y)); // Display data based on the function --counting-- to the ID where called
}

// *** Method assignment

// This function will use an --if statement--
function gethour() {
    if (new Date().getHours() > 12) { // Using an if statement; Date().getHours() is getting the current hour and checking to see if it is past noon
        document.getElementById("method").innerHTML = "Good afternoon!!"; // Display data based on the function --gethour-- to the ID where called
    }
}

// *** If statement assignment ***

// This function will use an --if statement--
function santa() {
    var x = new Date() // Sets x to local variable of today's date
    if (x.getMonth() == 11) { // Checks to see if today's month is equal to 11 which is actually December
        document.getElementById("ifcheck").innerHTML = "Santa will be here later this month!!"; // Display data based on the function --santa-- to the ID where called
    } else {
        document.getElementById("ifcheck").innerHTML = "Santa will be here in " + ((11 - x.getMonth())) + " month(s)!!"; // Display data based on the function --gethour-- to the ID where called
    }
}

// *** Else assignment ***
function renting() {
    Age = document.getElementById("age").value; // Sets variable based on input of user
    if (Age >= 25) { // Checks to see if age is equal or greater than 25
        Rent = "You can rent a car!"; // Sets --Rent-- variable
    } else { // Conditional statement not met
        Rent = "You are too young to rent, you will have to hitchhike!"; // Sets --Rent-- variable
    }
    document.getElementById("How_old").innerHTML = Rent; // Display data based on the function --renting-- to the ID where called
}

// *** Else if statements
function Time_function(){
    var Time = new Date().getHours(); // sets variable
    var Reply; // declares variable
    if (Time < 12 == Time > 0){ // checks the condition
        Reply = "It is morning time!"; // sets variable
    }
    else if (Time >= 12 == Time < 18){ //Doesn't meet first condition
        Reply = "It is afternoon."; // sets variable
    }
    else { // if no previous condition met
        Reply = "It is evening time."; // sets variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Display data based on the function --Time_function-- to the ID where called
}