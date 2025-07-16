function my_Dictionary() { // Starts the function
    var BoardGame = { // Starts the dictionary
        Title: "7 Wonders: Architects", 
        Year: 2021, 
        Players: 7, 
        Time: 25, 
        Age: 8
    }
    delete BoardGame.Age // Deletes a KVP from the dictionary
    document.getElementById("Dictionary").innerHTML = BoardGame.Age; // Triesw to display the deleted KVP
    document.getElementById("BoardGame").textContent = `Title: ${BoardGame.Title} | Players: ${BoardGame.Players}`; // Displays a couple KVPs to the screen
}