function nextPage() {
    window.location.href = "http://127.0.0.1:5500/learning%20to%20make%20website/h.html"// Replace with your quiz page URL
}


const questions = [
    {
        question: "What is Navgurukul ?",
        answers: ["(a) A traditional school for higher education", "(b) A government program for rural development", "(c) . A non-profit organization providing free technical education to underserved communities", "(d) A private company offering online courses for professionals"],
        correct: "A non-profit organization providing free technical education to underserved communities"
    },
    {
        question: " Who founded Navgurukul ?",
        answers: ["(a) Ritesh Agarwal", "(b) Abhishek Gupta", "(c)  Sonal Kapoor", "(d)  Sundar Pichai"],
        correct: "Abhishek Gupta"
    },
    {
        question: "In which year was Navgurukul started?",
        answers: ["(a) 2015", "(b) 2016", "(c) 2017", "(d) 2019"],
        correct: "2016"
    },
    {
        question:"What is the mission or vision of Navgurukul?",
        answers: ["(a) To provide luxury education to students","(b)To make quality education accessible to underprivileged students","(c) To create entrepreneurs in every city","(d)To build schools across rural India"],
        correct:"To make quality education accessible to underprivileged students"
    },
    {
        question:"What is the duration of the courses at Navgurukul ?",
        answers:["(a)2 Year","(b)3 Year","(c)18 Month","(d)4 Year"],
        correct:"18 Month"
    },
    {
        question:"What kind of students can join Navgurukul ?",
        answers:["(a) Only college graduates","(b) Students from low-income families","(c)Only students with previous coding experience","(d)Students who are already employed"],
        correct:"Students from low-income families"
    },
    {
        question:" How does Navgurukul support students after course completion ?",
        answers:["(a) By providing them with job placements","(b) By giving them further scholarships","(c)By enrolling them in another course","(d)By helping them start their own business"],
        correct:"By providing them with job placements"
    },
    {
        question:"What is the admission process to join Navgurukul ?",
        answers:["(a)Written exam only","(b)Interview only","(c)Written exam followed by an interview","(d)Direct admission based on application"],
        correct:"Written exam followed by an interview"
    },
    {
        question:"What is unique about the Navgurukul learning model ?",
        answers:["(a) It charges high tuition fees","(b)It follows a peer-learning and self-paced model","(c) It has a strict teacher-led approach","(d)It focuses only on traditional subjects"],
        correct:"It follows a peer-learning and self-paced model"
    },
    {
        question:" What courses are offered at Navgurukul ?",
        answers:["(a)Medicine and Engineering","(b)Web Development and Data Science","(c)Arts and Humanities","(d)Sports Management and Fitness"],
        correct:"(b)Web Development and Data Science"}

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(button, answer));
        answersElement.appendChild(button);
    });

    nextButton.style.display = 'none';
    feedbackElement.textContent = '';
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer.includes(correctAnswer)) {
        feedbackElement.textContent = 'Correct!';
        score++;
        button.classList.add('correct-answer');
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
        button.classList.add('wrong-answer');
    }

    nextButton.style.display = 'inline-block';
}

function showNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = 'Quiz Over!';
    answersElement.innerHTML = '';
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
}

nextButton.addEventListener('click', showNextQuestion);

loadQuestion();





