//homepage button action to take user to quiz page
const takeMeToQuizButton = document.querySelector("#takeMeToQuiz");

takeMeToQuizButton.addEventListener("click", () =>{
    location.href = 'html/quiz.html';
});

const emailInput = document.querySelector("#emailInput");

const done = document.querySelector("#done");
const newsletterText = document.querySelector("#newsletterText");
const newsletterForm = document.querySelector("#newsletterForm");

function  validateEmail(){
    let emailValue = emailInput.value;
    if(emailValue === ''){
        alert("You can't leave the field empty!");
    }else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(emailValue) === true){
            return true
        }else{
            return false;
        }
    }
}

done.addEventListener("click", () =>{
    
    if(validateEmail() == true){
        alert("Nice");
        location.reload(); 
    }
    else{
        alert("wrong");
        location.reload();
    }
});



