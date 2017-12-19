import React from 'react';

const TruthyFalsy = () => {
  console.log('\nFALSY ------')
  console.log(Boolean(false));
  console.log(Boolean(0));
  console.log(Boolean(''));
  console.log(Boolean(""));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));

  console.log('\nTRUTHY ------')
  console.log(Boolean('0'));
  console.log(Boolean('false'));
  console.log(Boolean([]));
  console.log(Boolean({}));
  console.log(Boolean(function(){}));
  // false
  // 0 (zero)
  // '' or "" (empty string)
  // null
  // undefined
  // NaN (e.g. the result of 1/0)
  // Everything else is truthy. That includes:

  // '0' (a string containing a single zero)
  // 'false' (a string containing the text “false”)
  // [] (an empty array)
  // {} (an empty object)
  // function(){} (an “empty” function)
  return '';
}

const Component = () => (
  <div>
    <TruthyFalsy/>
  </div>
)

export default Component;