'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];
let a: number[] = numList.map(b => { return b / 2 });

numList.splice(3, 1, a[3]);

console.log(numList[3]);