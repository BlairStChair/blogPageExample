//homepage button action to take user to quiz page
const takeMeToQuizButton = document.querySelector("#takeMeToQuiz");

takeMeToQuizButton.addEventListener("click", () =>{
    location.href = 'html/quiz.html';
});

const emailInput = document.querySelector("#emailInput");

const done = document.querySelector("#done");
const newsletterText = document.querySelector("#newsletterText");
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterPanel = document.querySelector("#newsletterPanel");

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



