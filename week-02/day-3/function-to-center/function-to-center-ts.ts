'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let a: number = 0;
let b: number = 0;

function sth(a, b) {
    ctx.strokeStyle = 'indigo';
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
};

function draw(a, b) {
    while (a <= canvas.width) {
        sth(a, b);
        a = a + 20;
    };
    while (b <= canvas.width) {
        sth(a, b);
        b = b + 20;
    };  
    while (a >= 0) {
        sth(a, b);
        a = a - 20;
    };
    while (b >= 0) {
        sth(a, b);
        b = b - 20;
    }
};

draw(a,b);