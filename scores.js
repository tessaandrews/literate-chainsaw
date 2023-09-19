var highScores= JSON.parse(localStorage.getItem("highScores")) || []
var scoreList= document.getElementById("scores-list")


for (let i = 0; i < highScores.length; i++) {
   
    const li =document.createElement("li")
    li.textContent= `Initials: ${highScores[i].initials}  score:${highScores[i].score}`
    scoreList.append(li)
}