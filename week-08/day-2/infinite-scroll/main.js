'use strict';

let body = document.querySelector('body')
const scrollThreshold = 300;

const randomColor = () => {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}

const addNDivs = (n) => {
    for (let i = 0; i < n; i++) {
        let temp = document.createElement('div')
        temp.style.backgroundColor = randomColor()
        body.appendChild(temp)
    }
}

addNDivs(Math.floor(Math.random() * 100))

window.addEventListener('scroll', (event) => {
    (window.pageYOffset - scrollThreshold) < window.innerHeight ? addNDivs(10) : null
   
})
