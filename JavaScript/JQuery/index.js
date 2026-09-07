// document.querySelector("h1").style.color = "red";
// document.querySelectorAll("h1").style.color = "red"; , if multiple h1s are there

$("h1").css("color", "red");        //setting the color
console.log($("h1").css("color"));  //getting the value

$("h1").addClass("big");            //adding a class to html
$("h1").addClass("big margine");    //adding multiple classes to any attribute

$("h1").text("Bye");                //manipulating text

$("button").text("<em>Hey</em>");   //changing the text
$("button").html("<em>Hey</em>");   //changing the html

$("a").attr("href", "https://in.search.yahoo.com/");    //setting the value
$("a").attr("href");                                    //getting the value

$("h1").click(function() {
    $("h1").css("color", "purple"); //adding evenListner
})

$(document).keypress(function(event) {
    $("h1").html(event.key);
})
