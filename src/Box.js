import domUpdates from './domUpdates.js';

class Box {
  constructor(height, width){
    this.height = height || 100;
    this.width = width || 100;
  }

  area(){
    return this.height * this.width;
  }

  increaseWidth(amount){
    let incrementAmount = this.width + amount;
    return incrementAmount;
  }

  increaseHeight(amount){
    this.height = this.height + amount;
    domUpdates.displayHeight(this.height)
    return this.height;
  }

  increment(amount, boxPart){
    let incrementAmount;
    if(boxPart === 'height') {
     incrementAmount = this.height + amount;
    } else {
     incrementAmount = this.width + amount;
    }
    // console.log(incrementAmount);
    return incrementAmount
  }
}

export default Box;
