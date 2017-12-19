import React from 'react';

const ClassPrototype = () => {
  class A {}
  class B extends A {}
  console.log('\nCLASS ----')
  console.log('Object.getPrototypeOf(A)', Object.getPrototypeOf(A))
  console.log('Object.getPrototypeOf(B)', Object.getPrototypeOf(B))
  console.log('Object.getPrototypeOf(B) == Object.getPrototypeOf(A)',
    Object.getPrototypeOf(B) == Object.getPrototypeOf(A))
  console.log('Object.getPrototypeOf(B) === Object.getPrototypeOf(A)',
    Object.getPrototypeOf(B) === Object.getPrototypeOf(A))
  console.log('B.isPrototypeOf(A)', B.isPrototypeOf(A))
  console.log('A.isPrototypeOf(B)', A.isPrototypeOf(B))
  console.log('A.toString()', A.toString())
  console.log('B.toString()', B.toString())
  console.log('A.toString() == B.toString()', A.toString() == B.toString())
  console.log('A.toString() === B.toString()', A.toString() === B.toString())

  return '';
}

// Local versus inherited values
const ClassPrototype2 = () => {
  var MyClass = function() {
    this.a = 'Hello';
    this.b = 'world!';
  }
  MyClass.prototype.a = 'toto';
  MyClass.prototype.b = 42;
  MyClass.prototype.c = false;
  var myObj = new MyClass();
  console.log('myObj', myObj)
  console.log('myObj.a', myObj.a)
  console.log('myObj.b', myObj.b)
  console.log('myObj.c', myObj.c)
  console.log('myObj.d', myObj.d)

  function Employee() {
    this.dept = 'general';    // Note that this.name (a local variable) does not appear here
  }
  Employee.prototype.name = '';    // A single copy

  function WorkerBee() {
    this.projects = [];
  }
  WorkerBee.prototype = new Employee;

  var amy = new WorkerBee;
  console.log('before: amy.name', amy.name)
  Employee.prototype.name = 'Unknown';
  console.log('after: amy.name', amy.name)

  return '';
}

const Component = () => (
  <div>
    <ClassPrototype/>
    <ClassPrototype2/>
  </div>
)

export default Component;