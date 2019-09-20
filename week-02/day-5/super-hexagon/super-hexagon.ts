'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const change: number = 20;
const half: number = Math.sqrt(change ** 2 - (change / 2) ** 2);
let x: number = (canvas.width - change) / 2;
let y: number = change;
let l: number = 3;

function randomColor() {
    let a = Math.random() * 255;
    let b = Math.random() * 255;
    let c = Math.random() * 255;
    return 'rgb(' + a + ',' + b + ',' + c + ')';
};

function hexagon(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + change, y);
    ctx.lineTo(x + change * 3 / 2, y + half);
    ctx.lineTo(x + change, y + half * 2);
    ctx.lineTo(x, y + half * 2);
    ctx.lineTo(x - change / 2, y + half);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.stroke();
};

for (let j = 0; j < 4; j++) {
    x = (canvas.width - change) / 2 + change * 1.5 * j;
    y = change + half * j;
    l++;
    for (let i = 0; i < l; i++) {
        ctx.fillStyle = randomColor();
        hexagon(x, y);
        x -= change * 3 / 2;
        y += half;
    }
};

l = 5;

for (let j = 0; j < 3; j++) {
    x = (canvas.width - change) / 2 + change * 6;
    y = change + 4 * half + (half) * 2 * j;
    for (let i = 0; i <= l; i++) {
        x -= change * 3 / 2;
        y += half;
        ctx.fillStyle = randomColor();
        hexagon(x, y);
    }
    l--;
};