function handle() {
    alert("Clicked");
}

for(var i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handle);
}
