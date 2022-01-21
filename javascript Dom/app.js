
const title = document.querySelector("h1");

const subTitle = document.querySelector("h3");

const paragraph = document.querySelector("p");

const button = document.querySelector(".btn")

const changeBgColor = () => {
    button.style.backgroundColor = "Black"
    button.style.color = "white"

    title.style.color = "Green"

    subTitle.style.color = "blue"
    paragraph.style.color = "red"

// 
    button1.style.backgroundColor = "white"
    button1.style.color = "black"
    secondText.style.color = "black"
    secondsub.style.color = "black"
    Sub.style.color = "black"
}

// creating event for first div
button.addEventListener("click", changeBgColor);

// second


const secondText = document.querySelector(".second")
const secondsub = document.querySelector (".secondTitle")
const Sub = document.querySelector (".seconPara")

const button1 = document.querySelector(".btn1")


const hostBgColor = () => {
    button1.style.backgroundColor = "black"
    button1.style.color = "white"
   
    secondText.style.color = "yellow"
    secondsub.style.color = "blue"
    Sub.style.color = "red"

// first section changes
    button.style.backgroundColor = "white"
    button.style.color = "black"
    title.style.color = "black"
    subTitle.style.color = "black"
    paragraph.style.color = "black"
}

// creating event for second div

button1.addEventListener("click", hostBgColor)















