
// HTML pulled to be manipulated in JS

var counter = document.getElementById("counter");
var start = document.getElementById("start");
var vquestion = document.getElementById("question");
var messageAnswer = document.getElementById("messageAnswer")
var qa = document.getElementById("qa");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreText = document.getElementById("scoreText");
var scoreList = document.getElementById("scoreList");
var ul = document.getElementById("ul");


// console.log(qa)

// Array of objects with the elements question, answers and correct answer

var totalQuestion = [
    {
        question: "What is one right or freedom from the First Amendment?",
        choiceA: "speech",
        choiceB: "religion",
        choiceC: "assembly",
        choiceD: "all the alternatives are correct",
        correct: "D"
    },

    {
        question: "How many amendments does the Constitution have?",
        choiceA: "27",
        choiceB: "11",
        choiceC: "29",
        choiceD: "10",
        correct: "A"
    },

    {
        question: "What are two rights in the Declaration of Independence?",
        choiceA: "Bear arms and pay taxes",
        choiceB: "Have education and medical assitance",
        choiceC: "life and liberty",
        choiceD: "freedon of speech and religion",
        correct: "C"
    },

    {
        question: "What is the economic system in the United States?",
        choiceA: "Anarchy",
        choiceB: "Capitalism",
        choiceC: "Socialism",
        choiceD: "Liberal",
        correct: "B"
    }
];

// Variables to make the page load

var indexQuestion = 0;
var lastQuestion = totalQuestion.length - 1;

function loadQuestion() {
    vquestion.innerHTML = "<h3>" + totalQuestion[indexQuestion].question + "</h3>";
    answerA.innerHTML = totalQuestion[indexQuestion].choiceA;
    answerB.innerHTML = totalQuestion[indexQuestion].choiceB;
    answerC.innerHTML = totalQuestion[indexQuestion].choiceC;
    answerD.innerHTML = totalQuestion[indexQuestion].choiceD;

}

//Variables to make the counter load 

var count = 30;
var timeOut = 0;
var seconds;
var score = 0;

// Function to execute the counter

function quizCounter() {
    if (count > timeOut) {
        count--
        counter.innerHTML = count;
        // console.log(count)

    } else {
        count = 0;

        // wrongAnswer();

        if (indexQuestion < lastQuestion) {
            indexQuestion++;
            quizCounter(indexQuestion);
        } else {

            // showScore()

            clearInterval(seconds);

        }
    }
}

// Clicking on the start quiz banner will execute this function

function startQuiz() {
    start.style.display = "none";
    qa.style.display = "block";
    counter.setAttribute("style", "display:block");
    loadQuestion(0);
    quizCounter()
    seconds = setInterval(quizCounter, 1000)
    // scoreText.setAttribute("style","display:block")
    // scoreBlock.setAttribute("style", "diplay:block");

}

// Clicking on the quiz alternatives will execute this function



function answerResult(userAnswer) {

    if (totalQuestion[indexQuestion].correct === userAnswer) {
        score++;
        scoreBlock.textNode = score;
        messageAnswer.textContent = "Your previous answer was correct!";


    }
    else {

        messageAnswer.textContent = "Your previous answer was wrong!";
    }

    count = "30";
    // console.log(score)

    if (indexQuestion < lastQuestion) {
        indexQuestion++;
        loadQuestion();
    }

    else {
        clearInterval(seconds);
        totalScore();

    }

   
}


function totalScore() {
    scoreText.setAttribute("style", "display:block");
    counter.setAttribute("style", "display:none");
    messageAnswer.setAttribute("style", "display:none");
    qa.setAttribute("style", "display:none");
    scoreBlock.setAttribute("style", "diplay:block");
    scoreBlock.setAttribute("style", "fontSize:40px;");
    scoreBlock.innerHTML = score;
    scoreList.setAttribute("style", "diplay:block");

      // Add new score to todos scoreArray
    scoresArray.push(score);
   // Store updated todos in localStorage, re-render the list
    storeScoresArray();
    renderScores();


}

//To record the scores
var scoresArray = [];
console.log(scoresArray);
init();



function renderScores() {

    // Clear scoreList element and update count scoresArray
    // ul.innerHTML = "";

    // Render a new li for each score
    for (var i = 0; i < scoresArray.length; i++) {
        var score = scoresArray[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        ul.appendChild(li);

    }

}

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("scoresArray"));

    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        scoresArray = storedScores;
    }

    // Render scores to the DOM
    renderScores();
}

function storeScoresArray() {
    // Stringify and set "scoresArray" key in localStorage to scores array
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
}



