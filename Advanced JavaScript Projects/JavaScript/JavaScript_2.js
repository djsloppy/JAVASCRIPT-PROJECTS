function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value
    if (x == "" || y == "") {
        alert("Please enter a name");
        return false;
    }
}