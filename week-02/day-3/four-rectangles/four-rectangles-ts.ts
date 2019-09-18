'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

let a: number = 5;
let b: number = 380;
let c: number = 10;
let d: number = 10;
let size: number = 80;
let colors = ["green", "blue", "red", "orange", "magenta", "black", "green", "blue", "red", "orange", "magenta", "black"];
let x: number = 0; 

for (let i = 20; i < 200; i += 10) {    
    ctx.strokeStyle = colors[x];
    ctx.strokeRect(a, b, c, d);
    a = a * 1.5;
    b = b / 1.3;
    c = c + 12;
    d = d + 5;
    x++;
};