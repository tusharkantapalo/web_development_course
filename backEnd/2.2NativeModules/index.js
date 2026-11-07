const fs = require("fs");

fs.writeFile("message.txt", "Hello From Node", (err) => {
    if (err) throw err;
    console.log("File successfully saved!");

});

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})
