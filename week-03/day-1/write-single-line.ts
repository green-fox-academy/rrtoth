// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

declare var require: any;
//aks for global solution

const fs = require('fs');

//I don't think it's possible for the program to be unable to write the file, it will just create a new one

try {
    function asd() {
        return fs.appendFileSync("my-file.txt", "\nReka Toth", "utf8");
    }
    asd();
}
catch (err) {
    console.log("Unable to write file: my-file.txt");
}