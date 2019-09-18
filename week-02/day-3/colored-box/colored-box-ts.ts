'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'magenta';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 300);
ctx.stroke();

ctx.strokeStyle = 'indigo';
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.strokeStyle = 'cyan';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(50, 50);
ctx.stroke();