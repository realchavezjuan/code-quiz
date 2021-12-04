var centerDiv = document.querySelector(".center-div");

var beginQuiz = function (){

    // var questions = [
    //     {
    //         1: "How much is 2 + 2?",
    //         answers: {
    //             a: "3",
    //             c: "1",
    //             d: "0"
    //         },
    //         correctAnswer: {
    //             b: "4"
    //         }
    //     },
    //     {
    //         2: "what is 2 x 2?",
    //         answers: {
    //             a: "0",
    //             c: "6",
    //             d: "3"
    //         },
    //         correctAnswer: {
    //             b: "4"
    //         }
    //     },
    //     {
    //         3: "what is 2 - 2?",
    //         answers: {
    //             a: "2",
    //             c: "8",
    //             d: "1"
    //         },
    //         correctAnswer: {
    //             b: "0"
    //         }
    //     },
    //     {
    //         4: "what is 2 / 2?",
    //         answers: {
    //             a: "3",
    //             c: "0",
    //             d: "5"
    //         },
    //         correctAnswer: {
    //             b: "1"
    //         }
    //     }
    // ];

    var questions = [
        "whats two plus two?",
        "whats 2 minus 2",
        "whats 2 divided by 2",
        "whats 2 times 2"
    ];

    var answers = [
        {
            a: "3",
            c: "1",
            d: "0"
        },
        {
            a: "4",
            c: "6",
            d: "3"
        },
        {
            a: "0",
            c: "5",
            d: "1"
        },
        {
            a: "3",
            c: "0",
            d: "5"
        }
    ];
    
    for (var i = 0; i<answers.length; i++){
        console.log("this is by index: " + JSON.stringify(answers[i]));

        for(letter in answers[i]){
            console.log(answers[i][letter]);
        }

    }

        // creates answer buttons
        var btnA = document.createElement("button");
        btnA.innerHTML = "A";
        btnA.className = "answerBtn";
        centerDiv.appendChild(btnA);

        var btnB = document.createElement("button");
        btnB.innerHTML = "B";
        btnB.className = "answerBtn";
        centerDiv.appendChild(btnB);

        var btnC = document.createElement("button");
        btnC.innerHTML = "C";
        btnC.className = "answerBtn";
        centerDiv.appendChild(btnC);

        var btnD = document.createElement("button");
        btnD.innerHTML = "D";
        btnD.className = "answerBtn";
        centerDiv.appendChild(btnD);

    for (var i = 0; i<questions.length; i++){

        //asks the question
        var questionOne = document.createElement("h2");
        questionOne.innerHTML = questions[i];
        centerDiv.appendChild(questionOne);

        // redefines text in answer buttons
        btnA.innerHTML = "a";

        btnB.innerHTML = "B";

        btnC.innerHTML = "C";
   
        btnD.innerHTML = "D";
    }
}

var start = function(){
    var centerDiv = document.querySelector(".center-div");

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

    centerDiv.addEventListener("click", function() {
        console.log("hello");
        title.remove();
        description.remove();
        startBtn.remove();
        beginQuiz();
    });
}

start();

//when start button is pressed, ask a question
// question will have 4 options
//3 answers will be wrong and have an id of wrong
//1 answer will be right and have an id of correct
//when you answer question, determine if its right or wrong
//if wrong, subtract time and ask a different question
//if right, ask a different question 