// *** Countdown timer ***
function countdown() {
    var seconds = document.getElementById("seconds").value; // sets the variable based on user input

    function tick() {
        seconds = seconds - 1; // reduces the seconds by one
        timer.interHTML = seconds; // sets the timer method to seconds
        var time = setTimeout(tick, 1000); //sets the variable
        if (seconds == -1) { // checks to see if seconds are below 0
            alert("Time's Up!"); // if so, displays message as an pop-up alert
            clearTimeout(time); // resets time variable
            timer.innerHTML = ""; // sets timer id to nothing
        }
    }
    tick(); // calls tick function
}

let slideIndex = 1; // sets variable
showSlides(slideIndex);  // calls the function based on the slide number

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // calls the function based on the slide number
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);  // calls the function based on the slide number
}

function showSlides(n) {
    let i; // sets variable
    let slides = document.getElementsByClassName("mySlides"); // sets variable based on Class Elements
    let dots = document.getElementsByClassName("dot"); // sets variable based on Class Elements
    if (n > slides.length) {slideIndex = 1} // checks to see if variable is greater then number of slides, if so, sets it back to the first slide
    if (n < 1) {slideIndex = slides.length} // checks to see if variable is less then number of slides, if so, sets it back to the last slide
    for (i = 0; i < slides.length; i++){ // increases the variable
        slides[i].style.display = "none"; // displays the slide
    }
    for (i = 0; i <dots.length; i++){ // changes the "active" dot
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // sets the display style of the slides
    dots[slideIndex-1].className += " active"; // sets the active dot
}