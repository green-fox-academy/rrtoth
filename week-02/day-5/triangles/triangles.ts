'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const change: number = 18;
const m: number = Math.sqrt((change) ** 2 - (change / 2) ** 2);
let x: number = (canvas.width - change) / 2;
let y: number = change;
let lines: number = 21;


function randomColor() {
    let a = Math.random() * 255;
    let b = Math.random() * 255;
    let c = Math.random() * 255;
    return 'rgb(' + a + ',' + b + ',' + c + ')';
};

function triangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + change, y);
    ctx.lineTo(x + change / 2, y - m);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke()
};

for (let j = 1; j <= 21; j++) {
    for (let i = 0; i < lines; i++) {
        ctx.fillStyle = randomColor();
        triangle(x, y);
        x -= change / 2;
        y += m;
    };
    lines--;
    y = change + m * j;
    x = (canvas.width - change) / 2 + (change / 2) * j;
};