const takeMeToHomepageButton = document.querySelector("#mucholapaLogoImg");
const darkMode = document.querySelector("#darkMode");
const links = document.querySelectorAll("a");
const question = document.querySelector("#question p");

let clickCounter = 0;

darkMode.addEventListener("click", () => {
    clickCounter++;

    if (clickCounter % 2 == 1) {
        document.body.style.backgroundColor = "#1A1A1A";
        links.forEach(links => {
            links.style.color = "#f3f3f2"; 
        });
        question.style.color = "#f3f3f2";
    } else {
        document.body.style.backgroundColor = "unset";
        links.forEach(links => {
            links.style.color = "unset"; 
        });
        question.style.color = "#141419";
    }

    console.log(clickCounter);
});

takeMeToHomepageButton.addEventListener("click", () =>{
    location.href = '../../index.html';
});