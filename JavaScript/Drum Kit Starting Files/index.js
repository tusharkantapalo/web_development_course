//this funcion is for playing the sound
function keyPress(key) {
    switch(key) {
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a' :
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's' :
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd' :
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j' :
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case 'k' :
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case 'l' :
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            alert("Key press is not identified!");
    }
}
//this function is for the animation
function keyAni (keyPressed) {
    document.querySelector("." + keyPressed).classList.toggle("pressed")
    setTimeout(function() {
        document.querySelector("." + keyPressed).classList.toggle("pressed")
    }, 100);
}


//identifies the mouse clicks
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        keyPress(this.innerHTML);
        keyAni(this.innerHTML);
    });
}

//identifies the keyboard key presses
document.addEventListener("keypress", function(event) {
    keyPress(event.key);
    keyAni(event.key);
});
