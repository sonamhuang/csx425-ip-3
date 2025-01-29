// console.log('Individual Project 1, ready to start!');

let correctCount = 0;
let incorrectCount = 0;
let lives = 10;


function correct() {
    console.log("Good job!");
    correctCount++
    document.querySelector('#correct_count').innerHTML = correctCount;
    document.querySelector('#message').textContent = "Correct, good job!";
    if (lives === 0) {
        document.querySelector('#all_questions').innerHTML = "GAME OVER!";
        document.querySelector('#all_questions').classList.add("gameover"); 
    }
    if (correctCount === 5) {
        document.querySelector('#all_questions').innerHTML = "YOU WIN!";
        document.querySelector('#all_questions').classList.add("gameover"); 
    }
}

function incorrect() {
    console.log("Oh no...");
    incorrectCount++
    lives--
    document.querySelector('#lives_count').innerHTML = lives;
    document.querySelector('#incorrect_count').innerHTML = incorrectCount;
    document.querySelector('#message').textContent = "Incorrect! You lose a life!";
    if (lives === 0) {
        document.querySelector('#all_questions').innerHTML = "GAME OVER!";
        document.querySelector('#all_questions').classList.add("gameover"); 
    }
    if (correctCount === 6) {
        document.querySelector('#all_questions').innerHTML = "YOU WIN!";
        document.querySelector('#all_questions').classList.add("gameover"); 
    }
}
