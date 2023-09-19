
var timeLeft = 30;
var elem= document.getElementById('time');
var timeId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timeId);
        doSomething();
    } else {
        elem.innterHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }
    }




var questions = [
{
title: 'Commonly used?:',
choices: ['yes', 'no', 'maybe'],
answer: 'yes',
},
{
title: 'Commonly used?:',
choices: ['yes', 'no', 'maybe'],
answer: 'yes',
},
{
title: 'Commonly used?:',
choices: ['yes', 'no', 'maybe'],
answer: 'yes',
},
{
title: 'Commonly used?:',
choices: ['yes', 'no', 'maybe'],
answer: 'yes',
},
]


function showQuestions(questions, quizContainer); {

(var i = 0; i <questions.length; i ++) {
    answers= [];
    for (letter in questions[i].answers){
        answers.push (
            '<label>'
            + 'input type = '
        )
    }
}



    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);