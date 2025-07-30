const para = document.createElement('p');
para.innerText = "This was added from the script.";
document.getElementById('append').appendChild(para);

let url = document.URL;
document.getElementById('url').innerHTML = url;