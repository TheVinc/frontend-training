import React from 'react';

const Getter = () => {
  var myGetter = {
    get prop() {
      return 2;
    }
  }
  console.log('GETTER -----')
  console.log('myGetter', myGetter)
  console.log('myGetter.prop', myGetter.prop)
  try {
    console.log('myGetter.prop()', myGetter.prop())
  } catch (err) {
    console.error('myGetter.prop() err', err)
  }
  try {
    myGetter.prop = () => 3;
  } catch (err) {
    console.error('err', err)
  }

  var expr = 'foo';

  // with ECMAScript 2015 expression
  var obj = {
    get [expr]() { return 'bar'; }
  };

  console.log('obj.foo', obj.foo); // "bar"
  return '';
}

const Component = () => (
  <div>
    <Getter/>
  </div>
)

export default Component;