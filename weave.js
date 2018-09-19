'use strict';

function weaveshuffle(deck) {

  let ndeck = [];
  let x = deck.length / 2;
  for (let i=0; i < x; i++ ) {
    ndeck.push(deck[i]);
    ndeck.push(deck[i + x]);
  }
  return ndeck;
}


let testArray = [1,2,3,4,5,6,7,8,9,10];
let counter = 1;
let shuffledArray = weaveshuffle(testArray);
console.log('1st shuffle ', shuffledArray);


while (counter < 15) {
  let tempArray = shuffledArray;
  if (tempArray != testArray){
    counter++;
    shuffledArray = weaveshuffle(tempArray);
    console.log('shuffled array', shuffledArray, counter);
    } else {
    break;
  }

}

console.log('shuffled ', counter);