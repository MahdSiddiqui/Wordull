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


const port = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    const word = await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1");
    console.log(word.data);

    

    let guessesLeft = 6;
    let gameOver = false;
    let gameWon = false;

    let finalStatement;

    res.render("index.ejs");

    app.post("/submit", async (req, res) => {
        const userGuess = req.body["userGuess"];
        console.log(userGuess);

        
        if(userGuess == word.data){
            guessesLeft--;
            console.log("won");
            gameWon = true;
            console.log(`Game won - took ${6-guessesLeft} guesses`);
            gameOver = true;
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
            res.render("index.ejs", {guessesLeft: guessesLeft});
        }
        else{
            res.render("index.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft});
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

