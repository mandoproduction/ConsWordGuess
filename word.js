let index = require("./index.js");
 //word constructor
let Word = function(word){
    //each word constructor creates an array of letter objects for each letter in the word.
    this.lettersArr = [];

    //for loop.
    for(let i=0; i<word.lenght; i++){
        if(word.charAt(i)=== ""){
            this.lettersArr.push("");
        }
        else{
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };
    //displayLetter() in each letter object in the word object and return.
    //The user will identify the game by letters they guessed correctly in the hidden words.
    this.createString = function(){
        let wordString = "";

        this.lettersArr.forEach(function(element){
            if(element===" "){
                wordString += " ";
            }
            else{
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }
    //when a letter is guessed, the word object checks each Letter object in its array and changes the guessed value to true,
    //if the letter is correct.
    this.checkGuessWord = function(letterGuess){
        this.lettersArr.forEach(function(element){

            if(element.letter !== undefined){
                element.checkGuess(letterGuess);
             
            }
        });
    };


};
//Exporting the Word object to index.js
module.exports = Word;