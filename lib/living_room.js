const Decor = require('./lamp')
const powerEvents = require('./power')

const myLamp = new Decor(10)

console.log(myLamp.maxBrightness)

power.surge(myLamp)
power.outage(myLamp)

myLamp.turn()

console.log(myLamp.currentBrightness)
