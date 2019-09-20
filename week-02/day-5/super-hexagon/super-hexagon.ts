'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let change: number = 20;
let x: number = (canvas.width - change) / 2;
let y: number = change;
let l: number = 3;

function randomColor() {
    let a = Math.random() * 200;
    let b = Math.random() * 200;
    let c = Math.random() * 200;
    return 'rgb(' + a + ',' + b + ',' + c + ')';
};

function hexagon(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + change, y);
    ctx.stroke();
    ctx.moveTo(x + change, y);
    ctx.lineTo(x + change * 3 / 2, y + Math.sqrt(change ** 2 - (change / 2) ** 2));
    ctx.stroke();
    ctx.moveTo(x + change * 3 / 2, y + Math.sqrt(change ** 2 - (change / 2) ** 2));
    ctx.lineTo(x + change, y + Math.sqrt(change ** 2 - (change / 2) ** 2) * 2);
    ctx.stroke();
    ctx.moveTo(x + change, y + Math.sqrt(change ** 2 - (change / 2) ** 2) * 2);
    ctx.lineTo(x, y + Math.sqrt(change ** 2 - (change / 2) ** 2) * 2);
    ctx.stroke();
    ctx.moveTo(x, y + Math.sqrt(change ** 2 - (change / 2) ** 2) * 2);
    ctx.lineTo(x - change / 2, y + Math.sqrt(change ** 2 - (change / 2) ** 2));
    ctx.stroke();
    ctx.moveTo(x - change / 2, y + Math.sqrt(change ** 2 - (change / 2) ** 2));
    ctx.lineTo(x, y);
    ctx.stroke();
};

for (let j = 0; j < 4; j++) {
    x = (canvas.width - change) / 2 + change * 1.5 * j;
    y = change + Math.sqrt(change ** 2 - (change / 2) ** 2) * j;
    l++;
    for (let i = 0; i < l; i++) {
        ctx.strokeStyle = randomColor();
        hexagon(x, y);
        x -= change * 3 / 2;
        y += Math.sqrt(change ** 2 - (change / 2) ** 2);
    }
};

l = 5;

for (let j = 0; j < 3; j++) {
    x = (canvas.width - change) / 2 + change * 6;
    y = change + 4 * Math.sqrt(change ** 2 - (change / 2) ** 2) + (Math.sqrt(change ** 2 - (change / 2) ** 2)) * 2 * j;
    for (let i = 0; i <= l; i++) {
        x -= change * 3 / 2;
        y += Math.sqrt(change ** 2 - (change / 2) ** 2);
        ctx.strokeStyle = randomColor();
        hexagon(x, y);
    }
    l--;
};

hexagon(x, y)