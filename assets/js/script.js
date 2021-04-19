var saveScoreBtn = document.getElementById('saveScore');
var startButton = document.getElementById('startGameBtn');
var answerBtnA = document.getElementById('answerBtnA');
var answerBtnB = document.getElementById('answerBtnB');
var answerBtnC = document.getElementById('answerBtnC');
var storedHighScores = document.getElementById("highScore");
var yourAnswers = [];
var correctAnswers = [];
var highScore = 0;
var timerInterval;
var countdownSpot = document.getElementById("countdownSpot").innerHTML;
var initialsInput = document.getElementById("initialsInput").innerHTML;
var scoreString = []
var submitScore = document.getElementById("submitScore").innerHTML

// hides score submission section_
document.getElementById("submitScore").style.display = "none";

// here start the questions_
function question1Func() {

    document.getElementById("p1").innerHTML = "Who created JavaScript?";
    document.getElementById("answerBtnA").innerHTML = "A: Rusty Schackleford";
    document.getElementById("answerBtnB").innerHTML = "B: Dr. Mantis Tobaagen";
    document.getElementById("answerBtnC").innerHTML = "C: Brendan Eich";


    answerBtnA.onclick = function () {
        alert("A: Rusty Schackleford is incorrect.");
        yourAnswers.push("Question 1 - A: Rusty Schackleford");
        correctAnswers.push("Question 1 - C: Brendan Eich was the correct answer.");
        //deducting -5 from timer on wrong answer_
        countdownSpot = countdownSpot - 5;
        document.getElementById('countdownSpot').innerHTML = countdownSpot;
        console.log(document.getElementById('countdownSpot').innerHTML)
        question2Func();
    }

    answerBtnB.onclick = function () {
        alert("B: Dr. Mantis Tobaagen is incorrect.");
        yourAnswers.push("Question 1 - B: Dr. Mantis Tobaagen");
        correctAnswers.push("Question 1 - C: Brendan Eich was the correct answer.");
        countdownSpot = countdownSpot - 5;
        document.getElementById('countdownSpot').innerHTML = countdownSpot;
        question2Func();
    }

    answerBtnC.onclick = function () {
        //add a score if answer is correct_
        highScore = highScore + 1;
        document.getElementById("hsScoresDisplay").innerHTML = highScore;
        alert("C: Brendan Eich is correct!");
        yourAnswers.push("Question 1 - C: Brendan Eich");
        correctAnswers.push("Question 1 - Good Job! C: Brendan Eich created JavaScript.");


        question2Func();
    }
}



function question2Func() {
    document.getElementById("p1").innerHTML = "What designates an array in JavaScript?";
    document.getElementById("answerBtnA").innerHTML = "A: []"
    document.getElementById("answerBtnB").innerHTML = "B: {}"
    document.getElementById("answerBtnC").innerHTML = "C: $$"

    answerBtnA.onclick = function () {
        highScore = highScore + 1;
        document.getElementById("hsScoresDisplay").innerHTML = highScore;
        alert("A: [] is correct!");
        yourAnswers.push("Question 2 - A: []");
        correctAnswers.push("Question 2 - Good Job! A: [] is correct!")
        question3Func();

    }

    answerBtnB.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("B: {} is incorrect.");
        yourAnswers.push("Question 2 - B: {}");
        correctAnswers.push("Question 2 - A: [] was the correct answer.");
        question3Func();
    }

    answerBtnC.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("C: <> is incorrect.");
        yourAnswers.push("Question 2 - C: <>");
        correctAnswers.push("Question 2 - A: [] was the correct answer.");
        question3Func();
    }
}


function question3Func() {
    document.getElementById("p1").innerHTML = "What are the two possible values of a boolean type?";
    document.getElementById("answerBtnA").innerHTML = "A: start / stop"
    document.getElementById("answerBtnB").innerHTML = "B: true / false"
    document.getElementById("answerBtnC").innerHTML = "C: string / number"

    answerBtnA.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("A: start / stop is incorrect.");
        yourAnswers.push("Question 3 - A: start / stop");
        correctAnswers.push("Question 3 - B: true / false was the correct answer.");
        question4Func();
    }

    answerBtnB.onclick = function () {
        highScore = highScore + 1;
        alert("B: true / false is the correct answer!");
        yourAnswers.push("Question 3 - B: true / false");
        correctAnswers.push("Question 3 - B: true / false is the correct answer!");
        question4Func();
    }

    answerBtnC.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("C: string / number is incorrect.");
        yourAnswers.push("Question 3 - C: string / number");
        correctAnswers.push("Question 3 - B: true / false was the correct answer.");
        question4Func();
    }
}


