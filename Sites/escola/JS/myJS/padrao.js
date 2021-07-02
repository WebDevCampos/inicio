const form = document.querySelector("form");
const submitAnswers = (event) => {
  event.preventDefault();
  const correctAnswer = ["A", "B", "B", "A"];
  let score = 0;
  const userAnswer = [
    event.target.answer1,
    event.target.answer2,
    event.target.answer3,
    event.target.answer4,
  ];

  userAnswer.forEach((item, index) => {
    if (item.value === correctAnswer[index]) {
      score += 25;
    }
  });

  const showScore = document.querySelector("#showScore");
  const points = document.querySelector(".points");

  showScore.classList.remove("d-none");
  points.textContent = `${score}`;

  scrollTo(0, 0);
};

form.addEventListener("submit", submitAnswers);

const name = 'Marcus'
