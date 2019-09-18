'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let a: number = 20;
let b: number = 20;

for (let i = 0; i < 19; i++) {   
    ctx.fillStyle = "magenta";
    ctx.fillRect(a, b, 20, 20);
    ctx.strokeStyle = "black";
    ctx.strokeRect(a, b, 20, 20);
    a = a + 20;
    b = b + 20;
};