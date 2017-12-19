import React from 'react';

const SelfContainedSimple = () => {
  const testModule = (function() {
    //Private counter
    let counter = 0;
    return {
      incrementCounter: () => counter++,
      resetCounter: () => {
        console.log('SelfContained counter value before reset', counter);
        counter = 0
      }
    }
  })();
  testModule.incrementCounter();
  testModule.incrementCounter();
  testModule.resetCounter();
  return '';
}

const ModulePattern = () => (
  <div>
    <SelfContainedSimple/>
  </div>
)

export default ModulePattern;