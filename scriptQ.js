const questionName = document.querySelector("#questionName");
const questionAnswers = document.querySelector("#questionAnswers");
const quizHeader = document.querySelector("#quizHeader");
const quizDesc = document.querySelector("#quizDesc");
const quizBtnContainer = document.querySelector("#quizBtnContainer");

//question's and asnwer's arrays
let questionsArray = ["What type of location do you have available in your home?", 
                    "Do you prefer an easy-to-grow plant or something more challenging?",
                    "What is the average lowest temperature in your house?",
                    "How often are you able to water the plant?",
                    "Can you provide the plant with the dormancy period? (from late autumn to early spring, the plant should be placed in a location with a temperature below 15°C and access to light - such as garage, basement or shed. This will allow the plant to grow vigorously)"];

let answerArray = ["Sunny;Sunny, but with diffused light;Shady",
                "Easy to grow;Challenging",
                "<15°C;>15°C",
                "Rarely;Moderately often;Very often",
                "Yes;No"];

//arrays for comparing chosen answers to a plant
//sundew
let sundewAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Very often", "Yes"];
let sundewAnswers2 = ["Sunny", "Easy to grow", ">15°C", "Very often", "No"];
let sundewAnswers3 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Very often", "Yes"];
let sundewAnswers4 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Very often", "No"];

//venus flytrap
let venusFlytrapAnswers1 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "Yes"];
let venusFlytrapAnswers2 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "No"];
let venusFlytrapAnswers3 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let venusFlytrapAnswers4 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "No"];
let venusFlytrapAnswers5 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "Yes"];
let venusFlytrapAnswers6 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "No"];
let venusFlytrapAnswers7 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let venusFlytrapAnswers8 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//trumpet pitcher
let trumpetPitcherAnswers1 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "Yes"];
let trumpetPitcherAnswers2 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "No"];
let trumpetPitcherAnswers3 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let trumpetPitcherAnswers4 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "No"];
let trumpetPitcherAnswers5 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "Yes"];
let trumpetPitcherAnswers6 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "No"];
let trumpetPitcherAnswers7 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let trumpetPitcherAnswers8 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//pitcher plant
let pitcherPlantAnswers1 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let pitcherPlantAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//pinguicula
let pinguiculaAnswers = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Rarely", "Yes"];

//cephalotus
let cephalotusAnswers = ["Sunny, but with diffused light", "Challenging", ">15°C", "Moderately often", "Yes"];

//darlingtonia
let darlingtoniaAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let darlingtoniaAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];

//heliamphora
let heliamphoraAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let heliamphoraAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];

//ultricularia
let ultriculariaAnswers1 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
let ultriculariaAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];


let answersCount = [];

let questionNumber = -1;

//function to separate question's answers
let readyAnswers = [];

function separateAnswer(n){
    readyAnswers = answerArray[n].split(';');
    return readyAnswers;
}

const startQuiz = document.querySelector("#startQuiz");

let nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.id = "startQuiz";
    nextQuestionBtn.textContent = "Next Question";

let previousQuestionBtn = document.createElement("button");
    previousQuestionBtn.id = "startQuiz";
    previousQuestionBtn.textContent = "Previous Question"

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
    
    let firstQuestionAnswers = separateAnswer(questionNumber);

    let divForAnswersDivs = document.createElement("div");
        divForAnswersDivs.id = "divForAnswersDivs";
        questionAnswers.appendChild(divForAnswersDivs);

        divForAnswersDivs.appendChild(answersList);

    for(let i = 0; i < firstQuestionAnswers.length; i++){
        let answersDivs = document.createElement("button");
        answersDivs.className = "answersDivs";
        answersDivs.id = "answer" + i;
        answersDivs.value = firstQuestionAnswers[i];
        answersList.appendChild(answersDivs);

        let label = document.createElement("label");
        label.textContent = readyAnswers[i].trim();
    
        answersDivs.appendChild(label);
    
        let br = document.createElement("br"); 
        answersDivs.appendChild(br);

        answersDivs.addEventListener("click", () => {
            answersCount[questionNumber] = answersDivs.value;
            console.log(answersCount[questionNumber]);
        });
    }

    quizBtnContainer.appendChild(nextQuestionBtn);

});



