var name = prompt("Enter your name: ");

var first = name.slice(0,1);
var rest = name.slice(1, name.length);

name = (first.toLocaleUpperCase()) + (rest.toLocaleLowerCase());

alert("Hello " + (first.toLocaleUpperCase()) + (rest.toLocaleLowerCase()));