function question4Func() {
    document.getElementById("p1").innerHTML = "What what is the slice() method in JavaScript?";
    document.getElementById("answerBtnA").innerHTML = "A: slice() method extracts part of a string and inserts it into a new string w/o changing the original."
    document.getElementById("answerBtnB").innerHTML = "B: slice() permanantly removes the first element from an array."
    document.getElementById("answerBtnC").innerHTML = "C: slice() returns the primitive value of an object.`"

    answerBtnA.onclick = function () {
        highScore = highScore + 1;
        document.getElementById("hsScoresDisplay").innerHTML = highScore;
        alert("A: slice() method extracts part of a string and inserts it into a new string w/o changing the original is correct!");
        yourAnswers.push("Question 4 - A: slice() method extracts part of a string and inserts it into a new string w/o changing the original.");
        correctAnswers.push("Question 4 - A: slice() method extracts part of a string and inserts it into a new string w/o changing the original is correct!")
        question5Func();

    }

    answerBtnB.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("B: slice() permanantly removes the first element from an array is incorrect.");
        yourAnswers.push("Question 4 - B:  slice() permanantly removes the first element from an array.");
        correctAnswers.push("Question 4 - A: A: slice() method extracts part of a string and inserts it into a new string w/o changing the original was the correct answer.");
        question5Func();
    }

    answerBtnC.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("C: <> is incorrect.");
        yourAnswers.push("Question 4 - C: <>");
        correctAnswers.push("Question 4 - A: A: slice() method extracts part of a string and inserts it into a new string w/o changing the original was the correct answer.");
        question5Func();
    }
}


function question5Func() {
    document.getElementById("p1").innerHTML = "What does a 'for loop' do in JavaScript?";
    document.getElementById("answerBtnA").innerHTML = "A: A for loop is a delicious breakfast cereal."
    document.getElementById("answerBtnB").innerHTML = "B: A for loop creates a loop that is executed as long as the condition is true."
    document.getElementById("answerBtnC").innerHTML = "C: A for loop assigns and compares values, and perfoms arithmetic operations."

    answerBtnA.onclick = function () {
        countdownSpot = countdownSpot - 5;
        document.getElementById("hsScoresDisplay").innerHTML = highScore;
        alert("A: A for loop is a delicious breakfast cereal is incorrect.");
        yourAnswers.push("Question 5 - A: A for loop is a delicious breakfast cereal.");
        correctAnswers.push("Question 5 - B: A for loop creates a loop that is executed as long as the condition is true, was the correct answer.")
        resultsFunc();

    }

    answerBtnB.onclick = function () {
        highScore = highScore + 1;
        alert("B: A for loop creates a loop that is executed as long as the condition is true is the correct answer!");
        yourAnswers.push("Question 5 - B: A for loop creates a loop that is executed as long as the condition is true.");
        correctAnswers.push("Question 5 - B: A for loop creates a loop that is executed as long as the condition is true is the correct answer!");
        resultsFunc();
    }

    answerBtnC.onclick = function () {
        countdownSpot = countdownSpot - 5;
        alert("C: A for loop assigns and compares values, and perfoms arithmetic operations, is incorrect.");
        yourAnswers.push("Question 5 - C: A for loop assigns and compares values, and perfoms arithmetic operations.");
        correctAnswers.push("Question 5 - B: A for loop creates a loop that is executed as long as the condition is true, was the correct answer.");
        resultsFunc();
    }
}



//is called when game ends by finishing all questions_
function resultsFunc() {

    document.getElementById("submitScore").style.display = "block";

    clearInterval(timerInterval);
    document.getElementById("answerBtnA").innerHTML = "";
    document.getElementById("answerBtnB").innerHTML = "";
    document.getElementById("answerBtnC").innerHTML = "";

    daAnswers = (yourAnswers.join(" <br> "));
    daRightAnswers = (correctAnswers.join(" <br> "));
    document.getElementById('userAnswers').innerHTML = daAnswers;
    document.getElementById('rightAnswers').innerHTML = daRightAnswers;
    document.getElementById("p1").innerHTML = "Congratulations! Enter your initials below to log your score.";

}



function countdownTimer() {

    document.getElementById("countdownSpot").innerHTML -= 1;


    if (document.getElementById("countdownSpot").innerHTML <= 0) {
        clearInterval(timerInterval);
        gameOverMan();
        return
    }

}



//is called when time has run out_
function gameOverMan() {
    document.getElementById("submitScore").style.display = "block";
    clearInterval(timerInterval);
    alert("Oops... You ran out of time.");
    document.getElementById("p1").innerHTML = "GAME OVER, MAN. GAME OVER.";
    document.getElementById("answerBtnA").innerHTML = "";
    document.getElementById("answerBtnB").innerHTML = "";
    document.getElementById("answerBtnC").innerHTML = "";
    document.getElementById("startGame").innerHTML = "Try again?"

    return
}





startButton.onclick = function () {
    question1Func();
    document.getElementById("startGameBtn").innerHTML = "Start Game"
    document.getElementById("countdownSpot").innerHTML = "20"
    document.getElementById("hsScoresDisplay").innerHTML = "0"
    // countdownTimer();
    timerInterval = setInterval(countdownTimer, 1000);
    document.getElementById("startGameBtn").innerHTML = "Restart game?"

}
//save score to local storage_
saveScoreBtn.onclick = function () {
    alert("Your score has been submitted!")
    var input = document.getElementById('initialsInput').value;
    localStorage.setItem(input.value, input);
    scoreString.push(input)
    scoreString.push(highScore)

    localStorage.setItem('scoreString', JSON.stringify(scoreString));
}