const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

// Example quiz questions (replace/add more)
const questions = [
  {
    question: "Which plant is best for boosting immunity?",
    options: ["Tulsi", "Aloe Vera", "Rose", "Mint"],
    answer: "Tulsi"
  },
  {
    question: "Which fruit is rich in Vitamin C?",
    options: ["Orange", "Banana", "Apple", "Guava"],
    answer: "Orange"
  },
  {
    question: "Which herb helps in digestion?",
    options: ["Ginger", "Basil", "Neem", "Aloe Vera"],
    answer: "Ginger"
  },
  {
    question: "Which herb is known for stress relief?",
    options: ["Ashwagandha", "Tulsi", "Mint", "Rosemary"],
    answer: "Ashwagandha"
  },
  {
    question: "Which fruit improves eye health?",
    options: ["Blueberry", "Banana", "Papaya", "Watermelon"],
    answer: "Blueberry"
  },
  {
    question: "Which plant is good for skin health?",
    options: ["Aloe Vera", "Neem", "Tulsi", "Basil"],
    answer: "Aloe Vera"
  },
  {
    question: "Which herb supports heart health?",
    options: ["Garlic", "Mint", "Rosemary", "Tulsi"],
    answer: "Garlic"
  },
  {
    question: "Which fruit is a natural laxative?",
    options: ["Papaya", "Apple", "Guava", "Banana"],
    answer: "Papaya"
  },
  {
    question: "Which herb is known for anti-inflammatory properties?",
    options: ["Turmeric", "Tulsi", "Mint", "Aloe Vera"],
    answer: "Turmeric"
  },
  {
    question: "Which plant helps improve memory?",
    options: ["Ginkgo Biloba", "Mint", "Tulsi", "Ashwagandha"],
    answer: "Ginkgo Biloba"
  },
  {
    question: "Which fruit helps in reducing cholesterol?",
    options: ["Avocado", "Apple", "Orange", "Banana"],
    answer: "Avocado"
  },
  {
    question: "Which herb is used for respiratory health?",
    options: ["Thyme", "Mint", "Tulsi", "Basil"],
    answer: "Tulsi"
  }
];

// Randomize and pick 10 questions
const quizQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);

function loadQuestion() {
  const current = quizQuestions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${current.question}`;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(option));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(option) {
  const current = quizQuestions[currentQuestion];
  if (option === current.answer) score++;
  nextBtn.style.display = "block";
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  nextBtn.style.display = "none";

  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${quizQuestions.length}</p>
    <button onclick="location.reload()">Play Again</button>
  `;
}

// Initial load
loadQuestion();
