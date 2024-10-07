const darkMode = document.querySelector("#darkMode");
const biggerFont = document.querySelector("#biggerFont");

const links = document.querySelectorAll("a");
const accesibilityBtns = document.querySelectorAll(".accesibilityBtns");
const accesibilityImg = document.querySelectorAll(".accesibilityImg");
const mucholapaLogoImg = document.querySelector("#mucholapaLogoImg")
const contentPhoto = document.querySelector("#contentPhoto");
const content = document.querySelector("#content");
const quizText = document.querySelector("#quizText");
const quizText2 = document.querySelectorAll(".quizText");
const quizTexth2 = document.querySelector("#quizTexth2");
const quizTextp = document.querySelector("#quizTextp");
const quizPreview = document.querySelector("#quizPreview");
const takeMeToQuiz = document.querySelector("#takeMeToQuiz");
const newsletterPanel = document.querySelector("#newsletterPanel");

let clickCounterDM = 0;
let clickCounterBF = 0;

darkMode.addEventListener("click", () => {
    clickCounterDM++;

    if (clickCounterDM % 2 == 1) {
        document.body.style.backgroundColor = "#1A1A1A";
        links.forEach(links => {
            links.style.color = "#f3f3f2"; 
        });
        contentPhoto.style.boxShadow = "unset";
        content.style.color = "#f3f3f2"
        quizText.style.backgroundColor = "#2A2A2A";
        takeMeToQuiz.style.backgroundColor = "#a3b872";
        newsletterPanel.style.backgroundColor = "#a3b872";
    } else {
        document.body.style.backgroundColor = "unset";
        links.forEach(links => {
            links.style.color = "unset"; 
        });
        content.style.color = "unset"
        takeMeToQuiz.style.backgroundColor = "#5C7315";
        newsletterPanel.style.backgroundColor = "#5C7315";
    }
});

biggerFont.addEventListener("click", () => {
    clickCounterBF++;

    if (clickCounterBF % 2 == 1) {
        accesibilityImg.forEach(accesibilityImg => {
            accesibilityImg.style.width = "1.1rem"; 
            accesibilityImg.style.height = "1.1rem"; 
        });
        accesibilityBtns.forEach(accesibilityBtns => {
            accesibilityBtns.style.width = "2rem"; 
            accesibilityBtns.style.height = "2rem"; 
        });
        mucholapaLogoImg.style.height = "20rem";
        links.forEach(links => {
            links.style.fontSize = "150%"; 
        });
        contentPhoto.style.height = "17rem";
        contentPhoto.style.width = "17rem";
        content.style.fontSize = "1.8rem";
        quizText.style.width = "60rem";
        quizTexth2.style.fontSize = "36px";
        quizTextp.style.fontSize = "30px"
    } else {
        accesibilityImg.forEach(accesibilityImg => {
            accesibilityImg.style.width = "0.8rem"; 
            accesibilityImg.style.height = "0.8rem"; 
        });
        accesibilityBtns.forEach(accesibilityBtns => {
            accesibilityBtns.style.width = "1.5rem"; 
            accesibilityBtns.style.height = "1.5rem"; 
        });
        mucholapaLogoImg.style.height = "18rem";
        links.forEach(links => {
            links.style.fontSize = "unset"; 
        });
        contentPhoto.style.height = "15rem";
        contentPhoto.style.width = "15rem";
        content.style.fontSize = "1.5rem";
        quizText.style.width = "56rem";
        quizTexth2.style.fontSize = "28px";
        quizTextp.style.fontSize = "22px"
    }
});

//homepage button action to take user to quiz page
const takeMeToQuizButton = document.querySelector("#takeMeToQuiz");

takeMeToQuizButton.addEventListener("click", () =>{
    location.href = 'html/quiz.html';
});

//when you click page logo you get taken to homepage
const takeMeToHomepageButton = document.querySelector("#mucholapaLogoImg");

takeMeToHomepageButton.addEventListener("click", () =>{
    location.href = 'index.html';
});

const emailInput = document.querySelector("#emailInput");

const done = document.querySelector("#done");
const newsletterText = document.querySelector("#newsletterText");
const newsletterForm = document.querySelector("#newsletterForm");

//newsletter
function  validateEmail(){
    let emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(emailValue) === true){
        return true;
    }else{
        return false;
    }
}

done.addEventListener("click", () =>{
    let emailValue = emailInput.value;
    if(emailValue == ''){
        alert("This field can't be empty!");
        location.reload();
        emailInput.value = '';
    }
    else if(validateEmail() == true){
        newsletterText.remove();
        newsletterForm.remove();
        let thankYouContainer = document.createElement("div");
        thankYouContainer.id = "thankYouContainer";
        let thankYouText = document.createElement("h2");
        thankYouText.textContent = "Thank You For Signing Up!";

        thankYouContainer.animate(
            [
                { opacity: 0 }, 
                { opacity: 1 }  
            ],
            {
                duration: 2000,  
                fill: "forwards" 
            }
        );

        newsletterPanel.appendChild(thankYouContainer);
        thankYouContainer.appendChild(thankYouText);
    }
    else{
        alert("This is not an e-mail address!");
        location.reload();
        emailInput.value = '';
    }
});



