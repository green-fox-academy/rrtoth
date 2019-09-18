'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let size: number = 400;

function randomColor() {
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

function asd(size) {
    while (size > 0){
        ctx.fillStyle = randomColor();
        ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
        size = size - 10;
    }
};

asd(size);