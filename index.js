const title = document.getElementsByClassName("title_main")[0];

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function revealName() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    title.style.color = rndCol;
    console.log("Move moved!");
}
title.addEventListener("click",  () => {
    revealName();
});