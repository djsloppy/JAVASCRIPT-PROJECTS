// Math Operators Assignment

// Addition Operation
function addition() {
    var total = (15 + 32);
    return "15 + 32 = " + total;
}

// Subtraction Operation
function subtraction() {
    var total = 30 - 15;
    return "30 - 15 = " + total;
}

// Multiplication Operation
function mulitplication() {
    var total = 120 * 4;
    return "120 * 4 = " + total;
}

// Division Operation
function division() {
    var total = 90 / 38;
    return "90 / 38 = " + total;
}

// Multiple Math Operations
function multiple() {
    var total = (10 * 5) - (3 + 20) / 2;
    return "(10 * 5) - (3 + 20) / 2 = " + total;
}

// Modulus (Remainder) Operation
function modulus() {
    var total = 20 % 3;
    return "20 % 3 = " + total + " This means that there is " + total + " remaining after dividing 20 by 3.";
}

// Negation Operation
function negate() {
    var total = 10;
    return "Using the negation operation on " + total + " will give us " + -total;
}

// Increment Operation
function increm() {
    var total = 5;
    total++;
    return "I can increase 5 using ++ and will give us " + (total);
}

// Decrease Operation
function decres() {
    var total = 5;
    total--;
    return "I can decrease 5 using -- and will give us " + (total);
}

// Random number
function rand() {
    var x = Math.round((Math.random() * 50));
    return "I'm  thinking of a number between 1 and 50 and that number is: " + x;
}