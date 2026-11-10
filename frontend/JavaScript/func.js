function BellBoy(name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
}

var bellBoy1 = new BellBoy("Timmy", 24, "Yes", ["English", "French"]);

console.log(bellBoy1.name)