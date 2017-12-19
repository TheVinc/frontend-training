import React from 'react';

const VarNan = () => {
  console.log('\nVAR NaN Null Undefined -------')
  console.log('NaN == NaN', NaN == NaN)
  console.log('NaN === NaN', NaN === NaN)
  var a;
  console.log('a + 2', a + 2)
  var n = null;
  console.log('n + 2', n + 2)
  var u = undefined;
  console.log('u + 2', u + 2)

  // hoisting
  console.log(x === undefined); // donne "true"
  var x = 3;

  console.log('"37" - 7', "37" - 7);
  console.log('"37" + 7', "37" + 7);
  return '';
}

const Component = () => (
  <div>
    <VarNan/>
  </div>
)

export default Component;