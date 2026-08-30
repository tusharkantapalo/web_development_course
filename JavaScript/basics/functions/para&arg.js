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
    console.log("Buy " + bottles + " bottles of milk");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveRight");
    console.log("moveRight");
}

getMilk(prompt("Enter amount in rupees: "));
