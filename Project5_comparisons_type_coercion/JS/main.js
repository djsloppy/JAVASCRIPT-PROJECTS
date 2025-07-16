// TypeOf demonstration
var x = "Board Games"
document.write(typeof x) // Writes to HTML the Type of "Board Games" which is a string

// Combine a text string with a number
function strnum(){
    document.getElementById("stringnumber").innerHTML = "10" + 5 // Returns the ouput to the "divzero" ID where called
}

// NaN demonstration - Divide by Zero
function divzero() {
    document.getElementById("divzero").innerHTML = 0 / 0; // Returns the ouput to the "divzero" ID where called
}

// NaN Demo - IsNaN = String
function isnantrue() {
    document.getElementById("isnantrue").innerHTML = isNaN('This is a string'); // Returns the ouput to the "isnantrue" ID where called
}

// NaN Demo - IsNaN = Number
function isnanfalse() {
    document.getElementById("isnanfalse").innerHTML = isNaN('007'); // Returns the ouput to the "isnanfalse" ID where called
}

// Infinity
function infinity() {
    document.getElementById("largenum").innerHTML = 2E310; // Returns the ouput to the "largenum" ID where called
}

// Negative Infinity
function tinynum() {
    document.getElementById("tinynum").innerHTML = -2E310; // Returns the ouput to the "tinynum" ID where called
}

// Boolean True
function bootrue() {
    document.getElementById("bootrue").innerHTML = (100 > 3); // Returns the ouput to the "bootrue" ID where called
}

// Boolean False
function boofalse() {
    document.getElementById("boofalse").innerHTML = (14 < 0); // Returns the ouput to the "boofalse" ID where called
}

// Writing to the Console.log
console.log(2 + 3);
console.log(10 < 2);

// Compare (==) True
function comptrue() {
    document.getElementById("comptrue").innerHTML = ((1 + 2) == 3); // Returns the ouput to the "comptrue" ID where called
}

// Compare (==) False
function compfalse() {
    document.getElementById("compfalse").innerHTML = (14 == 0); // Returns the ouput to the "compfalse" ID where called
}

// Compare (===) Functions
function compvaltypebothsame() {
    // This will compare both value and type; both are the same so returns true
    document.getElementById("compvaltypebothsame").innerHTML = (10 === 10); // Returns the ouput to the "compvaltypebothsame" ID where called
}

function compvaldiftypesame() {
    // This will compare both value and type; value is different, type is the same so returns false
    document.getElementById("compvaldiftypesame").innerHTML = (11 === 10); // Returns the ouput to the "compvaldiftypesame" ID where called
}

function compvalsametypedif() {
    // This will compare both value and type; value is same, type is the different so returns false
    document.getElementById("compvalsametypedif").innerHTML = ("10" === 10); // Returns the ouput to the "compvalsametypedif" ID where called
}

function compvaltypebothdif() {
    // This will compare both value and type; both are the different so returns false
    document.getElementById("compvaltypebothdif").innerHTML = ("11" === 10); // Returns the ouput to the "compvaltypebothdif" ID where called
}

// Compare && (And) Function
function andbothtrue(){
    // This will check to see if both items are true using && (And) function
    document.getElementById("andbothtrue").innerHTML = (4 < 5) && (7 > 3); // Returns the ouput to the "andbothtrue" ID where called
}

function andonetrue(){
    // This will check to see if both items are true using && (And) function
    document.getElementById("andonetrue").innerHTML = (6 < 5) && (7 > 3); // Returns the ouput to the "andonetrue" ID where called
}

// Compare || (Or) Function
function orbothfalse(){
    // This will check to see if both items are true using || (Or) function
    document.getElementById("orbothfalse").innerHTML = (4 > 5) || (7 < 3); // Returns the ouput to the "orbothfalse" ID where called
}

function oronetrue(){
    // This will check to see if both items are true using || (Or) function
    document.getElementById("oronetrue").innerHTML = (6 < 5) || (7 > 3); // Returns the ouput to the "oronetrue" ID where called
}

// Compare ! (Not) Function
function nottrue(){
    // This will check to see if both items are true using ! (Not) Function
    document.getElementById("nottrue").innerHTML = !(6 < 5); // Returns the ouput to the "nottrue" ID where called
}

function notfalse(){
    // This will check to see if both items are true using ! (Not) Function
    document.getElementById("notfalse").innerHTML = !(6 > 5); // Returns the ouput to the "notfalse" ID where called
}