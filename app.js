let print = (message) => console.log(message)

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const timeleft = document.querySelector('#time-left')

let molePosition
let timerId = null
let resultScore = 0
let currentTime = 60

//Mole positioning
function squareManagement() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    molePosition = randomSquare.id
}

//Mole hit
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == molePosition) {
            resultScore++
            score.textContent = resultScore
            clickPosition = null
        }
    })
})

//Time between each mole positioning
function moleMovement() {
    timerId = setInterval(squareManagement, 500)
}

moleMovement()


//Timer Section
function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
    }
}

let countDownTimerId = setInterval(countDown, 1000) 