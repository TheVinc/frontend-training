// https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/
import React from 'react';

// try {
//   foo = 'bar';
//   console.log('foo', foo)
// } catch (err) {
//   console.error('assign global err', err)
// }

const StrictMode = () => {
  console.log('\nStrictMode ----')
  try {
    var foo = "test";
    function test(){}

    // delete foo; // Error
    // delete test; // Error
  } catch (err) {
    console.error('delete var err', err)
  }

  try {
    eval("var a = false;");
    console.log('a', a)
    console.log('typeof a', typeof a)
  } catch (err) {
    console.error('eval var err', err)
  }

  return '';
}

const Component = () => (
  <div>
    <StrictMode/>
  </div>
)

export default Component;