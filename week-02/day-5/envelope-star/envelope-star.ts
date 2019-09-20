'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let change: number = 10;
let a: number = canvas.width / 2;
let b: number = change;
let c: number = canvas.width / 2 + change;
let d: number = canvas.height / 2;


function sth(a, b, c, d) {
    ctx.strokeStyle = 'greenyellow';
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
};

while (b <= canvas.width / 2) {
    sth(a, b, c, d)
    c = c + change;
    b = b + change;
}

a = canvas.width / 2 + change;
b = canvas.height / 2;
c = canvas.width / 2;
d = canvas.height;

while (d >= canvas.height / 2) {
    sth(a, b, c, d)
    a = a + change;
    d = d - change;
}

a = canvas.width / 2 + change;
b = canvas.height / 2;
c = canvas.width / 2;
d = canvas.height;

while (a >= 0) {
    sth(a, b, c, d)
    a = a - change;
    d = d - change;
}

a = canvas.width / 2 + change;
b = canvas.height / 2;
c = canvas.width / 2;
d = 0;

while (a >= 0) {
    sth(a, b, c, d)
    a = a - change;
    d = d + change;
}
