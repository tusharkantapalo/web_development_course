var num1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "./images/dice" + num1 + ".png";

var num2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").src = "./images/dice" + num2 + ".png";

if(num1 > num2) {
    document.querySelector(".res").innerHTML = "Winner is PLAYER 1!";
} else if(num1 < num2) {
    document.querySelector(".res").innerHTML = "Winner is PLAYER 2!";
} else {
    document.querySelector(".res").innerHTML = "DRAW";
}
