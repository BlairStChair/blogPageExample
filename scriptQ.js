const questionName = document.querySelector("#questionName");
const questionAnswers = document.querySelector("#questionAnswers");
const quizHeader = document.querySelector("#quizHeader");
const quizDesc = document.querySelector("#quizDesc");
const quizBtnContainer = document.querySelector("#quizBtnContainer");

//question's and asnwer's arrays
const questionsArray = ["What type of location do you have available in your home?", 
                    "Do you prefer an easy-to-grow plant or something more challenging?",
                    "What is the average lowest temperature in your house?",
                    "How often are you able to water the plant?",
                    "Can you provide the plant with the dormancy period? (from late autumn to early spring, the plant should be placed in a location with a temperature below 15°C and access to light - such as garage, basement or shed. This will allow the plant to grow vigorously)"];

const answerArray = ["Sunny;Sunny, but with diffused light;Shady",
                "Easy to grow;Challenging",
                "<15°C;>15°C",
                "Rarely;Moderately often;Very often",
                "Yes;No"];

//arrays for comparing chosen answers to a plant
//sundew
const sundewAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Very often", "Yes"];
const sundewAnswers2 = ["Sunny", "Easy to grow", ">15°C", "Very often", "No"];
const sundewAnswers3 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Very often", "Yes"];
const sundewAnswers4 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Very often", "No"];

//venus flytrap
const venusFlytrapAnswers1 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "Yes"];
const venusFlytrapAnswers2 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "No"];
const venusFlytrapAnswers3 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const venusFlytrapAnswers4 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "No"];
const venusFlytrapAnswers5 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "Yes"];
const venusFlytrapAnswers6 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "No"];
const venusFlytrapAnswers7 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const venusFlytrapAnswers8 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//trumpet pitcher
const trumpetPitcherAnswers1 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "Yes"];
const trumpetPitcherAnswers2 = ["Sunny", "Easy to grow", "<15°C", "Moderately often", "No"];
const trumpetPitcherAnswers3 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const trumpetPitcherAnswers4 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "No"];
const trumpetPitcherAnswers5 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "Yes"];
const trumpetPitcherAnswers6 = ["Sunny, but with diffused light", "Easy to grow", "<15°C", "Moderately often", "No"];
const trumpetPitcherAnswers7 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const trumpetPitcherAnswers8 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//pitcher plant
const pitcherPlantAnswers1 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const pitcherPlantAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//pinguicula
const pinguiculaAnswers = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Rarely", "Yes"];

//cephalotus
const cephalotusAnswers = ["Sunny, but with diffused light", "Challenging", ">15°C", "Moderately often", "Yes"];

//darlingtonia
const darlingtoniaAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const darlingtoniaAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];

//heliamphora
const heliamphoraAnswers1 = ["Sunny", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const heliamphoraAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];

//ultricularia
const ultriculariaAnswers1 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "Yes"];
const ultriculariaAnswers2 = ["Sunny, but with diffused light", "Easy to grow", ">15°C", "Moderately often", "No"];

//plant's photos

const sundewPhoto = "graphics/sundew.jpg";

//plant's descriptions

const sundewDescription = `
The Sundew is a captivating carnivorous plant known for its charming and efficient way of catching insects. Its leaves are adorned with glandular hairs that secrete a sticky, 
glistening substance to attract and trap prey. Once an insect lands on the sticky surface, the Sundew’s leaves curl around it, allowing the plant to absorb nutrients from the trapped insect.
For optimal care, place your Sundew in bright, indirect sunlight, such as a sunny windowsill or under a grow light. It thrives in temperatures between 20°C to 30°C during 
the growing season, but can tolerate cooler conditions in winter as long as it doesn’t drop below 10°C (50°F). Keep the soil consistently moist with distilled or rainwater, and maintain 
high humidity to support its health.
Sundews naturally catch their own food, but if kept indoors where insects are scarce, occasional feeding with small insects or specialized plant food may be necessary. 
Some Sundews also need a dormant period in winter, where they should be kept in cooler temperatures with reduced watering.
`;

