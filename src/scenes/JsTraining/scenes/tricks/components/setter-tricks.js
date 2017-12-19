import React from 'react';

const Setter = () => {
  console.log('\n Setter -----')
  var mySetter = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  console.log('mySetter', mySetter)
  console.log('mySetter.current', mySetter.current)
  console.log('Object.getOwnPropertyNames(mySetter)', Object.getOwnPropertyNames(mySetter))
  console.log('Object.getOwnPropertyDescriptors(mySetter)', Object.getOwnPropertyDescriptors(mySetter))
  mySetter.current = 'EN';
  console.log('mySetter.log', mySetter.log); // ['EN']
  mySetter.current = 'FA';
  console.log('mySetter.log', mySetter.log); // ['EN', 'FA']

  try {
    mySetter.current = () => 3;
  } catch (err) {
    console.error('setting current err', err)
  }

  delete mySetter.current;
  console.log('mySetter', mySetter)

  return '';
}

// To append a setter to an existing object later at any time, use
const SetterAppend = () => {
  var o = {a: 0};

  console.log('append later o ', o) // 5
  Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });

  o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
  console.log('o.a', o.a) // 5

  return '';
}

// Using a computed property name
const SetterComputed = () => {
  var expr = 'foo';

  var obj = {
    baz: 'bar',
    set [expr](v) { this.baz = v; }
  };

  console.log('obj computed', obj); // "bar"
  console.log('obj.baz', obj.baz); // "bar"
  obj.foo = 'baz';      // run the setter
  console.log('obj.baz', obj.baz); // "baz"
  return '';
}


const Component = () => (
  <div>
    <Setter/>
    <SetterAppend/>
    <SetterComputed/>
  </div>
)

export default Component;