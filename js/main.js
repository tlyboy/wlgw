const checkerboard = document.querySelector('.checkerboard')
const ul = checkerboard.querySelector('ul')

let count = 36
let str = ''

let foods = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥓', '🥚']

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

for (let i = 0; i < count; i++) {
  str += `<li>${foods[getRandomInt(8)]}</li>`
}

ul.innerHTML = str

const lis = ul.querySelectorAll('li')

let first
let second

lis.forEach(li => {
  li.addEventListener('click', e => {
    if (!e.target.classList.contains('checked')) {
      if (!first) {
        first = e.target
        first.classList.add('checked')
      } else {
        second = e.target
        second.classList.add('checked')

        if (second.textContent === first.textContent) {
          first.classList.remove('checked')
          second.classList.remove('checked')

          first.classList.add('clear')
          second.classList.add('clear')

          first = undefined
          second = undefined
        } else {
          first.classList.remove('checked')
          first = second
          second = undefined
        }
      }
    }
  })
})
