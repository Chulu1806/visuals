const canvasSketch = require('canvas-sketch');
const {random} = require('canvas-sketch-util')
const settings = {
  dimensions: [ 1000, 1000 ],
  animate: true
};

// const degToRad = (degrees) => degrees / 180 * Math.PI

// const randomRange = (min, max) => Math.random() * (max - min) + min

const sketch = ({ width, height }) => {

  const agents = []

  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width)
    const y = random.range(0, height)

    agents.push(new Agent(x, y))
  }
  
  return ({ context, width, height }) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height);

    const agent = new Agent(100, 100)

    // agent.draw(context)
    console.log(agents)
    agents.forEach(agent => {
      agent.update()
      agent.draw(context)
      agent.bounce(width, height)
    })

  };
};

canvasSketch(sketch, settings);

// CLASSES

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y)
    this.vel = new Vector(random.range(-3 , 3 ), random.range(-3 , 3 ))
    this.radius = random.range(4,12)
  }

  bounce(w, h) {
    if (this.pos.x <= 0 || this.pos.x >= w) this.vel.x *= -1
    if (this.pos.y <= 0 || this.pos.y >= h) this.vel.y *= -1
  }

  update() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
  }

  draw(context) {
    context.save()
    context.translate(this.pos.x, this.pos.y)
    
    context.lineWidth = 4

    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI * 2)
    context.fill()
    context.stroke()

    context.restore()
  }
}