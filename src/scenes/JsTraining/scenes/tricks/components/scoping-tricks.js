import React from 'react';

const Scoping = function () {
  var a1 = 2;
  var obj = {
    a1: 4,
    foo: () => this.a1,
    foo2: () => a1,
    bar: function() {
      return this.a1;
    }
  }
  console.log('SCOPING1 ----');
  console.log('a1', a1);
  try {
    console.log('obj.foo()', obj.foo());
  } catch (err) {
    console.error('obj.foo()', err);
  }
  console.log('obj.foo2()', obj.foo2());
  console.log('obj.bar()', obj.bar());
  var test = obj.bar;
  try {
    console.log('test()', test());
  } catch (err) {
    console.error('test() err', err)
  }
  return '';
}


const Scoping2 = function() {
  console.log('SCOPING2 ---- hoisting');
  function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
       return 2;
    }
  }
  test();
  return '';
}

const Scoping3 = function() {
  console.log('SCOPING3 ---- js currying');
  var a = 1;
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    a = 5;
    return otherFunction;
  }
  var firstResult = someFunction(9);
  var result = firstResult(2);
  console.log('firstResult', firstResult)
  console.log('result', result)
  return '';
}

const Scoping4 = function() {
  console.log('SCOPING4 ----');
  var base = {};
  base.fullname = 'John Doe';
  base.obj = {
    fullname: 'Colin Ihrig',
    prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
        return this.fullname;
      }
    }
  };
  console.log('obj.prop.getFullname()', base.obj.prop.getFullname());
  var test = base.obj.prop.getFullname;
  console.log('test()', test.call(base));
  return '';
}

const Scoping5 = function() {
  console.log('SCOPING5 ----');
  var a = 1;
  function b() {
    a = 10;
    return;
    function a() {}
  }
  b();
  console.log('a', a);
  return '';
}

const Component = () => (
  <div>
    <Scoping/>
    <Scoping2/>
    <Scoping3/>
    <Scoping4/>
    <Scoping5/>
  </div>
)

export default Component;