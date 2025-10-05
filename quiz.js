function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  // Check if an option is selected
  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
