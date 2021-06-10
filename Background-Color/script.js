const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    const x = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("btn").style.backgroundColor = colors[randomNumber];
    document.getElementById("mamau").innerHTML  = colors[randomNumber];
    document.getElementById("mamau").style.color = "x";
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
