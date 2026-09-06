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

    // getting random word
    let gettingWord = await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1");
    let word = gettingWord.data;
    word = word[0];
    word = word.toUpperCase();
    console.log(word);

    
    // variables
    let guessesLeft = 6;
    let gameOver = false;
    let gameWon = false;
    let finalStatement;

    let colorsDimensionalArray = [];
    let colorData = {};
    let alphaDimensionalArray = [];
    let alphaData = {};

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

            alphaDimensionalArray.push(userGuessA);

        //getting alphabet
            if(timesSubmitted === 1){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4]
                }
            } else if(timesSubmitted === 2){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4],

                    secondWordFirstAlpha: alphaDimensionalArray[1][0],
                    secondWordSecondAlpha: alphaDimensionalArray[1][1],
                    secondWordThirdAlpha: alphaDimensionalArray[1][2],
                    secondWordFourthAlpha: alphaDimensionalArray[1][3],
                    secondWordFifthAlpha: alphaDimensionalArray[1][4]
                }
            } else if(timesSubmitted === 3){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4],

                    secondWordFirstAlpha: alphaDimensionalArray[1][0],
                    secondWordSecondAlpha: alphaDimensionalArray[1][1],
                    secondWordThirdAlpha: alphaDimensionalArray[1][2],
                    secondWordFourthAlpha: alphaDimensionalArray[1][3],
                    secondWordFifthAlpha: alphaDimensionalArray[1][4],

                    thirdWordFirstAlpha: alphaDimensionalArray[2][0],
                    thirdWordSecondAlpha: alphaDimensionalArray[2][1],
                    thirdWordThirdAlpha: alphaDimensionalArray[2][2],
                    thirdWordFourthAlpha: alphaDimensionalArray[2][3],
                    thirdWordFifthAlpha: alphaDimensionalArray[2][4]
                }
            } else if(timesSubmitted === 4){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4],

                    secondWordFirstAlpha: alphaDimensionalArray[1][0],
                    secondWordSecondAlpha: alphaDimensionalArray[1][1],
                    secondWordThirdAlpha: alphaDimensionalArray[1][2],
                    secondWordFourthAlpha: alphaDimensionalArray[1][3],
                    secondWordFifthAlpha: alphaDimensionalArray[1][4],

                    thirdWordFirstAlpha: alphaDimensionalArray[2][0],
                    thirdWordSecondAlpha: alphaDimensionalArray[2][1],
                    thirdWordThirdAlpha: alphaDimensionalArray[2][2],
                    thirdWordFourthAlpha: alphaDimensionalArray[2][3],
                    thirdWordFifthAlpha: alphaDimensionalArray[2][4],

                    fourthWordFirstAlpha: alphaDimensionalArray[3][0],
                    fourthWordSecondAlpha: alphaDimensionalArray[3][1],
                    fourthWordThirdAlpha: alphaDimensionalArray[3][2],
                    fourthWordFourthAlpha: alphaDimensionalArray[3][3],
                    fourthWordFifthAlpha: alphaDimensionalArray[3][4],
                }
            } else if(timesSubmitted === 5){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4],

                    secondWordFirstAlpha: alphaDimensionalArray[1][0],
                    secondWordSecondAlpha: alphaDimensionalArray[1][1],
                    secondWordThirdAlpha: alphaDimensionalArray[1][2],
                    secondWordFourthAlpha: alphaDimensionalArray[1][3],
                    secondWordFifthAlpha: alphaDimensionalArray[1][4],

                    thirdWordFirstAlpha: alphaDimensionalArray[2][0],
                    thirdWordSecondAlpha: alphaDimensionalArray[2][1],
                    thirdWordThirdAlpha: alphaDimensionalArray[2][2],
                    thirdWordFourthAlpha: alphaDimensionalArray[2][3],
                    thirdWordFifthAlpha: alphaDimensionalArray[2][4],

                    fourthWordFirstAlpha: alphaDimensionalArray[3][0],
                    fourthWordSecondAlpha: alphaDimensionalArray[3][1],
                    fourthWordThirdAlpha: alphaDimensionalArray[3][2],
                    fourthWordFourthAlpha: alphaDimensionalArray[3][3],
                    fourthWordFifthAlpha: alphaDimensionalArray[3][4],

                    fifthWordFirstAlpha: alphaDimensionalArray[4][0],
                    fifthWordSecondAlpha: alphaDimensionalArray[4][1],
                    fifthWordThirdAlpha: alphaDimensionalArray[4][2],
                    fifthWordFourthAlpha: alphaDimensionalArray[4][3],
                    fifthWordFifthAlpha: alphaDimensionalArray[4][4]
                }
            } else if(timesSubmitted === 6){
                alphaData = {
                    firstWordFirstAlpha: alphaDimensionalArray[0][0],
                    firstWordSecondAlpha: alphaDimensionalArray[0][1],
                    firstWordThirdAlpha: alphaDimensionalArray[0][2],
                    firstWordFourthAlpha: alphaDimensionalArray[0][3],
                    firstWordFifthAlpha: alphaDimensionalArray[0][4],

                    secondWordFirstAlpha: alphaDimensionalArray[1][0],
                    secondWordSecondAlpha: alphaDimensionalArray[1][1],
                    secondWordThirdAlpha: alphaDimensionalArray[1][2],
                    secondWordFourthAlpha: alphaDimensionalArray[1][3],
                    secondWordFifthAlpha: alphaDimensionalArray[1][4],

                    thirdWordFirstAlpha: alphaDimensionalArray[2][0],
                    thirdWordSecondAlpha: alphaDimensionalArray[2][1],
                    thirdWordThirdAlpha: alphaDimensionalArray[2][2],
                    thirdWordFourthAlpha: alphaDimensionalArray[2][3],
                    thirdWordFifthAlpha: alphaDimensionalArray[2][4],

                    fourthWordFirstAlpha: alphaDimensionalArray[3][0],
                    fourthWordSecondAlpha: alphaDimensionalArray[3][1],
                    fourthWordThirdAlpha: alphaDimensionalArray[3][2],
                    fourthWordFourthAlpha: alphaDimensionalArray[3][3],
                    fourthWordFifthAlpha: alphaDimensionalArray[3][4],

                    fifthWordFirstAlpha: alphaDimensionalArray[4][0],
                    fifthWordSecondAlpha: alphaDimensionalArray[4][1],
                    fifthWordThirdAlpha: alphaDimensionalArray[4][2],
                    fifthWordFourthAlpha: alphaDimensionalArray[4][3],
                    fifthWordFifthAlpha: alphaDimensionalArray[4][4],

                    sixthWordFirstAlpha: alphaDimensionalArray[5][0],
                    sixthWordSecondAlpha: alphaDimensionalArray[5][1],
                    sixthWordThirdAlpha: alphaDimensionalArray[5][2],
                    sixthWordFourthAlpha: alphaDimensionalArray[5][3],
                    sixthWordFifthAlpha: alphaDimensionalArray[5][4]
                }
}        

            let firstLetterColor = "#808080";
            let secondLetterColor = "#808080";
            let thirdLetterColor = "#808080";
            let fourthLetterColor = "#808080";
            let fifthLetterColor = "#808080";

            // checking if alphabet is correct/misplaced/wrong
            if(wordA[0] === userGuessA[0]){
                firstLetterColor = "#20B41D";
            } else{

                let yellowFound = false;

                for(let i = 0; i < 5; i++){
                    if(!yellowFound){
                        if(userGuessA[0] === wordA[i]){
                            firstLetterColor = "#ffb800";
                            yellowFound = true;
                        } else{
                            firstLetterColor = "#525252";
                        }
                    }
                    
                }
            }
            if(wordA[1] === userGuessA[1]){
                secondLetterColor = "#20B41D";
            } else{

                let yellowFound = false;

                for(let i = 0; i < 5; i++){
                    if(!yellowFound){
                        if(userGuessA[1] === wordA[i]){
                            secondLetterColor = "#ffb800";
                            yellowFound = true;
                        } else{
                            secondLetterColor = "#525252";
                        }
                    }
                    
                }
            }
            if(wordA[2] === userGuessA[2]){
                thirdLetterColor = "#20B41D";
            } else{

                let yellowFound = false;

                for(let i = 0; i < 5; i++){
                    if(!yellowFound){
                        if(userGuessA[2] === wordA[i]){
                            thirdLetterColor = "#ffb800";
                            yellowFound = true;
                        } else{
                            thirdLetterColor = "#525252";
                        }
                    }
                    
                }
            }
            if(wordA[3] === userGuessA[3]){
                fourthLetterColor = "#20B41D";
            } else{

                let yellowFound = false;

                for(let i = 0; i < 5; i++){
                    if(!yellowFound){
                        if(userGuessA[3] === wordA[i]){
                            fourthLetterColor = "#ffb800";
                            yellowFound = true;
                        } else{
                            fourthLetterColor = "#525252";
                        }
                    }
                    
                }
            }
            if(wordA[4] === userGuessA[4]){
                fifthLetterColor = "#20B41D";
            } else{

                let yellowFound = false;

                for(let i = 0; i < 5; i++){
                    if(!yellowFound){
                        if(userGuessA[4] === wordA[i]){
                            fifthLetterColor = "#ffb800";
                            yellowFound = true;
                        } else{
                            fifthLetterColor = "#525252";
                        }
                    }
                    
                }
            }

            let rowColorArray = [firstLetterColor, secondLetterColor, thirdLetterColor, fourthLetterColor, fifthLetterColor];

            colorsDimensionalArray.push(rowColorArray);

            console.log(colorsDimensionalArray[0]);
          
            //getting color
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
            res.render("index.ejs", {guessesLeft: guessesLeft, colorData, alphaData});
        }
        else{
            res.render("index.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft, colorData, alphaData});
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

