
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

let a: number = 20;
let b: number = 20;

function line(x, y) {
    ctx.strokeStyle = 'magenta';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
};

while(b < canvas.height - 20){
    line(a, b);
    b = b + 20;
    a = a + 30;
};