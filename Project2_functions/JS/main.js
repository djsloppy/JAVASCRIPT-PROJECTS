// Function Assignment
function Addition() {
    inp1 = document.getElementById('num1').valueAsNumber; // gets the value and changes it into a number from the first input box
    inp2 = document.getElementById('num2').valueAsNumber; // gets the value and changes it into a number from the second input box
    tot = inp1 + inp2; // adds the two values together
    document.getElementById("answer").innerHTML = "The answer is:  " + tot; // prints the total to the element named "answer"
}

// Operator Assignment
function myFunction(){
    var sentence = "I love learning"; // sets that variable
    sentence += " how to code!"; // adds to the variable with the += operator
    document.getElementById("Concatenate").innerHTML = sentence; // prints the variable to the element named "Concatenate"
}