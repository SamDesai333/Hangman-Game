//word bank
var wordBank = ["bean", "corn", "kale", "date"];
//computer chooses random word
var random = Math.floor((Math.random() * wordBank.length));
console.log(random);
//changes the integer to a string
var randomWord = wordBank[random];
console.log(randomWord);
//the chosen word gets split into an array
var letterBank = randomWord.split("");
console.log(letterBank)
//user picks a letter
//
