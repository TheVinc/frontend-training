import React from 'react';

const Splice = () => {
  const elts = [1, 2, 3];
  const anotherElts = [1, 2, 3];
  console.log('SPLICE ----')
  console.log('elts1', elts)
  console.log('anotherElts1', elts)
  console.log('...elts', ...elts)
  const mySplice = elts.splice(...elts);
  const anotherMySplice = anotherElts.splice(1, 2, 3);
  console.log('elts2', elts)
  console.log('anotherElts2', anotherElts)
  console.log('mySplice', mySplice)
  console.log('anotherMySplice', anotherMySplice)

  return '';
}

const Component = () => (
  <div>
    <Splice/>
  </div>
)

export default Component;