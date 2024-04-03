let score = 0
const screenElement = document.createElement('div')
screenElement.style.cssText = `
  position: relative;
  width: 100%;
  height: 100vh;`
document.body.appendChild(screenElement)

const scoreElement = document.createElement('div')
scoreElement.textContent = `Your Score: ${score}`
scoreElement.style.cssText = `font-size: 32px;`
screenElement.appendChild(scoreElement)
screenElement.style.cssText = `
display: flex;
justify-content: center;
align-items: center;`
scoreElement.style.color = 'blue'

function createLetter(){
  setInterval(() => {
    const letterElement = document.createElement('div')// Create Dom node for letter element
    letterElement.classList.add('letter')
    letterElement.style.cssText = `
    font-size:100px ;
    position:absolute;
    top:${Math.random() * (window.innerHeight - 150)}px;
    left:${Math.random() * (window.innerWidth - 150)}px;
    `// Set style for letter element
    alpha = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()
    i = Math.floor(Math.random() * 26)
    letterElement.textContent = alpha[i] // ?
    screenElement.appendChild(letterElement)// Add letter element to the screen element
    setTimeout(()=>letterElement.remove(),2000)
  }, 1000) 
}

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toUpperCase()
  const letterElements = document.querySelectorAll('.letter')
  for (let letterElement of letterElements) {
    if (pressedKey === letterElement.textContent) {
      scoreElement.textContent = `SCORE: ${++score}`
      letterElement.style.color = 'pink'
      setTimeout(()=>screenElement.removeChild(letterElement),200)
      return
    }
    else{
      scoreElement.textContent = `SCORE: ${--score}`
      letterElement.style.color = 'red'
      setTimeout(()=>screenElement.removeChild(letterElement),200)
      return
    }
  }
})

async function startGame() {
  await new Promise(resolve => {
    document.addEventListener('keydown', resolve)
  })
  createLetter()
}


startGame()