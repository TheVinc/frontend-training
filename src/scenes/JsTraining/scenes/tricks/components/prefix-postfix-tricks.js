import React from 'react';

const Prefix = () => {
  console.log('PREFIX POSTFIX ----')
  var a = 2;
  console.log('a1', a)
  var b = a++;
  console.log('b', b)
  console.log('a2', a)
  var c = ++a;
  console.log('c', c)
  console.log('a3', a)

  return '';
}

const Component = () => (
  <div>
    <Prefix/>
  </div>
)

export default Component;


