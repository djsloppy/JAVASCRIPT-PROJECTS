/* Using SWITCH */

function Driver_Function(){
    var Driver_Output;
    var Drivers = document.getElementById("Driver_Input").value;
    var Driver_String = " is a good choice.";
    switch(Drivers) {
        case "Alex Palou":
            Driver_Output = "Alex Palou" + Driver_String;
        break;
        case "Pato O'Ward":
            Driver_Output = "Pato O'Ward" + Driver_String;
        break;
        case "Marcus Armstrong":
            Driver_Output = "Marcus Armstrong" + Driver_String;
        break;
        case "Scott Dixon":
            Driver_Output = "Scott Dixon" + Driver_String;
        break;
        case "Josef Newgarden":
            Driver_Output = "Josef Newgarden" + Driver_String;
        break;
        case "Alexander Rossi":
            Driver_Output = "Alexander Rossi" + Driver_String;
        break;
        default:
            Driver_Output = "Please enter a name exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = Driver_Output;
}

function Hello_world_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "This text has changed!";
}

function myCanvas() {
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("This isn't as cool as I was hoping...", 10, 50);
}

function myCanvas_grad(){
    const canvas = document.getElementById("Canvas1");
    const ctx = canvas.getContext("2d");

    // Creates gradient
    const grd = ctx.createLinearGradient(0,0,250,250);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    // Draw a filled shape
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 480, 230);
}