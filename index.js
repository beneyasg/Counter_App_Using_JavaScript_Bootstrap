let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEL.textContent = count
}

function decrement(){
    count -= 1
    countEL.textContent = count
}

function reset(){
    count = 0
    countEL.textContent = 0
}

function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    count = 0
    countEL.textContent = 0
}