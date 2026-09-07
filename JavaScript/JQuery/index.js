// document.querySelector("h1").style.color = "red";
// document.querySelectorAll("h1").style.color = "red"; , if multiple h1s are there

$("h1").css("color", "red");        //setting the color
console.log($("h1").css("color"));  //getting the value

$("h1").addClass("big");            //adding a class to html
$("h1").addClass("big margine");    //adding multiple classes to any attribute
