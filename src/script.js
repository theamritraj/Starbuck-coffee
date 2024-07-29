var cardFlag = 1;
function card1Up () {
    if(cardFlag === 2) {
        card2.style.bottom ="0px";
    } else if(cardFlag === 3) {
        card3.style.bottom = "0px";
    } else if(cardFlag === 4) {
        card4.style.bottom === "0px";
    }
    cardFlag=1;
    card1.style.bottom = "20px";
    pointer.style.left = "280px";
}
function card2Up () {
    if(cardFlag === 1) {
        card1.style.bottom ="0px";
    } else if(cardFlag === 3) {
        card3.style.bottom = "0px";
    } else if(cardFlag === 4) {
        card4.style.bottom === "0px";
    }
    cardFlag=2;
    card2.style.bottom = "20px";
    pointer.style.left = "590px";
}
function card3Up () {
    if(cardFlag === 1) {
        card1.style.bottom ="0px";
    } else if(cardFlag === 2) {
        card2.style.bottom = "0px";
    } else if(cardFlag === 4) {
        card4.style.bottom === "0px";
    }
    cardFlag=3;
    card3.style.bottom = "20px";
    pointer.style.left = "900px";
}
function card4Up () {
    if(cardFlag === 1) {
        card1.style.bottom ="0px";
    } else if(cardFlag === 3) {
        card3.style.bottom = "0px";
    } else if(cardFlag === 2) {
        card2.style.bottom === "0px";
    }
    cardFlag=4;
    card4.style.bottom = "20px";
    pointer.style.left = "1210px";
}
var pointer = document.querySelector(".arrow");
var card1 = document.querySelector(".card:first-child");
var card2 = document.querySelector(".card:nth-child(2)");
var card3 = document.querySelector(".card:nth-child(3)");
var card4 = document.querySelector(".card:nth-child(4)");
card1.addEventListener("click", card1Up);
card2.addEventListener("click", card2Up);
card3.addEventListener("click", card3Up);
card4.addEventListener("click", card4Up);
// console.log(card2)