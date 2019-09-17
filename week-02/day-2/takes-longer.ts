'use strict';

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let toAdd: string = "always takes longer than ";

quote = quote.substring(0,quote.indexOf("you")) + toAdd +  quote.substring(quote.indexOf("you"));

console.log(quote);

