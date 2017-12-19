import React from 'react';

// A variation of the module pattern
const RevealingModule = () => {
  const myRevealingModule = (function () {
    let privateCounter = 0;
    function privateFunction() {
      privateCounter++;
    }
    function publicFunction() {
      publicIncrement();
    }
    function publicIncrement() {
      privateFunction();
    }
    function publicGetCount(){
      return privateCounter;
    }
    // Reveal public pointers to
    // private functions and properties
    return {
      start: publicFunction,
      increment: publicIncrement,
      count: publicGetCount
    };
  })();
  myRevealingModule.start();
  return '';
}

const pattern = () => (
  <div>
    <RevealingModule/>
  </div>
)

export default pattern;