nextQuestionBtn.addEventListener("click", () =>{
    if(answersCount[questionNumber] == null){
        alert("You can't continue without choosing your answer!");
        return;
    }

    if(questionNumber < 4){
    questionNumber++;

    question.textContent = questionsArray[questionNumber];
    questionName.appendChild(question);

    while (questionAnswers.firstChild) {
        questionAnswers.removeChild(questionAnswers.firstChild);
    }

    let currentQuestionAnswers = separateAnswer(questionNumber);

    let firstQuestionAnswers = separateAnswer(questionNumber);

    let answersList = document.createElement("ul");
    questionAnswers.appendChild(answersList);

    let divForAnswersDivs = document.createElement("div");
    divForAnswersDivs.id = "divForAnswersDivs";
    questionAnswers.appendChild(divForAnswersDivs);
    divForAnswersDivs.appendChild(answersList);

    for (let i = 0; i < currentQuestionAnswers.length; i++) {
        let answersDivs = document.createElement("button");
        answersDivs.className = "answersDivs";
        answersDivs.value = firstQuestionAnswers[i];
        answersList.appendChild(answersDivs);

        let label = document.createElement("label");
        label.textContent = currentQuestionAnswers[i].trim();
    
        answersDivs.appendChild(label);
    
        let br = document.createElement("br"); 
        answersDivs.appendChild(br);

        answersDivs.addEventListener("click", () => {
            answersCount[questionNumber] = answersDivs.value;
            console.log(answersCount[questionNumber]);
        });
    }
    quizBtnContainer.insertBefore(previousQuestionBtn, nextQuestionBtn);
    }else{
    question.remove();
    divForAnswersDivs.remove();
    previousQuestionBtn.remove();
    nextQuestionBtn.remove();
    quizBtnContainer.remove();

    let resultsHeading = document.createElement("h2");
    resultsHeading.textContent = "Here are your results!";
    questionName.appendChild(resultsHeading);

    let plantPhoto = document.createElement("div");
    plantPhoto.id = "plantPhoto";

    let plantHeading = document.createElement("h2");
    plantHeading.id = "plantHeading";

    let plantDesc = document.createElement("p");
    plantDesc.id = "plantDesc";

    let answersCountString = answersCount.join(",");

    //function to compare answers with possible plant matches
    function matchPlant(plantAnswers) {
        return plantAnswers.some(answers => answersCountString === answers.join(","));
    }

    //array that's storing plants which are matching with user's answers
    let matchingPlants = [];

    //getting the results
    
    if (matchPlant([sundewAnswers1, sundewAnswers2, sundewAnswers3, sundewAnswers4])) {
        matchingPlants.push("Sundew");
    }
    
    if (matchPlant([venusFlytrapAnswers1, venusFlytrapAnswers2, venusFlytrapAnswers3, venusFlytrapAnswers4, venusFlytrapAnswers5, venusFlytrapAnswers6, venusFlytrapAnswers7, venusFlytrapAnswers8])) {
        matchingPlants.push("Venus Flytrap");
    }
    
    if (matchPlant([trumpetPitcherAnswers1, trumpetPitcherAnswers2, trumpetPitcherAnswers3, trumpetPitcherAnswers4, trumpetPitcherAnswers5, trumpetPitcherAnswers6, trumpetPitcherAnswers7, trumpetPitcherAnswers8])) {
        matchingPlants.push("Trumpet Pitcher");
    }
    
    if (matchPlant([pitcherPlantAnswers1, pitcherPlantAnswers2])) {
        matchingPlants.push("Pitcher Plant");
    }
    
    if (matchPlant([pinguiculaAnswers])) {
        matchingPlants.push("Pinguicula");
    }
    
    if (matchPlant([cephalotusAnswers])) {
        matchingPlants.push("Cephalotus");
    }
    
    if (matchPlant([darlingtoniaAnswers1, darlingtoniaAnswers2])) {
        matchingPlants.push("Darlingtonia");
    }
    
    if (matchPlant([heliamphoraAnswers1, heliamphoraAnswers2])) {
        matchingPlants.push("Heliamphora");
    }
    
    if (matchPlant([ultriculariaAnswers1, ultriculariaAnswers2])) {
        matchingPlants.push("Ultricularia");
    }
    
    // Wyświetlanie wyników
    if (matchingPlants.length > 0) {
        console.log("Your matching plants are: " + matchingPlants.join(", "));
    } else {
        console.log("No matching plant found.");
    }
    

    //test what is saved in answersCount array
    answersCount.forEach(function(entry) {
        console.log(entry);
      });
    console.log("User answers: ", answersCountString);
    console.log("Sundew answers: ", sundewAnswers1.join(","));
    }
});

previousQuestionBtn.addEventListener("click", () => {
    if(answersCount[questionNumber] == null){
        alert("You can't continue without choosing your answer!");
        return;
    }
    
    if(questionNumber > 0){
    questionNumber--;

    question.textContent = questionsArray[questionNumber];
    questionName.appendChild(question);

    while (questionAnswers.firstChild) {
        questionAnswers.removeChild(questionAnswers.firstChild);
    }

    let currentQuestionAnswers = separateAnswer(questionNumber);

    let firstQuestionAnswers = separateAnswer(questionNumber);

    let answersList = document.createElement("ul");
    questionAnswers.appendChild(answersList);

    let divForAnswersDivs = document.createElement("div");
    divForAnswersDivs.id = "divForAnswersDivs";
    questionAnswers.appendChild(divForAnswersDivs);
    divForAnswersDivs.appendChild(answersList);

    for (let i = 0; i < currentQuestionAnswers.length; i++) {
        let answersDivs = document.createElement("button");
        answersDivs.className = "answersDivs";
        answersDivs.value = firstQuestionAnswers[i];
        answersList.appendChild(answersDivs);

        let label = document.createElement("label");
        label.textContent = currentQuestionAnswers[i].trim();
    
        answersDivs.appendChild(label);
    
        let br = document.createElement("br"); 
        answersDivs.appendChild(br);

        answersDivs.addEventListener("click", () => {
            answersCount[questionNumber] = answersDivs.value;
            console.log(answersCount[questionNumber]);
        });
    }}else{
        location.reload();
    }
});