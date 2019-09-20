'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let change: number = 10;
let a: number = canvas.width;
let b: number = canvas.height;
let c: number = canvas.width - change;
let d: number = 0;

function sth(a, b, c, d) {
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
};

while (b >= 0) {
    ctx.strokeStyle = 'indigo';
    ctx.beginPath();
    sth(a, b, c, d)
    c = c - change;
    b = b - change;
}

a = canvas.width;
b = canvas.height;
c = 0;
d = canvas.height - change;

while (a >= 10) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    sth(a, b, c, d)
    a = a - change;
    d = d - change;
}