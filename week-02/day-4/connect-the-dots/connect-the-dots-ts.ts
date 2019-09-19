'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let a: number[][] =  [[10, 10], [290,  10], [290, 290], [10, 290]];
let b: number[][] =  [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
let e: number = 0;

function draw (a) {
    while (e < a.length - 1) {
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(a[e][0], a[e][1]);
        ctx.lineTo(a[e + 1][0], a[e + 1][1]);
        ctx.stroke();
        e++;
    };
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(a[e][0], a[e][1]);
    ctx.lineTo(a[0][0], a[0][1]);
    ctx.stroke();
    e = 0;
};

draw(a);
draw(b);