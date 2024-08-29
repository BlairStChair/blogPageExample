const questionName = document.querySelector("#questionName");
const questionAnswers = document.querySelector("#questionAnswers");
const quizHeader = document.querySelector("#quizHeader");
const quizDesc = document.querySelector("#quizDesc");
const quizBtnContainer = document.querySelector("#quizBtnContainer");

let questionsArray = ["What type of location do you have available in your home?", "Do you prefer an easy-to-grow plant or something more challenging?"];
let answerArray = ["Sunny; Sunny, but with diffused ligth; Shady", "Easy to grow; Challenging"];

let readyAnswers = [];

let answersCount = [];

let questionNumber = -1;

//function to separate question's answers
function separateAnswer(n){
    readyAnswers = answerArray[n].split(';');
    return readyAnswers;
}

const startQuiz = document.querySelector("#startQuiz");

let nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.id = "startQuiz";
    nextQuestionBtn.textContent = "Next Question";

let question = document.createElement("h2");

startQuiz.addEventListener("click", () => {
    questionNumber++;

    quizHeader.remove();
    quizDesc.remove();
    startQuiz.remove();

    
    question.textContent = questionsArray[questionNumber];
    questionName.appendChild(question);

    let answersList = document.createElement("ul");
    questionAnswers.appendChild(answersList);
    
    let firstQuestionAnswers = separateAnswer(0);

    let divForAnswersDivs = document.createElement("div");
        divForAnswersDivs.id = "divForAnswersDivs";
        questionAnswers.appendChild(divForAnswersDivs);

        divForAnswersDivs.appendChild(answersList);

    for(let i = 0; i < firstQuestionAnswers.length; i++){
        let answersDivs = document.createElement("div");
        answersDivs.className = "answersDivs";
        answersList.appendChild(answersDivs);

        let label = document.createElement("label");
        label.textContent = readyAnswers[i].trim();
    
        answersDivs.appendChild(label);
    
        let br = document.createElement("br"); 
        answersDivs.appendChild(br);
    }

    
    quizBtnContainer.appendChild(nextQuestionBtn);

    
});

nextQuestionBtn.addEventListener("click", () =>{
    questionNumber++;

    question.textContent = questionsArray[questionNumber];
    questionName.appendChild(question);

    while (questionAnswers.firstChild) {
        questionAnswers.removeChild(questionAnswers.firstChild);
    }

    let currentQuestionAnswers = separateAnswer(questionNumber);

    let answersList = document.createElement("ul");
    questionAnswers.appendChild(answersList);

    let divForAnswersDivs = document.createElement("div");
    divForAnswersDivs.id = "divForAnswersDivs";
    questionAnswers.appendChild(divForAnswersDivs);
    divForAnswersDivs.appendChild(answersList);

    for (let i = 0; i < currentQuestionAnswers.length; i++) {
        let answersDivs = document.createElement("div");
        answersDivs.className = "answersDivs";
        answersList.appendChild(answersDivs);

        let label = document.createElement("label");
        label.textContent = currentQuestionAnswers[i].trim();
    
        answersDivs.appendChild(label);
    
        let br = document.createElement("br"); 
        answersDivs.appendChild(br);
    }
});