// QUESTION VARIABLES
var question1 = {

    text: "What does the * symbol represent in Javascript?",
    answers: ["Addition", "Subtraction", "Multiplication", "Purple"],
    correct: "Multiplication",
};

var question2 = {
    text: "What does an alert do?",
    answers: ["Shows a pop-up ad", "Shuts down browser", "Presents an alert with text", "Shows a video of cats"],
    correct: "Presents an alert with text",
};

var question3 = {

    text: "Variables are used to do what?",
    answers: ["Store Information", "Delete Information", "Hide Information", "Show a video of cats"],
    correct: "Store Information",
};

var question4 = {

    text: "What does HTML stand for?",
    answers: ["Hyper Theory Maker Living", "Hyper Text Markup Language", "Hot Tamale Magic Lovin'", "Hyper Tension Markup Linguistics"],
    correct: "Hyper Text Markup Language",

};

// COUNTDOWN STARTER NUMBER
var countDown = 60;

// MAIN FUNCTION FOR JAVASCRIPT
var start = function () {

    var welcome = document.getElementById('welcomeInfo');
    welcome.style.display = 'none';
    var questionEl = document.getElementById('question');
    questionEl.innerText = question1.text;

    var timer = setInterval(function () {
        countDown--;
        document.getElementById("timer").innerHTML = countDown;
    }, 1000);

    var buttons = document.getElementById("buttons")

    // FOR LOOP FOR ITERATING THROUGH QUESTIONS
    for (var i = 0; i < question1.answers.length; i++) {

        var createBtn = document.createElement('button');
        createBtn.innerText = question1.answers[i];
        createBtn.addEventListener("click", submit);
        buttons.appendChild(createBtn);

    };

    function submit(event) {
        // click event, stores the data, checks correct/incorrect answer (if incorrect, time is deducted, hide previous question and answer, display new question and answer choices //

        if (event.target.innerText !== question1.correct) {
            countDown = countDown - 5;

        } else {

            alert("Correct!")
            var questionEl = document.getElementById('question');
            questionEl.innerText = question2.text;

        };
    };




};

// EVENT LISTENER FOR START BUTTON
document.getElementById("start").addEventListener("click", start);














