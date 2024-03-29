'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let a: number = 5;
let b: number = 10;

for (let i = 0; i < 6; i++) {   
    ctx.fillStyle = "magenta";
    ctx.fillRect(a, a, b, b);
    ctx.strokeStyle = "black";
    ctx.strokeRect(a, a, b, b);
    a = a + b;
    b = b + 20;
};