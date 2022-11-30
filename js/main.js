const checkerboard = document.querySelector('.checkerboard')
const ul = checkerboard.querySelector('ul')

const foods = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧂']
const map = []

let count = 36
let lis = ''

for (let i = 0; i < count; i++) {
  map.push(foods[i % foods.length])
}

for (let i = 0; i < map.length / 2; i++) {
  const a = getRandomInt(map.length)
  const b = getRandomInt(map.length)

  let temp = map[a]
  map[a] = map[b]
  map[b] = temp
}

for (let i = 0; i < map.length; i++) {
  lis += `<li>${map[i]}</li>`
}

ul.innerHTML = lis

let first
let second

ul.addEventListener('click', e => {
  if (e.target && e.target.nodeName === 'LI') {
    if (
      !e.target.classList.contains('checked') &&
      !e.target.classList.contains('clear')
    ) {
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

          count -= 2

          if (count === 0) {
            checkerboard.innerHTML = /*html*/ `<h1 class="win">你赢了</h1>`
          }
        } else {
          first.classList.remove('checked')
          first = second
          second = undefined
        }
      }
    }
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
