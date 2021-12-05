// all elements created in script.js get appended to center div
var centerDiv = document.querySelector(".center-div");
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
            a: "3",
            b: "1",
            c: "0",
            d: "4"
        },
        correctAnswer: "4"
    },
    {
        allAnswers:{
            a: "4",
            b: "6",
            c: "3",
            d: "0"
        },
        correctAnswer: "0"
    },
    {
        allAnswers:{
            a: "0",
            b: "5",
            c: "4",
            d: "1"
        },
        correctAnswer: "1"
    },
    {
        allAnswers:{
            a: "3",
            b: "0",
            c: "5",
            d: "4"
        },
        correctAnswer: "4"
    }
];

var startQuiz = function (event){

    //creates questions
    var questions = [
        "whats two plus two?",
        "whats 2 minus 2",
        "whats 2 divided by 2",
        "whats 2 times 2"
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
    btnA.addEventListener("click", userResponds);
    btnB.addEventListener("click", userResponds);
    btnC.addEventListener("click", userResponds);
    btnD.addEventListener("click", userResponds);

}

var userResponds = function(event) {

    var answerBtnEl = event.target;
    answerBtnEl = answerBtnEl.innerHTML;

    if (answerBtnEl === answers[index].correctAnswer){
        correctAnswers++;
        console.log("CORRECT");
    }
    else{
        console.log("WRONG");
    }
    
    index++;

    questionEl.remove();
    btnA.remove();
    btnB.remove();
    btnC.remove();
    btnD.remove();

    if (index <= 3 ){
        startQuiz();
        
    }
    else {
        highscore();
    }

}

var highscore = function() { 
    console.log("Your Score: " + correctAnswers + "/4");
    var questionEl = document.createElement("h2");
    questionEl.innerHTML = "Your Score: " + (correctAnswers + 1) + "/4";
    centerDiv.appendChild(questionEl);
}

var welcomePage = function(event){

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
        startQuiz();
    });
}

welcomePage();

//when start button is pressed, ask a question
// question will have 4 options
//3 answers will be wrong and have an id of wrong
//1 answer will be right and have an id of correct
//when you answer question, determine if its right or wrong
//if wrong, subtract time and ask a different question
//if right, ask a different question 