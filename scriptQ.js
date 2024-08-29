const questionName = document.querySelector("#questionName");
const questionAnswers = document.querySelector("#questionAnswers");
const quizHeader = document.querySelector("#quizHeader");
const quizDesc = document.querySelector("#quizDesc");
const quizBtnContainer = document.querySelector("#quizBtnContainer");

let questionsArray = ["What type of location do you have available in your home?"];
let answerArray = ["Sunny; Sunny, but with diffused ligth; Shady"];

let readyAnswers = [];

//function to separate question's answers
function separateAnswer(n){
    readyAnswers = answerArray[n].split(';');
    return readyAnswers;
}

const startQuiz = document.querySelector("#startQuiz");

startQuiz.addEventListener("click", () => {
    quizHeader.remove();
    quizDesc.remove();
    startQuiz.remove();

    let question = document.createElement("h2");
    question.textContent = questionsArray[0];
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

    let nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.id = "startQuiz";
    nextQuestionBtn.textContent = "Next Question";
    quizBtnContainer.appendChild(nextQuestionBtn);
});