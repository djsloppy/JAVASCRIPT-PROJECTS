// *** CONCAT() METHOD ASSIGNMENT ***

function connect() {
    var line1 = "Board games are fun."; // Sets the variable
    var line2 = " They can teach many things."; // Sets the variable
    var line3 = " They teach sportsmanship and thinking"; // Sets the variable
    var whole = line1.concat(line2, line3); // Sets the variable with concatenation
    document.getElementById("concatenate").innerHTML = whole; // Displays output to the called element
}

// *** SLICE() METHOD ***

function split() {
    var Sentence = "All work and no pizza makes me hungry."; // Sets the variable
    var Section = Sentence.slice(13, 21); // Sets the variable with slicing the "array" or string of the called portion
    document.getElementById("slice").innerHTML = Section // Displays output to the called element
}

// *** MORE METHODS CHALLENGE *** 
let sentence = "In the beginning God created the heavens and the earth."; // Setting this to a global variable

function capitalize() {
    section = sentence.toUpperCase(); // put the global variable --sentence-- to all uppercase
    document.getElementById("capital").innerHTML = section; // Displays output to the called element
}

function search() {
    section = sentence.search("God"); // Searches for --God-- within the global variable string
    document.getElementById("andrescue").innerHTML = section; // Displays output to the called element
}

// *** NUMBER METHODS ***
function string_method() {
    var X = 182; // Sets the variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // Displays output to the called element using the toString function
}

function tostringmethod() {
    var x = 100; // Sets the variable
    document.getElementById("Numberstostring").innerHTML = x.toString(); // Displays output to the called element using the toString function
}

// *** TOPRECISION() METHOD ***
function precision_Method() {
    var X = 12938.3012987376112; // Sets the variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Displays output to the called element using toPrecision which rounds to the 10th decimal position as called by the method
}

function precisionMeth() {
    var x = 12554.335988662145324; // Sets the variable
    document.getElementById("Precise").innerHTML = x.toPrecision(7); // Displays output to the called element using toPrecision which rounds to the 7th decimal position as called by the method
}

// *** NEW METHODS CHALLENGE ***

var x = 12938.3012987376112; // Making this a global variable for future methods

// toFixed Method
function tofixed(){
    document.getElementById("Fixed").innerHTML = "We start with x = " + x + " and with toFixed() method make it " + x.toFixed(2); // Displays output to the called element by fixing the decimals to 2.
}

// valueOf Method
function valueof(){
    document.getElementById("Value").innerHTML = "We start with x = " + x + " and with valueOf() method make it " + x.valueOf(); // Displays output to the called element using the valueOf method
}