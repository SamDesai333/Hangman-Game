//word bank
var wordBank = ["bean", "corn", "kale", "date", "fruit"];
var random = Math.floor((Math.random() * wordBank.length));
var randomWord = wordBank[random];
var correct = [];
var incorrect = [];
var printToScreen = [];
console.log(randomWord)
//DOM

var  underScore = document.getElementsByClassName("wordLines")
var  rightGuess = document.getElementsByClassName("Correct")
var  wrongGuess = document.getElementsByClassName("inCorrect")



//empty '_' to store the word
var emptyArray = function () {
    for (var i = 0; i < randomWord.length; i++) {
        printToScreen.push('_');
        
        
    }
    return printToScreen
}


//add event key listener for user guess
document.addEventListener("keypress", function (key) {
    var keycode = event.keyCode;
    var key = String.fromCharCode(keycode);
    //if user guesses right or wrong    
    if (randomWord.indexOf(key) > -1) {
        correct.push(key);
    //replaced the underscore with the letter    
        printToScreen[randomWord.indexOf(key)] = key;
        underScore[0].innerHTML = printToScreen.join(" ");
        rightGuess[0].innerHTML = correct.join(" ");
        
    }
    else {
        incorrect.push(key);
        wrongGuess[0].innerHTML = incorrect.join(" ")
        
    }
    //have to transfer correct word to print-to-screen array
    printToScreen[randomWord.indexOf(key)] = key;

})







