document.getElementById("defered").innerHTML = "This ran correctly..."

// WHILE LOOP - Created by me
function Call_Loop() {
    var x = 0; // sets variable
    var phrase = ""; // sets variable
    while (x < 11) { // starts while loop; as long as x is less than 11 this will run
        phrase += "<br>" + x; // creates/updates the --phrase-- to be printed
        x++; // increases x
    }
    document.getElementById("Loop").innerHTML = phrase; // prints the phrase
}

// STRING LENGTH METHOD - Created by me
function stringlength() {
    var sentence = "In the beginning God created the heavens and the earth."; // Sets variable and initial string
    document.getElementById("stringlength").innerHTML = sentence.length; // prints the length of string
}

// FOR LOOP FROM COURSE
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // sets the array
var Content = ""; // sets the variable
var Y; // declares the variable
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { // sets the variable; the loop condition and increases Y
        Content += Instruments[Y] + "<br>"; // updates the content variable and preps it to be printed
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // prints the phrase
}

// FOR LOOP - Created by me
var Games = ["Istanbul", "Hanabi", "Touring", "Onitama", "Karuba", "Trajan"]; // Sets the array
var phrase = ""; // Sets the variable
var x; // declares the variable
function displayGames() {
    for (x=0; x < Games.length; x++) { //sets the variable; loop condition; increases x
        phrase += Games[x] + "<br>"; // updates the phrase to print
    }
    document.getElementById("listGames").innerHTML = phrase; // prints the phrase
}

// CREATING AN ARRAY FROM THE COURSE
function cat_pics(){
    var Cat_Picture = []; // declares the variable
    Cat_Picture[0] = "sleeping"; // sets the first array element
    Cat_Picture[1] = "playing"; // sets the second array element
    Cat_Picture[2] = "eating"; // sets the third array element
    Cat_Picture[3] = "purring"; // sets the fourth array element
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; // prints the phrase
}

// DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT - Created by me
function array_Function(){
    function getRandomInt(max){ // this function will get a random number based on the argument given
        return Math.floor(Math.random()*max); // rounds the random number (0 - max) down to the nearest whole number
    }
    var Games = []; // declares the array
    var RandomNumber = getRandomInt(5); // calls the function to get a random number (0-5)
    Games[0] = "Sagrada"; // sets the first array element
    Games[1] = "Dice City"; // sets the second array element
    Games[2] = "Rallyman: GT"; // sets the third array element
    Games[3] = "The Castles of Burgundy"; // sets the fourth array element
    Games[4] = "Skyline"; // sets the fifth array element
    document.getElementById("Array").innerHTML = "We have many games. One of the types of games are Dice games. One of our favorite ones is: " + Games[(RandomNumber)]; // prints the phrase
}

// CONSTANT FUNCTION ASSIGNMENT - Created by me
function constant_function(){
    const x = 15; // Sets the constant
    var y = 10; // sets the variable
    document.getElementById("Constant").innerHTML = "x = " + x + " and y = " + y; // Outputs to the HTML Element
    x = 12 // tries to change the constant -- this stops the function as it errors here
    if (x != 12){ // checks to see if the constant has changed -- this doesn't run as the function has errored
        phrase = "I tried to change x to 12 but it failed."; // builds the phrase -- this doesn't run as the function has errored
    }
    y = 13 // changes the variable -- this doesn't run as the function has errored
    phrase += "<br> y is now = " + y; // builds the phrase -- this doesn't run as the function has errored
    document.getElementById("Const").innerHTML = phrase; // Outputs to the HTML Element -- this doesn't run as the function has errored
}

// LET KEYWORD ASSIGNMENT - Created by me
function let_function() {
    x = 12; // sets the variable
    document.getElementById("let_keyword").innerHTML = "Initially x = " + x; // Outputs to the HTML Element
    {
        let x = 56; // sets the variable
        document.getElementById("let_keyword1").innerHTML = "Within some brackets I have changed x to " + x; // Outputs to the HTML Element
    }
    document.getElementById("let_keyword2").innerHTML = "After the brackets x = " + x; // Outputs to the HTML Element
}

// RETURN STATEMENT CHALLENGE - Created by me
document.getElementById("return").innerHTML = return_function() // Outputs to the HTML Element
function return_function(){
    return "This function returned this phrase." // Outputs to the HTML Element
}

// OBJECT ASSIGNMENT - Created by me
function obj_function(){
    let games = { // Builds the array
        title: "13 Sheep", // sets the title array element
        designer: "Moritz Dressler", // sets the designer array element
        players: 10, // sets the players array element
        time: 8, // sets the time array element
        description : function() {
            return "This game is called " + this.title + " and it was designed by " + this.designer + ". Up to " + this.players + " can play this and it will take about " + this.time + " minutes."; // builds the description array element
        }
    };
    document.getElementById("obj").innerHTML = games.description(); // Outputs to the HTML Element
}

// BREAK AND CONTINUE CHALLENGE - Created by me
function break_function(){
    let phrase = ""; // sets the variable
    for (let i = 0; i < 10; i++) { // sets the variable; the loop condition and increases i 
        if (i === 5){ break; } // checks condition and if met will break and exit the function
        phrase += "The number is " + i + "<br>"; // builds the phrase
    }
    document.getElementById("brek").innerHTML = phrase; // Outputs to the HTML Element
}

function continue_function(){
    let phrase = ""; // sets the variable
    for (let i = 0; i < 10; i++) { // sets the variable; the loop condition and increases i
        if (i === 5) { continue; } // checks condition and if met will continue; this will not display #5
        phrase += "The number is " + i + "<br>"; // builds the phrase
    }
    document.getElementById("cont").innerHTML = phrase; // Outputs to the HTML Element
}