const venusFlytrapDescription = `The Venus Flytrap is a unique carnivorous plant that traps insects with its snap-closing leaves. It thrives in bright, direct sunlight and needs at least 4-6 hours 
of it daily. Water only with distilled or rainwater to avoid mineral damage, keeping the soil moist with a well-draining mix like sphagnum moss. During winter, it enters dormancy, 
so reduce watering and let it rest in cooler temperatures. Avoid feeding it manually as it captures enough insects on its own. Proper care will keep your Venus Flytrap healthy and active.`;

const trumpetPitcherDescription = `The Trumpet Pitcher is a carnivorous plant with tall, tubular leaves that trap insects. It needs 6-8 hours of sunlight and grows best in acidic, 
nutrient-poor soil like peat moss. Keep the soil moist using distilled or rainwater. Protect it from frost in winter, reducing watering during its dormancy period.`;

const pitcherPlantDescription = `The Pitcher Plant is a tropical carnivorous plant with deep, cup-like leaves that trap insects. It thrives in bright, indirect sunlight and humid environments. 
Use well-draining, nutrient-poor soil like a mix of sphagnum moss and perlite. Water with distilled or rainwater, keeping the soil moist but not waterlogged. Avoid cold drafts 
and keep it in warm temperatures.`;

const pinguiculaDescription = `The Pinguicula is a small carnivorous plant with sticky, fleshy leaves that trap insects. It prefers bright, indirect light and grows well in a mix of sand 
and peat moss. Keep the soil lightly moist using distilled or rainwater, but avoid waterlogging. It thrives in moderate humidity and temperatures, and doesn't need frequent feeding—its leaves 
will naturally catch small insects.`;

const cephalotusDescription = `Cephalotus has small, cup-shaped pitchers that lure and trap insects. It thrives in bright, indirect light and prefers well-draining soil, 
like a mix of sand and peat moss. Water with distilled or rainwater, keeping the soil moist but not soaked. It prefers cooler temperatures and moderate humidity. 
Feeding isn’t necessary, as it catches insects on its own.`;

const darlingtoniaDescription = `Darlingtonia is a striking carnivorous plant with tubular, cobra-like traps. It requires bright, indirect light and prefers 
a cool environment with temperatures between 15-25°C. Keep the soil consistently moist with distilled or rainwater, and ensure it remains well-draining to avoid root rot. 
Darlingtonia thrives in high humidity, making it ideal for terrariums or a humid room. Feed it occasionally with small insects, as its natural traps will attract and capture prey.`;

const heliamphoraDescription = `Heliamphora, also known as the Sun Pitcher Plant, is a captivating carnivorous plant with tube-shaped traps that catch insects using nectar and digestive enzymes. 
It thrives in bright, indirect light and prefers a warm environment with temperatures between 20-30°C. Keep the soil consistently moist with distilled or rainwater 
and ensure good drainage to prevent root rot. High humidity is essential, so consider placing it in a terrarium or a room with high moisture. Feed it occasionally with small insects,
and it will reward you with its unique and attractive traps.`;

const ultriculariaDescription = `Utricularia is a fascinating carnivorous plant known for its tiny, bladder-like traps that capture and digest small aquatic creatures. 
It thrives in bright, indirect light and requires a consistently moist environment, ideally with temperatures between 20-30°C. Use distilled or rainwater and keep the soil 
or growing medium wet. High humidity is beneficial, so a terrarium or a humid environment is ideal. Utricularia is easy to care for, as it does not require regular feeding; 
its traps will handle small insects on their own.`;

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
    if (answersCount[0] === "Shady") {
        questionAnswers.remove();
        question.textContent = "If you can't provide enough sunlight, you can't meet any carnivorous plant needs :<";
        nextQuestionBtn.textContent = "Go to the beginning";
        previousQuestionBtn.remove();
        nextQuestionBtn.blur();
        
        nextQuestionBtn.addEventListener("click", () => {
            location.reload();
        });
        return;
    }

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
        plantPhoto.style.backgroundImage = "url(../graphics/sundew.jpg)";
        plantPhoto.style.width = "15rem";
        plantPhoto.style.height = "15rem";
        plantPhoto.style.backgroundSize = "cover";
        plantPhoto.style.borderRadius = "50%";
        plantHeading.textContent = "Sundew";
        plantDesc.textContent = sundewDescription;
        questionAnswers.appendChild(plantPhoto);
        questionAnswers.appendChild(plantHeading);
        questionAnswers.appendChild(plantDesc);
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