import React from 'react';

const KeyDown = () => {
  console.log('\nKeyDown ------- test with CTRL and caracter key')

  document.addEventListener('keydown', event => {
    console.log('keydown press', event.key)
  })
  document.addEventListener('keyup', event => {
    console.log('keyup press', event.key)
  })
  document.addEventListener('keypress', event => {
    console.log('keypress press', event.key)
  })


  return '';
}

const Component = () => (
  <div>
    <KeyDown/>
  </div>
)

export default Component;