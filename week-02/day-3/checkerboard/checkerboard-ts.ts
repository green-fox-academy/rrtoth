'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

let size: number = 20;
let i: number = 0;
let j: number = 0;
let k: number = 0;

function asd(size) { 
    while (j < canvas.height) {
        while (i < canvas.width) {
            ctx.fillRect(i, j, size, size);
            i = i + size * 2; 
        };
        j = j + size;
        k++;
        if (k % 2 == 0){
            i = 0;
        } else {
            i = size;
        };   
    }
};

asd(size);