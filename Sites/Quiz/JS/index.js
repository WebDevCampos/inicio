const quizStart = document.querySelector(".quiz__start");

const quizBlock = document.querySelector(".quiz__block");

const allInputs = document.querySelectorAll("input");

const question = document.querySelectorAll(".question");

const next = document.querySelector(".next");

const send = document.querySelector(".send");

const form = document.querySelector("form");

let currentQuestion = 0;

let score = 0;

let points = document.querySelector(".points");

let finalMessage = document.querySelector(".message");

const startQuiz = () => {
	const displayQuestionBlock = () => {
		quizBlock.style.display = "block";
	};

	quizStart.addEventListener("click", displayQuestionBlock);
};

const selectAnswer = () => {
	const markAnswer = (input) => {
		const scoringPoints = (event) => {
			if (event.target.value === "B") {
				score += 25;
			}
			console.log(score);
		};

		input.addEventListener("input", scoringPoints);
	};

	allInputs.forEach(markAnswer);
};

const nextQuestion = () => {
	const showNextQuestion = (event) => {
		event.preventDefault();

		if (currentQuestion === question.length - 1) {
			currentQuestion = question.length - 1;
			return;
		} else {
			currentQuestion++;
		}

		if (currentQuestion === question.length - 1) {
			next.classList.remove("visi");

			send.classList.add("visi");
		}

		question.forEach((question) => {
			question.classList.remove("visi");
		});

		question[currentQuestion].classList.add("visi");
	};

	next.addEventListener("click", showNextQuestion);
};

const displayFinalMessage = () => {
	const sendPoints = (event) => {
		event.preventDefault();

		points.textContent = `${score} points.`;

		if (score === 100) {
			finalMessage.innerHTML = `WOW! ${score} points, you made it!!! <br/> Check your e-mail box for your Green Tickets!`;
			return;
		}
		finalMessage.innerHTML = `Better luck next time...`;
	};

	form.addEventListener("submit", sendPoints);
};

startQuiz(selectAnswer(nextQuestion(displayFinalMessage())));
