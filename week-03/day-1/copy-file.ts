// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare var require: any;
//aks for global solution

const fs = require('fs');

let file2: string = "file-2.txt";

try {
    let file1: string = "my-file.txt";
    function abcd(a, b) {
        return fs.writeFileSync(b, fs.readFileSync(a, "utf8"), "utf8")
    }
    abcd(file1, file2)
}
catch (error) {
    console.log("fail")
}