'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let a: number = canvas.width;
let b: number = canvas.height;

let c: number = canvas.width - 10;
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
    c = c - 10;
    b = b - 10;
}

a = canvas.width;
b = canvas.height;
c = 0;
d = canvas.height - 10;

while (a >= 10) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    sth(a, b, c, d)
    a = a - 10;
    d = d - 10;
}