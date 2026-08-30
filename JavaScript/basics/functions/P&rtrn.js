function getMilk(money) {
    
    var bottles = Math.floor(money / 40);
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveLeft");
    console.log("moveLeft");
    alert("Buy " + bottles + " bottles of milk.");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveRight");
    console.log("moveRight");

    return money % 40;
}


amount = prompt("Enter the amount in rupees: ");

var change = getMilk(amount);

alert("Hold your change of rs " + change + "/-.");
