'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.'

let a: number = canvas.width / 2 - 80;
let b: number = canvas.height / 2 - 80;
let colors: string[] = ["indigo", "magenta", "navy"]

for (let i = 0; i < 3; i++) {   
    ctx.strokeStyle = colors[i];
    ctx.strokeRect(a, b, 50, 50);
    a = a + 60;
    b = b + 60;
};