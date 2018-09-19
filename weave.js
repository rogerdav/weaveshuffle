'use strict';


module.exports = function (n) {

  function weaveshuffle(deck) {
  
    let ndeck = [];
    let x = deck.length / 2;
    for (let i=0; i < x; i++ ) {
      ndeck.push(deck[i]);
      ndeck.push(deck[i + x]);
    }
    return ndeck;
  }
  let testArray = Array.from(Array(n).keys());
  let testCase = testArray[1];
  let counter = 1;
  let shuffledArray = weaveshuffle(testArray);
  while (shuffledArray[1] != testCase &&counter < 15) {
    let tempArray = shuffledArray;
    counter++;
    shuffledArray = weaveshuffle(tempArray);
  }
  return counter;
}
