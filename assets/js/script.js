// all elements created in script.js get appended to center div
var centerDiv = document.querySelector(".center-div");
//timer element
var timerEl = document.getElementById("timer");
// +1 as each question is answered
var index = 0;
// +1 after every correct answer
var correctAnswers = 0;
// creates question element
var questionEl = document.createElement("h2");
//creates asnwer button elements
var btnA = document.createElement("button");
btnA.className = "answerBtn";
var btnB = document.createElement("button");
btnB.className = "answerBtn";
var btnC = document.createElement("button");
btnC.className = "answerBtn";
var btnD = document.createElement("button");
btnD.className = "answerBtn";

// global array of answers. Allows all functions to access.
var answers = [
    {
        allAnswers:{
            a: "68",
            b: "64",
            c: "96",
            d: "72"
        },
        correctAnswer: "72"
    },
    {
        allAnswers:{
            a: "9",
            b: "10",
            c: "11",
            d: "13"
        },
        correctAnswer: "11"
    },
    {
        allAnswers:{
            a: "Lincoln",
            b: "Pierre",
            c: "Bismarck",
            d: "Cheyenne"
        },
        correctAnswer: "Pierre"
    },
    {
        allAnswers:{
            a: "1984",
            b: "1992",
            c: "1991",
            d: "1986"
        },
        correctAnswer: "1984"
    }
];
//timer 
var count = 30;
var counter;

var timer = function() {

    count = count - 1;

    if (count <= 0) {
        clearInterval(counter); //ends counter
        highscore();
    }

    //Do code for showing the number of seconds here
    timerEl.innerText = count;
}

var theQuiz = function (event){

    //creates questions
    var questions = [
        "What is 8 x 9?",
        "What is 121 / 11?",
        "What is the capital of South Dekota?",
        "In what year was the first Machintosh Computer introduced?"
    ];

    // redefines text in question element
    questionEl.innerHTML = questions[index];
    centerDiv.appendChild(questionEl);

    // redefines text in answer buttons
    btnA.innerHTML = answers[index].allAnswers.a;
    centerDiv.appendChild(btnA);

    btnB.innerHTML = answers[index].allAnswers.b;
    centerDiv.appendChild(btnB);

    btnC.innerHTML = answers[index].allAnswers.c;
    centerDiv.appendChild(btnC);

    btnD.innerHTML = answers[index].allAnswers.d;
    centerDiv.appendChild(btnD);

    console.log("You are on question " + (index + 1) + "/4"); 

    //computer expects user to click a button
    btnA.addEventListener("click", nextQuestion);
    btnB.addEventListener("click", nextQuestion);
    btnC.addEventListener("click", nextQuestion);
    btnD.addEventListener("click", nextQuestion);

}

var nextQuestion = function(event) {

    var answerBtnEl = event.target;
    answerBtnEl = answerBtnEl.innerHTML;

    if (answerBtnEl === answers[index].correctAnswer){
        correctAnswers++;
        console.log("CORRECT");
    }
    else{
        console.log("WRONG");
        count = count - 5;
    }
    
    index++;

    questionEl.remove();
    btnA.remove();
    btnB.remove();
    btnC.remove();
    btnD.remove();

    if (index <= 3 ){
        theQuiz();
        
    }
    else {
        highscore();
    }

}

var highscore = function() {
    clearInterval(counter);
    timerEl.innerText = "0";
    centerDiv.appendChild(questionEl);
    questionEl.innerHTML = "Your Score: " + correctAnswers + "/4";
    btnA.remove();
    btnB.remove();
    btnC.remove();
    btnD.remove();

    console.log("Your Score: " + correctAnswers + "/4");

    // check for local High Score
    var highScore = localStorage.getItem("High Score: ");
    if(highScore === null) {
        highScore = 0;
    }

    // create a high score element
    var highScoreEl = document.createElement("h2");
    centerDiv.appendChild(highScoreEl);

    //New high score
    if (correctAnswers > highScore){

        //ask for persons name
        var person = prompt("Add your name to the high score!");

        //cant leave prompt blank
        if (person!=null){
            localStorage.setItem("highScore", correctAnswers);
            localStorage.setItem("person", person);
            highScore = localStorage.getItem("highScore");
            person = localStorage.getItem("person");
            highScoreEl.innerHTML = "The High Score: " + highScore + "/4 by " + person;
        }
    }
    //if no new high score, print old high score
    else{
    highScoreEl.innerHTML = "The High Score: " + highScore + "/4 by " + person;
    }

}

var welcomePage = function(event){

    //displays timer
    timerEl.innerText = "30";

    //creates home title
    var title = document.createElement("h1");
    title.innerHTML = "Code-Quiz";
    centerDiv.appendChild(title);

    //creates home description
    var description = document.createElement("p");
    description.innerHTML = "Welcome to code-quiz!";
    centerDiv.appendChild(description);

    //creates home start button
    var startBtn = document.createElement("button");
    startBtn.id = "startBtn";
    startBtn.innerHTML = "START";
    centerDiv.appendChild(startBtn);

    startBtn.addEventListener("click", function() {
        title.remove();
        description.remove();
        startBtn.remove();
        theQuiz();
        //1000 will  run it every 1 second
        counter = setInterval(timer, 1000);
    });
}

welcomePage();
