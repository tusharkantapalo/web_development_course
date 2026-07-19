var x = Math.round(Math.random() * 100);

name = prompt("Enter your name: ");
crushName = prompt("Enter the name of your crush: ");

console.log("Your and " + crushName + "'s love percentage is " + x + "%.");

if(x === 100) {
    console.log("You both have love like Romio and Julliet");
} else if(x >= 80) {
    console.log("You both have good level of understanding.");
} else if(x >= 30  && x <= 80) {                                         //And
    console.log("You both can Understand eachother in a better way.");
} else {
    console.log("Don't gat emotional.");
}

/*
=== - is equal to (the data and the type is also same)
==  - is equal to (the data can be same but the datatype can not be same)
!== - is not equal to
>   - is greater than
<   - is lesser than
>=  - is greater or equal to
<=  - is lesser or equal to
*/
