var p1Button = document.querySelector("#p1");
var resetButton = document.querySelector("#reset");
var p2Button = document.querySelector("#p2");
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            span1.classList.add("winner");
            gameOver = true;
        }
        span1.innerHTML = p1Score;
    }

});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            span2.classList.add("winner");
            gameOver = true;
        }
        span2.innerHTML = p2Score;
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    span1.innerHTML = p1Score;
    span2.innerHTML = p2Score;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function () {
    reset();
    winningScoreDisplay.innerHTML = numInput.value;
    winningScore = Number(numInput.value);
});