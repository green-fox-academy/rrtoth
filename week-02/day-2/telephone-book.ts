'use strict';

let book = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
};

console.log("John K. Miller's phone number is: " + book["John K. Miller"]);

let values: string[] = Object.keys(book).map(function (a) {
    return book[a];
});

let keys: string[] = Object.keys(book);

console.log("307-687-2982 is " + keys[values.indexOf("307-687-2982")] + "'s phone number");

if (keys.indexOf("Chris E. Myers") != -1) {
    console.log("We know Chris E. Myers' phone number")
} else {
    console.log("We don't know Chris E. Myers' phone number")
};