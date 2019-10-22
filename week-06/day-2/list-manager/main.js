'use strict';

let container = document.createElement("div")
container.classList.add("container")

//button actions
function up() {

}

function change() {

}

function del() {

}

function down() {

}


//first column
let first = document.createElement("div")
first.classList.add("column")
first.classList.add("first")

let items = ["bread", "milk", "orange", "tomato"]

items.forEach(e => {
    let item = document.createElement("div")
    item.classList.add("item")
    item.textContent = e
    first.appendChild(item)
})


container.appendChild(first)

//second column

let second = document.createElement("div")
second.classList.add("second")

let buttonList = ["UP", ">", "X", "DOWN"]
let buttonActions = [up(), change(), del(), down()]

buttonList.forEach(e => {
    let button = document.createElement("button")
    button.textContent = e;
    button.onclick = () => { buttonActions[buttonList.indexOf[e]] }
    second.appendChild(button)
})

container.appendChild(second)

//third column

let third = document.createElement("div")
third.classList.add("column")
first.classList.add("third")
container.appendChild(third)

//

document.querySelector("body").appendChild(container)