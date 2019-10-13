

var flowers = ["rose", "hibiscus", "daisy", "poppy", "petunia", "tulip", "daffodil"];
var wins = 0;
var losses = 0;
var incorrectGuess = [];
var guessesLeft = 3;
var underScore = [];
var correctGuess = [];
var chosenflower = "";
var flowerSplit = chosenflower.split("");


var arrayToLower = String.prototype.toLowerCase.apply(flowers).split(",");

chosenflower = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];
console.log(chosenflower);
var flowersplit = chosenflower.split(",");

for (var i = 0; i < chosenflower.length; i++) {
    underScore.push("_");
    document.getElementById("userProgress").innerHTML = underScore.join(" ");
}

function startGame() {
    incorrectGuess = [];
    correctGuess = [];
    underScore = [];
    guessesLeft = 10;
    arrayToLower = String.prototype.toLowerCase.apply(flowers).split(",");
    chosenflower = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];

    for (var i = 0; i < chosenflower.length; i++) {
        underScore.push("_");
        console.log(underScore);
        document.getElementById("userProgress").innerHTML = underScore.join(" ");
    }
}


document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


    if (chosenflower.indexOf(userGuess) > -1) {

        correctGuess.push(userGuess);
        console.log(correctGuess);
    } else {
        incorrectGuess.push(userGuess);
        guessesLeft--;
        console.log(incorrectGuess);
        console.log(guessesLeft);
        document.getElementById("prevGuesses").innerHTML = incorrectGuess;
        document.getElementById("guessesleft").innerHTML = guessesLeft;
    }


    for (var i = 0; i < chosenflower.length; i++) {


        if (chosenflower[i] === userGuess) {
            underScore[i] = userGuess;
            console.log(underScore);
            console.log(underScore.join(" "));
            document.getElementById("userProgress").innerHTML = underScore.join(" ");
        }

        if (underScore.join("") === chosenflower) {
            document.getElementById("wins").innerHTML = wins;
            alert(" YOU WON! You guessed " + [chosenflower] +"!");
            wins++;
            startGame();
            

        }

        else if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            alert("You lost");
            startGame();


        }
    }
}
