const Decor = require('./lamp')
const power= require('./power')

const myLamp = new Decor(10)

console.log(myLamp.maxBrightness)

power.surge(myLamp)
power.outage(myLamp)

myLamp.turnOn()

console.log(myLamp.currentBrightness)
