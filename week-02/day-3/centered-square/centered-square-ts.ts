'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw a green 10x10 square to the center of the canvas.

let size1: number = 80;
let size2: number = 50;

ctx.strokeStyle = 'green'; 
ctx.strokeRect(canvas.width / 2 - size1 / 2, canvas.height / 2 - size1 / 2, size1, size1);

ctx.fillStyle = 'rgb(100, 200, 100)';
ctx.fillRect(canvas.width / 2 - size2 / 2, canvas.height / 2 - size2 / 2, size2, size2);