const darkMode = document.querySelector("#darkMode");
const links = document.querySelectorAll("a");
const navBar = document.querySelector("#navBar");
const contentContainer = document.querySelector("#contentContainer");

let clickCounter = 0;

darkMode.addEventListener("click", () => {
    clickCounter++;

    if (clickCounter % 2 == 1) {
        navBar.style.backgroundColor = "#1A1A1A";
        links.forEach(links => {
            links.style.color = "#f3f3f2"; 
        });
        contentContainer.style.backgroundColor = "#1a1a1a";
        contentContainer.style.color = "#f3f3f2";
    } else {
        navBar.style.backgroundColor = "#fffefc";
        links.forEach(links => {
            links.style.color = "unset"; 
        });
        contentContainer.style.backgroundColor = "#fffefc";
        contentContainer.style.color = "#141419";
    }

    console.log(clickCounter);
});

const takeMeToHomepageButton = document.querySelector("#mucholapaLogoImg");

takeMeToHomepageButton.addEventListener("click", () =>{
    location.href = '../index.html';
});