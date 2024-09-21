const questions=[
    {question:"What is the capital of France?",
     answers:["(a)Berlin","(b)Madrid","(c)Paris","(d)Rome"],
     correct: "(c)Paris"
    },
    {question: "what is 2+2?",
     answers:['(a)3','(b)4','(c)5','(d)6'],
     correct: "(b)4"
    },
    {
      question: "What color is the sky?",
     answers: ['(a)Green','(b)Blue','(c)red','(d)yellow'],
     correct: '(b)Blue'
    }
];

let currentQuestionIndex=0;
let score=0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent= question.question;
    answersElement.innerHTML = '';

    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.textContent=answer;
        button.addEventListener('click', () => checkAnswer(answer));
        answersElement.appendChild(button);
    });

    nextButton.style.display = 'none';
    feedbackElement.textContent = '';
}

function checkAnswer(selectAnswer) {
    const correctAnswer= questions[currentQuestionIndex].correct;

    if (selectAnswer === correctAnswer) {
        feedbackElement.textContent='correct';
        score++;
    } else {
        feedbackElement.textContent='Wrong! The correct answer is '+ correctAnswer+'.'
    }
    nextButton.style.display = 'inline-block';
}

function showNextQuestion() {
    currentQuestionIndex++;

    if(currentQuestionIndex< questions.length){
        loadQuestion();
    }else{
        showFinalScore();
    }
}
function showFinalScore() {
    questionElement.textContent = 'Quiz Over!'; 
    answersElement.innerHTML ='';
    feedbackElement.textContent= '';
    nextButton.style.display= 'none';
    scoreElement.textContent= 'Your score is'  +  score  +  'out of' +  questions.length + '.';

}

nextButton.addEventListener("click",showNextQuestion);

loadQuestion();


