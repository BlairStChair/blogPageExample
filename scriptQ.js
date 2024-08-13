const questionName = document.querySelector("#questionName");
const questionAnswers = document.querySelector("#questionAnswers");
const quizHeader = document.querySelector("#quizHeader");
const quizDesc = document.querySelector("#quizDesc");

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

    let question = document.createElement("h2");
    question.textContent = questionsArray[0];
    questionName.appendChild(question);

    let answersList = document.createElement("ul");
    questionAnswers.appendChild(answersList);
    
    let firstQuestionAnswers = separateAnswer(0);

    for(let i = 0; i < firstQuestionAnswers.length; i++){
        let answersItems = document.createElement("input");
        answersItems.type = 'radio';
        answersItems.name = 'quizAnswer';  
        answersItems.value = readyAnswers[i];

        let label = document.createElement("label");
        label.textContent = readyAnswers[i].trim();
    
        answersList.appendChild(answersItems);
        answersList.appendChild(label);
    
        let br = document.createElement("br"); 
        answersList.appendChild(br);
    }
});