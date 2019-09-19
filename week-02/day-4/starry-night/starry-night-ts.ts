'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function randomGrey() {
    let a = Math.random() * 255;
    return 'rgb(' + a + ',' + a + ',' + a + ')';
};

for(let i = 0; i < 500; i++) {
    let e: number = Math.random() * 3;
    ctx.fillStyle = randomGrey();
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, e, e);
};