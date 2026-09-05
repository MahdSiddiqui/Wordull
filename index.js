// 1: init npms and setup server
// 2: set index.ejs and link to server
// 3: find wordsAPI and try it
// 4: get random word from api
// 5: ask user for word guess, determine whether correct or wrong
// 6: make 6 guesses - if user gets in the 6 guesses then correct else fail
// 7: good display in ejs file
// 8: fix css


// importing npms and setting up server:

import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";
import axios from "axios";
import { time } from "console";


const port = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    let gettingWord = await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1");
    let word = gettingWord.data;
    word = word[0];
    word = word.toUpperCase();
    console.log(word);

    

    let guessesLeft = 6;
    let gameOver = false;
    let gameWon = false;
    let finalStatement;

    let colorsDimensionalArray = [];
    let colorData = {};

    let timesSubmitted = 0;

    res.render("index.ejs");

    app.post("/submit", async (req, res) => {
        let userGuess = req.body["userGuess"];
        userGuess = userGuess.toUpperCase();

        console.log(`userGuess: ${userGuess}`);

        if(userGuess.length == 5){
            timesSubmitted++;
            
            let wordA = [word[0], word[1], word[2], word[3], word[4]];
            let userGuessA = [userGuess[0], userGuess[1], userGuess[2], userGuess[3],userGuess[4]];
            //console.log(wordA);
            //console.log(userGuessA);

            let defaultColor = "#808080";

            let firstLetterColor = "#808080";
            let secondLetterColor = "#808080";
            let thirdLetterColor = "#808080";
            let fourthLetterColor = "#808080";
            let fifthLetterColor = "#808080";

            if(wordA[0] === userGuessA[0]){
                firstLetterColor = "#20B41D";
            } else{
                firstLetterColor = "#525252"
            }
            if(wordA[1] === userGuessA[1]){
                secondLetterColor = "#20B41D";
            } else{
                secondLetterColor = "#525252"
            }
            if(wordA[2] === userGuessA[2]){
                thirdLetterColor = "#20B41D";
            } else{
                thirdLetterColor = "#525252"
            }
            if(wordA[3] === userGuessA[3]){
                fourthLetterColor = "#20B41D";
            } else{
                fourthLetterColor = "#525252"
            }
            if(wordA[4] === userGuessA[4]){
                fifthLetterColor = "#20B41D";
            } else{
                fifthLetterColor = "#525252"
            }

            let rowColorArray = [firstLetterColor, secondLetterColor, thirdLetterColor, fourthLetterColor, fifthLetterColor];

            colorsDimensionalArray.push(rowColorArray);

            console.log(colorsDimensionalArray[0]);

            // for(let i = 0; i <= timesSubmitted; i++){
            //     for(let j = 0; j <= 5; j++){
            //         colorsDimensionalArray[timesSubmitted-1][i] = rowColorArray[j];
            //     }
            // }           

            if(timesSubmitted === 1){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4]
                }
            } else if(timesSubmitted === 2){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4],
                
                secondWordFirstLetter: colorsDimensionalArray[1][0],
                secondWordSecondLetter: colorsDimensionalArray[1][1],
                secondWordThirdLetter: colorsDimensionalArray[1][2],
                secondWordFourthLetter: colorsDimensionalArray[1][3],
                secondWordFifthLetter: colorsDimensionalArray[1][4]}
            } else if(timesSubmitted === 3){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4],
                
                secondWordFirstLetter: colorsDimensionalArray[1][0],
                secondWordSecondLetter: colorsDimensionalArray[1][1],
                secondWordThirdLetter: colorsDimensionalArray[1][2],
                secondWordFourthLetter: colorsDimensionalArray[1][3],
                secondWordFifthLetter: colorsDimensionalArray[1][4],
                
                thirdWordFirstLetter: colorsDimensionalArray[2][0],
                thirdWordSecondLetter: colorsDimensionalArray[2][1],
                thirdWordThirdLetter: colorsDimensionalArray[2][2],
                thirdWordFourthLetter: colorsDimensionalArray[2][3],
                thirdWordFifthLetter: colorsDimensionalArray[2][4]}
            } else if(timesSubmitted === 4){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4],
                
                secondWordFirstLetter: colorsDimensionalArray[1][0],
                secondWordSecondLetter: colorsDimensionalArray[1][1],
                secondWordThirdLetter: colorsDimensionalArray[1][2],
                secondWordFourthLetter: colorsDimensionalArray[1][3],
                secondWordFifthLetter: colorsDimensionalArray[1][4],
                
                thirdWordFirstLetter: colorsDimensionalArray[2][0],
                thirdWordSecondLetter: colorsDimensionalArray[2][1],
                thirdWordThirdLetter: colorsDimensionalArray[2][2],
                thirdWordFourthLetter: colorsDimensionalArray[2][3],
                thirdWordFifthLetter: colorsDimensionalArray[2][4],
                
                fourthWordFirstLetter: colorsDimensionalArray[3][0],
                fourthWordSecondLetter: colorsDimensionalArray[3][1],
                fourthWordThirdLetter: colorsDimensionalArray[3][2],
                fourthWordFourthLetter: colorsDimensionalArray[3][3],
                fourthWordFifthLetter: colorsDimensionalArray[3][4]}
            } else if(timesSubmitted === 5){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4],
                
                secondWordFirstLetter: colorsDimensionalArray[1][0],
                secondWordSecondLetter: colorsDimensionalArray[1][1],
                secondWordThirdLetter: colorsDimensionalArray[1][2],
                secondWordFourthLetter: colorsDimensionalArray[1][3],
                secondWordFifthLetter: colorsDimensionalArray[1][4],
                
                thirdWordFirstLetter: colorsDimensionalArray[2][0],
                thirdWordSecondLetter: colorsDimensionalArray[2][1],
                thirdWordThirdLetter: colorsDimensionalArray[2][2],
                thirdWordFourthLetter: colorsDimensionalArray[2][3],
                thirdWordFifthLetter: colorsDimensionalArray[2][4],
                
                fourthWordFirstLetter: colorsDimensionalArray[3][0],
                fourthWordSecondLetter: colorsDimensionalArray[3][1],
                fourthWordThirdLetter: colorsDimensionalArray[3][2],
                fourthWordFourthLetter: colorsDimensionalArray[3][3],
                fourthWordFifthLetter: colorsDimensionalArray[3][4],
                
                fifthWordFirstLetter: colorsDimensionalArray[4][0],
                fifthWordSecondLetter: colorsDimensionalArray[4][1],
                fifthWordThirdLetter: colorsDimensionalArray[4][2],
                fifthWordFourthLetter: colorsDimensionalArray[4][3],
                fifthWordFifthLetter: colorsDimensionalArray[4][4]}
            } else if(timesSubmitted === 6){
                colorData = {
                firstWordFirstLetter: colorsDimensionalArray[0][0],
                firstWordSecondLetter: colorsDimensionalArray[0][1],
                firstWordThirdLetter: colorsDimensionalArray[0][2],
                firstWordFourthLetter: colorsDimensionalArray[0][3],
                firstWordFifthLetter: colorsDimensionalArray[0][4],
                
                secondWordFirstLetter: colorsDimensionalArray[1][0],
                secondWordSecondLetter: colorsDimensionalArray[1][1],
                secondWordThirdLetter: colorsDimensionalArray[1][2],
                secondWordFourthLetter: colorsDimensionalArray[1][3],
                secondWordFifthLetter: colorsDimensionalArray[1][4],
                
                thirdWordFirstLetter: colorsDimensionalArray[2][0],
                thirdWordSecondLetter: colorsDimensionalArray[2][1],
                thirdWordThirdLetter: colorsDimensionalArray[2][2],
                thirdWordFourthLetter: colorsDimensionalArray[2][3],
                thirdWordFifthLetter: colorsDimensionalArray[2][4],
                
                fourthWordFirstLetter: colorsDimensionalArray[3][0],
                fourthWordSecondLetter: colorsDimensionalArray[3][1],
                fourthWordThirdLetter: colorsDimensionalArray[3][2],
                fourthWordFourthLetter: colorsDimensionalArray[3][3],
                fourthWordFifthLetter: colorsDimensionalArray[3][4],
                
                fifthWordFirstLetter: colorsDimensionalArray[4][0],
                fifthWordSecondLetter: colorsDimensionalArray[4][1],
                fifthWordThirdLetter: colorsDimensionalArray[4][2],
                fifthWordFourthLetter: colorsDimensionalArray[4][3],
                fifthWordFifthLetter: colorsDimensionalArray[4][4],
                
                sixthWordFirstLetter: colorsDimensionalArray[5][0],
                sixthWordSecondLetter: colorsDimensionalArray[5][1],
                sixthWordThirdLetter: colorsDimensionalArray[5][2],
                sixthWordFourthLetter: colorsDimensionalArray[5][3],
                sixthWordFifthLetter: colorsDimensionalArray[5][4],
            };
            }

            
            
            if(userGuess == word){
                guessesLeft--;
                gameWon = true;
                gameOver = true;

                console.log(`Game won - took ${6-guessesLeft} guesses`);
                finalStatement = `Game Won! in ${6-guessesLeft} Guesses`;

            } else{
                if(guessesLeft > 1){
                    guessesLeft--;
                    console.log(`Wrong - ${guessesLeft} guesses left`);
                }
                else{
                    console.log("last try was wrong");
                    gameOver = true;
                    finalStatement = `Game Lost...`;
                }
            }
        

        if(!gameOver){
            res.render("index.ejs", {guessesLeft: guessesLeft, colorData});
        }
        else{
            res.render("index.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft, colorData});
        }

    
        }

        console.log(guessesLeft);
    });

    if(gameOver){
        
        if(gameWon === true){
        console.log("GAME WON!");
        }
        else{
            console.log("GAME LOST");
        }
        
    }
    

});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

