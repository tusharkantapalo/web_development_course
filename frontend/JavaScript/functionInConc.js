function BellBoy(name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
    this.moveSuitcase = function() {
        console.log("Can I take your suitcase sir please?");
    }
}

var bellBoy1 = new BellBoy("Timmy", 24, "Yes", ["English", "French"]);

console.log(bellBoy1.name);
