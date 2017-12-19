import React from 'react';

const FunctionOverloaded = () => {
  console.log('\n FUNCTION OVERLOADING ----')
  function sum (a, b) {
    return a + b;
  }
  function overloadFun (fun, cb) {
    const newFun = function() {
      cb();
      return fun.apply(this, arguments);
    }
    return newFun;
  }
  function log() {
    console.log('i log stuff')
  }
  console.log('sum(2, 3)', sum(2, 3));
  const sumLog = overloadFun(sum, log);
  console.log('sumLog(2, 3)', sumLog(2, 3));
  return '';
};
const Component = () => (
  <div>
    <FunctionOverloaded/>
  </div>
)
export default Component;