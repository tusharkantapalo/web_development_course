function handle() {
    alert("Clicked");
}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    /*document.querySelectorAll(".drum")[i].addEventListener("click", handle);*/
    //We can also add the eventlistner, by the commented way also.
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("Clicked");
        var audio = new Audio("sounds/tom-1.mp3");    
        audio.play();
        this.style.color = "white";
    })//IMPORTANT
}
