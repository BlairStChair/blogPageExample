const darkMode = document.querySelector("#darkMode");
const links = document.querySelectorAll("a");
const textContainer1 = document.querySelector("#textContainer1");
const imgContainer1 = document.querySelector("#imgContainer1");
const textContainer2 = document.querySelector("#textContainer2");
const imgContainer2 = document.querySelector("#imgContainer2");
const careTips = document.querySelector("#careTips");
const goBackButton = document.querySelector(".mainContainer button");

let clickCounter = 0;

darkMode.addEventListener("click", () => {
    clickCounter++;

    if (clickCounter % 2 == 1) {
        document.body.style.backgroundColor = "#1A1A1A";
        links.forEach(links => {
            links.style.color = "#f3f3f2"; 
        });
        goBackButton.style.backgroundColor = "#a3b872";
        textContainer1.style.backgroundColor = "#141419";
        textContainer1.style.color = "#f3f3f2";
        imgContainer1.style.color = "#f3f3f2";
        textContainer2.style.backgroundColor = "#141419";
        textContainer2.style.color = "#f3f3f2";
        imgContainer2.style.color = "#f3f3f2";
        careTips.style.backgroundColor = "#141419";
        careTips.style.color = "#f3f3f2";
    } else {
        document.body.style.backgroundColor = "unset";
        links.forEach(links => {
            links.style.color = "unset"; 
        });
        goBackButton.style.backgroundColor = "#5C7315";
        textContainer1.style.backgroundColor = "#f3f0ea";
        textContainer1.style.color = "#141419";
        imgContainer1.style.color = "#141419";
        textContainer2.style.backgroundColor = "#f3f0ea";
        textContainer2.style.color = "#141419";
        imgContainer2.style.color = "#141419";
        careTips.style.backgroundColor = "#f3f0ea";
        careTips.style.color = "#141419";
    }

    console.log(clickCounter);
});