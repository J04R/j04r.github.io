function startTest() {
    document.querySelector(".welcome").style.display = "none";
    document.querySelector("#question1").style.display = "block";
    document.querySelector(".continue-button").style.display = "block";
}

function showQuestion(questionNumber) {
    var currentQuestion = document.querySelector("#question" + questionNumber);
    currentQuestion.style.display = "block";
    var previousQuestion = document.querySelector("#question" + (questionNumber - 1));
    if (previousQuestion) {
        previousQuestion.style.display = "none";
   }
}
function showAnswer() {
    document.querySelector("#question2").style.display = "none";
    document.querySelector(".answer2").style.display = "none";
    document.querySelector("#question3").style.display = "block";
}

function checkAnswer() {
    var answer = document.getElementById("answer").value;
    if (answer.trim() === "") {
        alert("Please provide an answer.");
    } else {
  document.querySelector("#question3").style.display = "none";
  document.querySelector("#question4").style.display = "block";
    }
}
