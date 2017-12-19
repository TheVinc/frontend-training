import React from 'react';

const TimeOut = () => {
  console.log('TimeOut ----')
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log('i', i)
    })
  }
  for (var j = 0; j < 3; j++) {
    setTimeout(function() {
      console.log('j', j)
    }, 2000)
  }
  for (var k = 0; k < 3; k++) {
    setTimeout(function() {
      console.log('k', k)
    }, 0)
  }
  for (var p = 0; p < 3; ++p) {
    setTimeout(function() {
      console.log('p', p)
    }, 0)
  }
  for (var u = 0; u < 3; ++u) {
    console.log('u', u)
  }
  return '';
}

const Component = () => (
  <div>
    <TimeOut/>
  </div>
)

export default Component;