let $start = document.querySelector('#start')
let $game = document.querySelector('#game')


$start.addEventListener('click', startGame)
let score = 0

function startGame(){
    $game.style.backgroundColor = 'white'
    $start.classList.add('hide')
    createBox()
}
$game.addEventListener('click', clickBox)

function clickBox(event){
    if(event.target.dataset.box){
        score++
        createBox()
    }
}

function createBox(){
    $game.innerHTML = ''
    let box = document.createElement('div')

    box.style.width = box.style.height = `${getRandom(30,100)}px`
    box.style.backgroundColor = 'black'
    box.style.position = 'absolute'
    box.setAttribute('data-box','true')

    $game.insertAdjacentElement('afterbegin',box)
}


function getRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }