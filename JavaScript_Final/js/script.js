function changeColor() {
    document.getElementById('change').style.color = "blue";
    document.getElementById('change').style.fontSize = "20px";
    document.getElementById('change').style.fontWeight = "800";
}

function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('factDisplay').textContent = fact;
        })
        .catch(error => {
            document.getElementById('factDisplay').textContent = "Error fetching fact.";
        });
}

function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.text("fact"))
        .then(fact => {
            const info = JSON.parse(fact);
            document.getElementById('CatfactDisplay').textContent = info.fact;
        })
        .catch(error => {
            document.getElementById('CatfactDisplay').textContent = "Error fetching fact.";
        });

}

function yodaTranslate() {
    const text = document.getElementById('phrase').value;
    const sendthis = 'curl -v  -i -X POST  -H  -d "text='+ text +'" https://api.funtranslations.com/translate/yoda.json'
    fetch(sendthis)
        .then(response => response.text())
        .then(fact => {
            alert(fact);
            const info = JSON.parse(fact);
            document.getElementById('Yoda').textContent = info.translated;
        })
        .catch(error => {
            document.getElementById('Yoda').textContent = "Error fetching fact.";
        });
}

function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.text())
        .then(fact => {
            const info = JSON.parse(fact);
            /* document.getElementById('DogPath').innerHTML = info.message; */
            document.getElementById('DogPic').src = info.message;
            document.getElementById('DogPic').style.paddingBottom = "75px";
            document.getElementById('DogPic').style.maxHeight = "350px";
        })
        .catch(error => {
            document.getElementById('DogPic').textContent = "Error fetching fact.";
        });
}
