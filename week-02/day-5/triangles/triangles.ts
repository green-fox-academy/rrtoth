'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let change: number = 18;
let x: number = (canvas.width - change) / 2;
let y: number = change;
let lines: number = 21;

function randomColor() {
    let a = Math.random() * 200;
    let b = Math.random() * 200;
    let c = Math.random() * 200;
    return 'rgb(' + a + ',' + b + ',' + c + ')';
};

function triangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + change, y);
    ctx.stroke();
    ctx.moveTo(x + change, y);
    ctx.lineTo(x + change / 2, y - Math.sqrt((change) ** 2 - (change / 2) ** 2));
    ctx.stroke();
    ctx.moveTo(x + change / 2, y - Math.sqrt((change) ** 2 - (change / 2) ** 2));
    ctx.lineTo(x, y);
    ctx.stroke();
};

for (let j = 1; j <= 21; j++) {
    for (let i = 0; i < lines; i++) {
        ctx.strokeStyle = randomColor();
        triangle(x, y);
        x -= change / 2;
        y += Math.sqrt((change) ** 2 - (change / 2) ** 2);
    };
    lines--;
    y = change + (Math.sqrt((change) ** 2 - (change / 2) ** 2)) * (j);
    x = (canvas.width - change) / 2 + (change / 2) * j;
};