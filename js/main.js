const game = document.querySelector('.game')
const ul = game.querySelector('ul')

let count = 36
let str = ''

let foods = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥓', '🥚', '🍳', '🧇']

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

for (let i = 0; i < count; i++) {
  str += `<li>${foods[getRandomInt(10)]}</li>`
}

ul.innerHTML = str

const lis = ul.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', e => {
    // console.log(e.target.textContent)
    e.target.classList.add('clear')
  })
})
