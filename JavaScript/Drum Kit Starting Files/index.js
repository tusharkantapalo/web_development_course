function handle() {
    alert("Clicked");
}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handle);
    /*
    document.querySelectorAll(".drum")[i].addEventListener("click", function()){
        alert("Clicked");
    }
    */
   //We can also add the eventlistner, by the commented way also.
}
