//homepage button action to take user to quiz page
const takeMeToQuizButton = document.querySelector("#takeMeToQuiz");

takeMeToQuizButton.addEventListener("click", () =>{
    location.href = 'html/quiz.html';
});

const emailInput = document.querySelector("#emailInput");
let emailValue = emailInput.value;
const done = document.querySelector("#done");
const newsletterText = document.querySelector("#newsletterText");
const newsletterForm = document.querySelector("#newsletterForm");

done.addEventListener("click", () =>{
    if (emailValue === '') {
        alert("You can't leave the field empty!");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailValue) === true) {
            alert("Nice");
        } else {
            alert("Wrong");
        }
    }
});

