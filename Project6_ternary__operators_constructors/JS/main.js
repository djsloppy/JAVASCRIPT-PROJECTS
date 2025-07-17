// Ternary Operator

// Creates the function --Vote_Function--
function Vote_Function() {
    var age, Can_vote; // Declares the variables
    age = document.getElementById("age").value; // Sets the --age-- variable to the value given by user
    Can_vote = (age < 18) ? "You are too young" : "You are old enough"; // Ternary operation based on if --age-- is greater or less than 18
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"; // Displays data based on the function --Vote_Function-- to the ID where called
}

// *** Coding Assignment ***

// Creates the function --Vehicle-- and sets the parameters
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creates the variables and assigns the parameters as it calls the function --Vehicle--
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Creates the function to display data based on the function --Vehicle-- to the ID where called
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik dirves a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// *** New Keyword Assignment ***

// Creates the function --BoardGames-- and sets the parameters
function BoardGames(Title, Players, Time) {
    this.BoardGames_Title = Title;
    this.BoardGames_Players = Players;
    this.BoardGames_Time = Time;
}

// Creates the variables and assigns the parameters as it calls the function --BoardGames--
var Ellianna = new BoardGames("Istanbul", 5, 60);
var Sara = new BoardGames("New York Zoo", 5, 60);
var Ethan = new BoardGames("Port Royal", 5, 50);
var Darren = new BoardGames("Snowdonia", 5, 90);

// Creates the function to display data based on the function --BoardGames-- to the ID where called
function myGames() {
    document.getElementById("New_and_This").innerHTML = "Darren likes to play " + Darren.BoardGames_Title + ". It plays up to " + Darren.BoardGames_Players + " players and will take about " + Darren.BoardGames_Time + " minutes to play."
}

// *** Nested Functions Assignment ***

// Creates the function --nested--
function nested(){
    document.getElementById("Nested_Function").innerHTML = counting(); // Displays data based on the function --counting-- to the ID where called.
    function counting(){ // A nested function that will increase --x-- by 1
        var x = 1; // sets the variable
        x += 1; // increases the variable
        return x; // returns the variable
    }
}