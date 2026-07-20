var names = ["Rabindra", "Santosini", "Tushar", "Chinmaya"];

function whosPaying(names) {
    
    var length = names.length;
    var payer = Math.round(Math.random() * length);
        
    return names[payer];
}

console.log(whosPaying(names));
