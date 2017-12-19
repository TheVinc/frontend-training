import React from 'react';

const Assign = () => {
  console.log('\nASSIGN ----')
  var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
    bar: {
      value: 2  // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true  // baz is an own enumerable property.
    }
  });

  console.log('obj', obj); // { baz: 3 }
  var copy = Object.assign({}, obj);
  console.log('copy', copy); // { baz: 3 }
  return '';
}

const AssignPrimitiveWrapped = () => {
  var v1 = 'abc';
  var v2 = true;
  var v3 = 10;
  var v4 = Symbol('foo');

  var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
  var obj2 = Object.assign({}, v3, v4);
  // Primitives will be wrapped, null and undefined will be ignored.
  // Note, only string wrappers can have own enumerable properties.
  console.log('AssignPrimitiveWrapped obj', obj); // { "0": "a", "1": "b", "2": "c" }
  console.log('AssignPrimitiveWrapped obj2', obj2); // {}
  return '';
}

const AssignException = () => {
  var target = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false
  }); // target.foo is a read-only property

  try {
    Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
    // TypeError: "foo" is read-only
    // The Exception is thrown when assigning target.foo
  } catch (err) {
    console.error('assigning exception', err)
  }

  console.log('AssignException target.bar', target.bar);  // 2, the first source was copied successfully.
  console.log('AssignException target.foo2', target.foo2); // 3, the first property of the second source was copied successfully.
  console.log('AssignException target.foo', target.foo);  // 1, exception is thrown here.
  console.log('AssignException target.foo3', target.foo3); // undefined, assign method has finished, foo3 will not be copied.
  console.log('AssignException target.baz', target.baz);  // undefined, the third source will not be copied either.
  return '';
}

const Component = () => (
  <div>
    <Assign/>
    <AssignPrimitiveWrapped/>
    <AssignException/>
  </div>
)

export default Component;