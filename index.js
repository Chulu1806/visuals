const canvas = document.querySelectorAll('canvas')

// RECTANGLE
const context0 = canvas[0].getContext('2d')

context0.fillStyle = 'blue'
// context0.fillRect(100, 100, 400, 400)

context0.lineWidth = 3
context0.beginPath()
context0.rect(100, 100, 400, 400)
context0.stroke()

context0.beginPath()
context0.arc(300, 300, 100, 0, Math.PI * 2)
context0.stroke()

// SQUARES
const context1 = canvas[1].getContext('2d')

const width = height = 60
const gap = 20

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const x = 100 + (width + gap) * i
    const y = 100 + (height + gap) * j

    context1.beginPath()
    context1.rect(x, y, width, height)
    context1.stroke()

    if (Math.random() > 0.5) {
      context1.beginPath()
      context1.rect(x + 8, y + 8, width - 16, height - 16)
      context1.stroke()
    }
  }
} 