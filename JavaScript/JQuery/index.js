                                                                    // // document.querySelector("h1").style.color = "red";
                                                                    // // document.querySelectorAll("h1").style.color = "red"; , if multiple h1s are there

// $("h1").css("color", "red");                                     //setting the color
// console.log($("h1").css("color"));                               //getting the value

// $("h1").addClass("big");                                         //adding a class to html
// $("h1").addClass("big margine");                                 //adding multiple classes to any attribute

// $("h1").text("Bye");                                             //manipulating text

// $("button").text("<em>Hey</em>");                                //changing the text
// $("button").html("<em>Hey</em>");                                //changing the html

// $("a").attr("href", "https://in.search.yahoo.com/");             //setting the value
// $("a").attr("href");                                             //getting the value

// $("h1").click(function() {
//     $("h1").css("color", "purple"); //adding evenListner
// });

// $(document).keypress(function(event) {
//     $("h1").html(event.key);
// });

// $("h1").on("mouseover", function() {                             //another way of adding event listener
//     $("h1").css("color", "Green");
// });

// $("h1").before("<button>new</button>");                          //adding button before h1
// $("h1").after("<button>new</button>");                           //adding button before h1
// $("h1").prepend("<button>new</button>");                         //adding button in the html h1 before the opening element of h1
// $("h1").append("<button>new</button>");                          //adding button in the html h1 after the opening element of h1

// //$("button").remove();                                          //for removing all the buttons

// // $("button").click(function() {                                //hiding the element
// //     $("h1").hide();
// // });

// // $("button").click(function() {                                //show the element
// //     $("h1").show();
// // });

// $("button").click(function() {                                   //toggling the element
//      $("h1").toggle();
//  });

// //  $("button").click(function() {                               //fadding out the element
// //      $("h1").fadeOut();
// //  });

// //  $("button").click(function() {                               //fadding in the element
// //      $("h1").fadeIn();
// //  });

//  $("button").click(function() {                                  //toggling the element
//      $("h1").fadeToggle();
//  });

// $("button").click(function() {                                   //sliding up the element
//      $("h1").slideUp();
//  });

//  $("button").click(function() {                                   //sliding down the element
//      $("h1").slideDown();
//  });

//  $("button").click(function() {                                   //toggling the element
//      $("h1").slideToggle();
//  });

$("button").click(function() {                                    //to add custom CSS but only we can add the css with numeric value, not like color
    $("h1").animate({
        opacity: 0.5
    });
});
