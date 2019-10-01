import { ElectricGuitar } from "./stringed-instrument-desc"
import { BassGuitar } from "./stringed-instrument-desc"
import { Violin } from "./stringed-instrument-desc"

// console.log(
//     'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
// );

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('\nTest 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('\nTest 2 Play');
guitar2.play();
bassGuitar2.play();