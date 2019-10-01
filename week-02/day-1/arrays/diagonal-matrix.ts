'use strict';

let line: number[] = [];
let matrix: number[][] = [];

for (let i = 0; i < 4; i++) {
     line = []
     for (let j = 0; j < 4; j++) {
          if (j == i) {
               line.push(1)
          } else {
               line.push(0)
          }
     }
     matrix.push(line)
}

matrix.forEach(e => { console.log(e) })
//wrong direction... doesn't matter