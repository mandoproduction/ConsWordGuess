//requires word.js npm
let Word = require("./word.js");
//requires inquire.js from npm

let inquire = require("inquirer");

//Our list of words that be randomly picked.
const wordArray = ["Hanover","Westmoreland","Saint James","Saint Elizath","Trelawny","Manchester","Clarendon","Saint Ann","Saint Mary","Saint Catherine","Kingston","Saint Andrew","Portland","Saint Thomas"]
//console.log(wordArray);
//only wants letters as input.
const letters = /[a-zA-Z]/;
var random = ["Hanover","Westmoreland","Saint James","Saint Elizath","Trelawny","Manchester","Clarendon","Saint Ann","Saint Mary","Saint Catherine","Kingston","Saint Andrew","Portland","Saint Thomas"]

//console.log(letters);
//The number of incorrect tries the player gets to have
//14 when a new game starts.
let numGuesses;


//This function creates a new game with a new word.
function playGame(){

    let newWord = wordArray[Math.floor(Math.random()*wordArray.length)]
    //pick new word randomly from the word array
    let word = new Word(newWord);
 //The user gets 14 incorrect tries before the game is over.
 numGuesses = 14;
 //execute the game based on the word.
 guessWord(word, random);
};
function guessWord(guess, actual){
 let letterWordArr = [];
 //the array will be used to store boolean values for each letter for correctiveness.
 let guessArr = [];

 //console.log(guess);
 //console.log('SS');
 //console.log(guess.createString());

 //console.log('OO');
 //console.log("");
//
inquire.prompt([
    {
        name: "guessLetter",
        message: "pick a letter",
        validate: function validateLetter([]){
            //console.log([]);
            if (!name.match(letters)){
                return "please pick a letter only.";
            }
            else{
                return false;
            }
        }
    }
]).then(function(answer){
    //
    console.log(guess.checkGuessWord)
    guess.checkGuessWord(answer.guessLetter.toUpperCase());
    //
    guess.lettersArr.forEach(function(element){
        letterWordArr.push(element.letter);
        guessArr.push(element.guess);
    });
    if(letterWordArr.indexOf(answer.guessLetter.toUpperCase()) > -1){
        console.log("")
        console.log("correct!!!");
    }
    else{
        console.log("");
        console.log("incorrect!");
        numGuesses--;
        console.log(`You have ${numGuesses} tries remaining.`)

    }
    //
    if(guessArr.indexOf(false) > -1 && numGuesses > 0){
        guessWord(guess, actual);
    }
    else{
        //
        if(numGuesses===0){
            console.log("");
            console.log("Loser");
            console.log(`The word was ${actual}!`);
            console.log("");
        }
        else{
            console.log("");
            console.log("You go!!");
            console.log(`The word was ${actual}`);
            console.log("");
        };
        //Then ask if the user wants to play again.
        inquire.prompts([
            {
                type: "confirm",
                name: "playAgain",
                message:"Would you like to play again?",
                default: true
            }
        ]).then(function(answer){
            //if yes, a new game starts.
            if(answer.playAgain){
                playGame();
            }
            //if not,the program stops.
            else{
                process.exit();
            }
        });
    
    };

});
};

playGame();

