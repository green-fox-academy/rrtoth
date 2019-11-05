'use strict'

let candyButton = document.getElementsByClassName('create-candies')[0]
let lollypopButton = document.getElementsByClassName('buy-lollypops')[0]
let chocolateButton = document.getElementsByClassName('buy-chocolate')[0]
let rainButton = document.getElementsByClassName('candy-machine')[0]

let candyDisplay = document.getElementsByClassName('candies')[0]
let lollyDisplay = document.getElementsByClassName('lollypops')[0]
let chocolateDisplay = document.getElementsByClassName('chocolate')[0]
let speedDisplay = document.getElementsByClassName('speed')[0]

let lollyCounter = 0;
let candyCounter = 0;
let chocolateCounter = 0;
let generation = 0;
let speed = 1;

lollypopButton.setAttribute('disabled', 'true')
chocolateButton.setAttribute('disabled', 'true')

let moreCandies = () => {
    candyCounter += speed
    candyDisplay.innerHTML = candyCounter
    candyCounter >= 100 ? lollypopButton.removeAttribute('disabled') : null
}

let moreLollypops = () => {
    candyCounter -= 100
    candyDisplay.innerHTML = candyCounter;
    lollyDisplay.innerHTML += '🍭';
    lollyCounter++
    candyCounter < 100 ? lollypopButton.setAttribute('disabled', 'true') : null
    lollyCounter >= 10 ? chocolateButton.removeAttribute('disabled') : null
}

let moreChocolate = () => {
    lollyCounter -= 10
    lollyDisplay.innerHTML = ''
    chocolateCounter++
    for (let i = 0; i < lollyCounter; i++) {
        lollyDisplay.innerHTML += '🍭';
    }
    chocolateDisplay.innerHTML += '🍫';
    lollyCounter < 10 ? chocolateButton.setAttribute('disabled', 'true') : null
}

let myInterval = setInterval(() => {
    generation = (Math.floor(lollyCounter / 10) + chocolateCounter * 1.5) * speed
    speedDisplay.innerHTML = generation
    candyCounter += generation
    candyDisplay.innerHTML = candyCounter
    candyCounter >= 100 ? lollypopButton.removeAttribute('disabled') : null
}, 1000)

let increaseSpeed = () => {
    speed *= 10;
}

candyButton.addEventListener('click', moreCandies)
lollypopButton.addEventListener('click', moreLollypops)
chocolateButton.addEventListener('click', moreChocolate)
rainButton.addEventListener('click', increaseSpeed)