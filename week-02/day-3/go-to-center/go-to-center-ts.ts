'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

let x: number = 50;
let y: number = 50;
let a: number = 50;

function one(e, f) {
    ctx.strokeStyle = 'indigo';
    ctx.beginPath();
    ctx.moveTo(e, f);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
};

while(x <= canvas.width - a){
    x = x + 10;
    one(x, y);
};

while(y <= canvas.height - a){
    y = y + 10;
    one(x, y);
};

while(x > a){
    x = x - 10;
    one(x, y);
};

while(y > a){
    y = y - 10;
    one(x, y);
};