import React from 'react';

const Regex = () => {
  console.log('\nRegex -------')
  console.log('"abcd".match(/\ba/g)', "abcd".match(/\ba/g));
  console.log('"_a".match(/\ba/g)', "_a".match(/\ba/g));
  console.log('"-a".match(/\ba/g)', "-a".match(/\ba/g));
  console.log('"d c b a".match(/\ba/g)', "d c b a".match(/\ba/g));
  console.log('"a b c d".match(/\ba/g)', "a b c d".match(/\ba/g));
  return '';
}

const Component = () => (
  <div>
    <Regex/>
  </div>
)

export default Component;
