// lamp.js

const Lamp = function Lamp(maxBrightness){
  this.currentBrightness = 0
  this.maxBrightness = maxBrightness
}

Lamp.prototype.brighten = function(amount) {
  amount = amount || 1;

  this.currentBrightness += amount

  if(this.currentBrightness > this.maxBrightness){
    this.currentBrightness = this.maxBrightness
  }
}

Lamp.prototype.dim = function(amount){}
