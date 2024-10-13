function checkAnswer() {
    const correctAnswer = "4"; // The correct answer to the quiz
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Display feedback based on the user's answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button to check the answer when clicked
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
