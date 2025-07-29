function getMsg() {
    // STEP 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    // Get input value of name to display to user after
    // request has been made
    let inputVal = document.getElementById("fullName").value;

    // Function to display user input value once request
    // has been received
    let message = "Thank you " + inputVal + " for signing up!";

    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = message;
    }

    // STEP 2: Prepare the type of request and what to 
    // request from the server
    ajaxRequest.open('GET', 'response.html', true);

    // STEP 3: Defines the AJAX response callback method that
    // establishes whether the response was successful and where 
    // the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    // STEP 4: Send the request
    ajaxRequest.send();
}

function changeMsg() {
    let ajaxRequest = new XMLHttpRequest();
    let inputVal = document.getElementById("thing").value;
    let message = "Just the other day I was talking to my buddies about " + inputVal + ". Isn't that weird?";

    ajaxRequest.onload = function () {
        document.getElementById("msg").innerHTML = message;
    }

    ajaxRequest.open('GET', 'response.html', true);

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    ajaxRequest.send();
}