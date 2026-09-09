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

    let word = "";
    // getting random word
    let gettingWord = await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1");
    word = gettingWord.data;
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

    let greenLettersArray = [];
    let yellowLettersArray = [];
    let blackLettersArray = [];

    let alphaToClassArray = [];

    let timesSubmitted = 0;

    let wordA = [];
    let userGuessA = [];
    
    let userGuess;

    let a = "normal";
	let b = "normal";
	let c = "normal";
	let d = "normal";
	let e = "normal";
	let f = "normal";
	let g = "normal";
	let h = "normal";
	let i = "normal";
	let j = "normal";
	let k = "normal";
	let l = "normal";
	let m = "normal";
	let n = "normal";
	let o = "normal";
	let p = "normal";
	let q = "normal";
	let r = "normal";
	let s = "normal";
	let t = "normal";
	let u = "normal";
	let v = "normal";
	let w = "normal";
	let x = "normal";
	let y = "normal";
	let z = "normal";

    async function resetAllData(){
        word = "";
        gettingWord = await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1");
        word = gettingWord.data;
        word = word[0];
        word = word.toUpperCase();
        guessesLeft = 6;
        gameOver = false;
        gameWon = false;
        finalStatement = "";
        colorsDimensionalArray = [];
        colorData = {};
        alphaDimensionalArray = [];
        alphaData = {};
        timesSubmitted = 0;
        wordA = [];
        userGuessA = [];
        userGuess = "";
        greenLettersArray = [];
        yellowLettersArray = [];
        blackLettersArray = [];
        alphaToClassArray = [];
        a = "normal";
		b = "normal";
		c = "normal";
		d = "normal";
		e = "normal";
		f = "normal";
		g = "normal";
		h = "normal";
		i = "normal";
		j = "normal";
		k = "normal";
		l = "normal";
		m = "normal";
		n = "normal";
		o = "normal";
		p = "normal";
		q = "normal";
		r = "normal";
		s = "normal";
		t = "normal";
		u = "normal";
		v = "normal";
		w = "normal";
		x = "normal";
		y = "normal";
		z = "normal";
    }

    res.render("index.ejs");

    app.post("/submit", (req, res) => {
        userGuess = req.body["userGuess"];
        userGuess = userGuess.toUpperCase();

        console.log(`userGuess: ${userGuess}`);

        if(userGuess.length == 5){
            timesSubmitted++;
            
            wordA = [word[0], word[1], word[2], word[3], word[4]];
            userGuessA = [userGuess[0], userGuess[1], userGuess[2], userGuess[3],userGuess[4]];

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
                greenLettersArray.push(userGuessA[0]);
            } else{

                let yellowFound = false;
                let blackFound = false;

                if(!yellowFound){
                    for(let i = 0; i < 5; i++){
                        if(!yellowFound){
                            if(userGuessA[0] === wordA[i]){
                                yellowFound = true;
                                blackFound = true;
                                firstLetterColor = "#ffb800";
                                yellowLettersArray.push(userGuessA[0]);
                            }
                        }
                    }
                }
                if(!blackFound){
                    if(userGuessA[0] != wordA[0]){
                        blackFound = true;
                        firstLetterColor = "#424242";
                        blackLettersArray.push(userGuessA[0]);
                    }
                }

                
            }

			if(wordA[1] === userGuessA[1]){
				secondLetterColor = "#20B41D";
				greenLettersArray.push(userGuessA[1]);
			} else{

				let yellowFound = false;
				let blackFound = false;

				if(!yellowFound){
					for(let i = 0; i < 5; i++){
						if(!yellowFound){
							if(userGuessA[1] === wordA[i]){
								yellowFound = true;
								blackFound = true;
								secondLetterColor = "#ffb800";
								yellowLettersArray.push(userGuessA[1]);
							}
						}
					}
				}
				if(!blackFound){
					if(userGuessA[1] != wordA[1]){
						blackFound = true;
						secondLetterColor = "#424242";
						blackLettersArray.push(userGuessA[1]);
					}
				}
			}

			if(wordA[2] === userGuessA[2]){
				thirdLetterColor = "#20B41D";
				greenLettersArray.push(userGuessA[2]);
			} else{

				let yellowFound = false;
				let blackFound = false;

				if(!yellowFound){
					for(let i = 0; i < 5; i++){
						if(!yellowFound){
							if(userGuessA[2] === wordA[i]){
								yellowFound = true;
								blackFound = true;
								thirdLetterColor = "#ffb800";
								yellowLettersArray.push(userGuessA[2]);
							}
						}
					}
				}
				if(!blackFound){
					if(userGuessA[2] != wordA[2]){
						blackFound = true;
						thirdLetterColor = "#424242";
						blackLettersArray.push(userGuessA[2]);
					}
				}
			}

			if(wordA[3] === userGuessA[3]){
				fourthLetterColor = "#20B41D";
				greenLettersArray.push(userGuessA[3]);
			} else{

				let yellowFound = false;
				let blackFound = false;

				if(!yellowFound){
					for(let i = 0; i < 5; i++){
						if(!yellowFound){
							if(userGuessA[3] === wordA[i]){
								yellowFound = true;
								blackFound = true;
								fourthLetterColor = "#ffb800";
								yellowLettersArray.push(userGuessA[3]);
							}
						}
					}
				}
				if(!blackFound){
					if(userGuessA[3] != wordA[3]){
						blackFound = true;
						fourthLetterColor = "#424242";
						blackLettersArray.push(userGuessA[3]);
					}
				}
			}

			if(wordA[4] === userGuessA[4]){
				fifthLetterColor = "#20B41D";
				greenLettersArray.push(userGuessA[4]);
			} else{

				let yellowFound = false;
				let blackFound = false;

				if(!yellowFound){
					for(let i = 0; i < 5; i++){
						if(!yellowFound){
							if(userGuessA[4] === wordA[i]){
								yellowFound = true;
								blackFound = true;
								fifthLetterColor = "#ffb800";
								yellowLettersArray.push(userGuessA[4]);
							}
						}
					}
				}
				if(!blackFound){
					if(userGuessA[4] != wordA[4]){
						blackFound = true;
						fifthLetterColor = "#424242";
						blackLettersArray.push(userGuessA[4]);
					}
				}
			}

            

            function checkGreenLetters(){
				if(greenLettersArray.includes("A")){
				    a = "green";
				}

				if(greenLettersArray.includes("B")){
				    b = "green";
				}

				if(greenLettersArray.includes("C")){
				    c = "green";
				}

				if(greenLettersArray.includes("D")){
				    d = "green";
				}

				if(greenLettersArray.includes("E")){
				    e = "green";
				}

				if(greenLettersArray.includes("F")){
				    f = "green";
				}

				if(greenLettersArray.includes("G")){
				    g = "green";
				}

				if(greenLettersArray.includes("H")){
				    h = "green";
				}

				if(greenLettersArray.includes("I")){
				    i = "green";
				}

				if(greenLettersArray.includes("J")){
				    j = "green";
				}

				if(greenLettersArray.includes("K")){
				    k = "green";
				}

				if(greenLettersArray.includes("L")){
				    l = "green";
				}

				if(greenLettersArray.includes("M")){
				    m = "green";
				}

				if(greenLettersArray.includes("N")){
				    n = "green";
				}

				if(greenLettersArray.includes("O")){
				    o = "green";
				}

				if(greenLettersArray.includes("P")){
				    p = "green";
				}

				if(greenLettersArray.includes("Q")){
				    q = "green";
				}

				if(greenLettersArray.includes("R")){
				    r = "green";
				}

				if(greenLettersArray.includes("S")){
				    s = "green";
				}

				if(greenLettersArray.includes("T")){
				    t = "green";
				}

				if(greenLettersArray.includes("U")){
				    u = "green";
				}

				if(greenLettersArray.includes("V")){
				    v = "green";
				}

				if(greenLettersArray.includes("W")){
				    w = "green";
				}

				if(greenLettersArray.includes("X")){
				    x = "green";
				}

				if(greenLettersArray.includes("Y")){
				    y = "green";
				}

				if(greenLettersArray.includes("Z")){
				    z = "green";
				}
            }
            function checkBlackLetters(){
				if(blackLettersArray.includes("A")){
				    a = "black";
				}
				if(blackLettersArray.includes("B")){
				    b = "black";
				}
				if(blackLettersArray.includes("C")){
				    c = "black";
				}
				if(blackLettersArray.includes("D")){
				    d = "black";
				}
				if(blackLettersArray.includes("E")){
				    e = "black";
				}
				if(blackLettersArray.includes("F")){
				    f = "black";
				}
				if(blackLettersArray.includes("G")){
				    g = "black";
				}
				if(blackLettersArray.includes("H")){
				    h = "black";
				}
				if(blackLettersArray.includes("I")){
				    i = "black";
				}
				if(blackLettersArray.includes("J")){
				    j = "black";
				}
				if(blackLettersArray.includes("K")){
				    k = "black";
				}
				if(blackLettersArray.includes("L")){
				    l = "black";
				}
				if(blackLettersArray.includes("M")){
				    m = "black";
				}
				if(blackLettersArray.includes("N")){
				    n = "black";
				}
				if(blackLettersArray.includes("O")){
				    o = "black";
				}
				if(blackLettersArray.includes("P")){
				    p = "black";
				}
				if(blackLettersArray.includes("Q")){
				    q = "black";
				}
				if(blackLettersArray.includes("R")){
				    r = "black";
				}
				if(blackLettersArray.includes("S")){
				    s = "black";
				}
				if(blackLettersArray.includes("T")){
				    t = "black";
				}
				if(blackLettersArray.includes("U")){
				    u = "black";
				}
				if(blackLettersArray.includes("V")){
				    v = "black";
				}
				if(blackLettersArray.includes("W")){
				    w = "black";
				}
				if(blackLettersArray.includes("X")){
				    x = "black";
				}
				if(blackLettersArray.includes("Y")){
				    y = "black";
				}
				if(blackLettersArray.includes("Z")){
				    z = "black";
				}
            }
            function checkYellowLetters(){
				if(yellowLettersArray.includes("A")){
				    a = "yellow";
				}
				if(yellowLettersArray.includes("B")){
				    b = "yellow";
				}
				if(yellowLettersArray.includes("C")){
				    c = "yellow";
				}
				if(yellowLettersArray.includes("D")){
				    d = "yellow";
				}
				if(yellowLettersArray.includes("E")){
				    e = "yellow";
				}
				if(yellowLettersArray.includes("F")){
				    f = "yellow";
				}
				if(yellowLettersArray.includes("G")){
				    g = "yellow";
				}
				if(yellowLettersArray.includes("H")){
				    h = "yellow";
				}
				if(yellowLettersArray.includes("I")){
				    i = "yellow";
				}
				if(yellowLettersArray.includes("J")){
				    j = "yellow";
				}
				if(yellowLettersArray.includes("K")){
				    k = "yellow";
				}
				if(yellowLettersArray.includes("L")){
				    l = "yellow";
				}
				if(yellowLettersArray.includes("M")){
				    m = "yellow";
				}
				if(yellowLettersArray.includes("N")){
				    n = "yellow";
				}
				if(yellowLettersArray.includes("O")){
				    o = "yellow";
				}
				if(yellowLettersArray.includes("P")){
				    p = "yellow";
				}
				if(yellowLettersArray.includes("Q")){
				    q = "yellow";
				}
				if(yellowLettersArray.includes("R")){
				    r = "yellow";
				}
				if(yellowLettersArray.includes("S")){
				    s = "yellow";
				}
				if(yellowLettersArray.includes("T")){
				    t = "yellow";
				}
				if(yellowLettersArray.includes("U")){
				    u = "yellow";
				}
				if(yellowLettersArray.includes("V")){
				    v = "yellow";
				}
				if(yellowLettersArray.includes("W")){
				    w = "yellow";
				}
				if(yellowLettersArray.includes("X")){
				    x = "yellow";
				}
				if(yellowLettersArray.includes("Y")){
				    y = "yellow";
				}
				if(yellowLettersArray.includes("Z")){
				    z = "yellow";
				}
            }
            
            checkGreenLetters();
            checkYellowLetters();
            checkBlackLetters();

            alphaToClassArray = [];
            alphaToClassArray.push(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);

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

            console.log(`test user guess: ${userGuess}`);
            console.log(`test word: ${word}`);
            
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
            res.render("index.ejs", {guessesLeft: guessesLeft, colorData, alphaData, alphaToClassArray});
        }
        else{
            //res.render("index.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft, colorData, alphaData});
            if(gameWon){
                res.render("win.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft, word});
                resetAllData();
            }
            else{
                res.render("fail.ejs", {finalStatement: finalStatement, guessesLeft: guessesLeft, word: word, userGuess: userGuess});
                resetAllData();
            }
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

app.get("/playAgain", (req, res) => {
    
    

    res.render("index.ejs");

    });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

