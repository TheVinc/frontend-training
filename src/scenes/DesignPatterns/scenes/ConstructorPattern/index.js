import React from 'react';

function getNewPersons() {
  const person = {};
  // or
  const person2 = Object.create(Object.prototype);
  // or
  const person3 = new Object();
  return [person, person2, person3];
}

function personToString(person) {
  return Object.keys(person).reduce((acc, key) => Boolean(acc) ?
    `${acc}, ${person[key]}` : person[key], false);
}

// ECMAScript 3 compatible
const DotSyntax = () => {
  const persons = getNewPersons().map((person) => {
    person.someKey = 'Hello World dot';
    return person;
  });

  return (
    <div>
      <h4>1. Dot syntax</h4>
      {
        persons.map((person, index) => (
          <div key={`dotSyntax-${index}`}>{person.someKey}</div>
        ))
      }
    </div>
  );
};

// ECMAScript 3 compatible
const SquareBracket = () => {
  const persons = getNewPersons().map((person) => {
    person['someKey'] = 'Hello World bracket';
    return person;
  });

  return (
    <div>
      <h4>2. Square bracket</h4>
      {
        persons.map((person, index) => (
          <div key={`squareBracket-${index}`}>{person['someKey']}</div>
        ))
      }
    </div>
  );
};

// ECMAScript 5 compatible
const DefineProperty = () => {
  const defineProp = function (obj, key, value) {
    const config = {
      value,
      writable: true, // can be reassigned.
      enumerable: true, //whether the property shows up in a for...in loop and Object.keys() or not.
      configurable: true //can be deleted from the object and whether its attributes (other than writable to false) can be changed.
    }
    Object.defineProperty(obj, key, config);
  };

  const persons = getNewPersons().map((person) => {
    defineProp(person, 'car', 'Dolorean');
    defineProp(person, 'dateOfBirth', 1981);
    defineProp(person, 'hasBeard', false);
    console.log('DefineProperty person:', person);
    console.log('DefineProperty Object.keys(person)', Object.keys(person));
    return person;
  });

  return (
    <div>
      <h4>3. Object.defineProperty</h4>
      {
        persons.map((person, index) => (
          <div key={`defineProperty-${index}`}>{personToString(person)}</div>
        ))
      }
    </div>
  );
}

const DefineProperties = () => {
  const persons = [];
  const person = Object.defineProperties({}, {
    someKey: {
      value: '(DefineProperties) someKey',
      writable: true,
    },
    anotherKey: {
      value: '(DefineProperties) anotherKey',
      writable: false,
      enumerable: true,
    },
    propKey3: {
      value: '(DefineProperties) propKey3',
      writable: true,
      enumerable: true,
      configurable: false,
    },
    propKey4: {
      value: '(DefineProperties) propKey4',
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });
  person.someKey = 'new someKey';
  try {
    person.anotherKey = 'new anotherKey';
  } catch (err) {
    console.error('writable false err', err);
  }
  try {
    delete person.propKey3;
  } catch (err) {
    console.error('configurable false err', err);
  }
  delete person.propKey4;
  persons.push(person);
  return (
    <div>
      <h4>4. Object.defineProperties</h4>
      {
        persons.map((p, index) => (
          <div key={`defineProperties-${index}`}>{personToString(p)}</div>
        ))
      }
    </div>
  );
};

const ConstructorWithPrototype = () => {
  // DONT DO
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
      return this.model + ' has done ' + this.miles + ' miles';
    };
  }
  // DO
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles';
  };
  // Usage:
  const civic = new Car('Honda Civic', 2009, 20000);
  const mondeo = new Car('Ford Mondeo', 2010, 5000);
  console.log(civic.toString());
  console.log(mondeo.toString());
  return (
    <div>
      <h4>5. ConstructorWithPrototype</h4>
      {civic.toString()}
      <br />
      {mondeo.toString()}
    </div>
  );
};

const ConstructorPattern = () => (
  <div>
    <DotSyntax />
    <SquareBracket />
    <DefineProperty />
    <DefineProperties />
    <ConstructorWithPrototype />
  </div>
);

export default ConstructorPattern;
