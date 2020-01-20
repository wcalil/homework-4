
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
]

// Variables to make the page load

var indexQuestion = 0;
var lastQuestion = totalQuestion.length - 1;

function loadQuestion() {
    question.innerHTML = "<h3>" + totalQuestion[indexQuestion].question + "</h3>";
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
    loadQuestion();
    quizCounter()
    seconds = setInterval(quizCounter, 1000)

}

// Clicking on the quiz alternatives will execute this function



function answerResult(userAnswer) {

    if ( userAnswer == totalQuestion[indexQuestion].correct) {
        score++
        // scoreBlock.textNode = score;
        // messageAnswer.textNode = "Your answer is correct!"
       

    }
    else {
        
        messageAnswer.textNode = "Your answer is wrong!"
    }
    
    count = "30";
    console.log(score)

    if (indexQuestion < lastQuestion){
    indexQuestion++;
    loadQuestion()
    }

    else{
    clearInterval(seconds)
    totalScore()
    
    }

}



function totalScore(){
    scoreText.setAttribute("style","display:block")
    counter.setAttribute("style","display:none")
    messageAnswer.setAttribute("style", "display:none");
    qa.setAttribute("style", "display:none");
    scoreBlock.setAttribute("style", "diplay:block");
    scoreBlock.setAttribute("style", "fontSize:40px;");
    scoreBlock.innerHTML = score;
}

