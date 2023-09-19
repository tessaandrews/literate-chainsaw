
var startContainer= document.querySelector(".start-container")
var startBtn=document.getElementById("start-btn")
var quizContainer=document.querySelector(".quiz")
var btnGrid=document.querySelector(".answer-buttons")
var questionEl=document.getElementById("question")
var timeContainer= document.querySelector(".time-container")
var timeEl=document.getElementById("time")
var scoreEl=document.getElementById("score")
var userInput=document.querySelector("#user-input")
var userContainer= document.querySelector(".user-details")
var submitBtn=document.getElementById("submit")

var index=0;
var timeLeft = 60;
var timeId;
var score=0
var highScoresArr=[]






var questions = [
{
title: 'What does console . log do?:',
choices: ['its a function', 'its a loop', 'its a variable','it prints to the console'],
answer: 'it prints to the console',
},
{
title: 'What does <ol> mean in html?:',
choices: ['list', 'ordered list', 'paragraph', 'document'],
answer: 'ordered list',
},
{
title: 'What does <aside> do in html?:',
choices: ['sets the element to the side', 'hides the element', 'deletes it','debugs it'],
answer: 'sets the element to the side',
},
{
title: 'What does <b> mean?:',
choices: ['italics', 'bold', 'underlines', 'line break'],
answer: 'bold',
},
]

function countdown() {

    timeId =setInterval(function(){
        timeLeft--
        timeEl.textContent=timeLeft
        if (timeLeft == 0) {
            endQuiz()
        }
    },1000)   
   
    }
function showQuestions() {
  
    if(index === questions.length){
        endQuiz()
    }
    quizContainer.classList.replace("hide", "show")
    questionEl.textContent=questions[index].title
    btnGrid.innerHTML=""
    for (let i = 0; i < questions[index].choices.length; i++) {
       const btn =document.createElement("button")
       btn.setAttribute("class", "btn")
       btn.textContent=questions[index] .choices[i]
       btnGrid.append(btn)
        
    }
}

function checkAnswer(answer){
    if(answer ===questions[index].answer){
        index++
        score+=5
        scoreEl.textContent=score
        showQuestions()
    }else{
        index++
        timeLeft-=5
        showQuestions()
    }

}

function endQuiz(){
    clearInterval(timeId)
    quizContainer.style.display="none"
    userContainer.classList.replace("hide", "show")

}



startBtn.addEventListener("click",()=>{
    startContainer.classList.add("hide")
    timeContainer.classList.replace("hide", "show")
    countdown()
    showQuestions()
})

btnGrid.addEventListener("click", ()=>{
    var userChoice= this.event.target.textContent
    checkAnswer(userChoice);
})

submitBtn.addEventListener("click", ()=>{
    var userInitials =userInput.value
    highScoresArr=JSON.parse(localStorage.getItem("highScores")) || []

    if(userInitials !== ""){

        var user={
            initials: userInitials,
            score: score
        }

        highScoresArr.push(user)
        console.log(highScoresArr);
        localStorage.setItem("highScores", JSON.stringify(highScoresArr))
    }
})


