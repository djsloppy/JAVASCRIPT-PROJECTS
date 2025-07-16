// Math Operators Assignment

// Addition Operation
function addition() {
    var total = (15 + 32); // Adds two numbers together
    return "15 + 32 = " + total; // Returns the ouput to the "Math" ID where called
}

// Subtraction Operation
function subtraction() {
    var total = 30 - 15; // Subtracts two numbers
    return "30 - 15 = " + total; // Returns the ouput to the "Math" ID where called
}

// Multiplication Operation
function mulitplication() {
    var total = 120 * 4; // Multiplys two numbers
    return "120 * 4 = " + total; // Returns the ouput to the "Math" ID where called
}

// Division Operation
function division() {
    var total = 90 / 38; // Divides two numbers
    return "90 / 38 = " + total; // Returns the ouput to the "Math" ID where called
}

// Multiple Math Operations
function multiple() {
    var total = (10 * 5) - (3 + 20) / 2; // Uses multiple math operations
    return "(10 * 5) - (3 + 20) / 2 = " + total;  // Returns the ouput to the "Math" ID where called
}

// Modulus (Remainder) Operation
function modulus() {
    var total = 20 % 3; // Uses the Modulus operation to return the remainder of two divided numbers
    return "20 % 3 = " + total + " This means that there is " + total + " remaining after dividing 20 by 3."; // Returns the ouput to the "Math" ID where called
}

// Negation Operation
function negate() {
    var total = 10; // Sets a number
    return "Using the negation operation on " + total + " will give us " + -total; // Returns the negative of the number to the "Math" ID where called
}

// Increment Operation
function increm() {
    var total = 5; // Set a number
    total++; // Increases that number by 1
    return "I can increase 5 using ++ and will give us " + (total); // Returns the negative of the number to the "Math" ID where called
}

// Decrease Operation
function decres() {
    var total = 5; // Sets a number
    total--; // Decreases that number by one
    return "I can decrease 5 using -- and will give us " + (total); // Returns the negative of the number to the "Math" ID where called
}

// Random number
function rand() {
    var x = Math.round((Math.random() * 50)); // Sets a random number that is rounded to the nearest whole number
    return "I'm  thinking of a number between 1 and 50 and that number is: " + x; // Returns the negative of the number to the "Math" ID where called
}