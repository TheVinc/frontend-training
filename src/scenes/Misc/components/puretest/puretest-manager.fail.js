import React from 'react';
import PureComponent from './pure-cpt.js';
import ImpureComponent from './impure-cpt.js';

const Animal = (function() {
  let instance;
  function createInstance() {
    return {
      gender: 'male',
      age: 42,
      changeAge: function (age) {
        this.age = age;
      },
      changeGender: function (gender) {
        this.gender = gender;
      }
    };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

export default class PuretestManager extends React.Component {
  constructor(props) {
    super(props);
    const animal = Animal.getInstance();
    animal.changeAge(43);
    this.handleChangeAnimalGender = this.handleChangeAnimalGender.bind(this);
  }

  handleChangeAnimalGender(event) {
    const value = event.target.value;
    console.log('value', value);
    const animal = Animal.getInstance();
    animal.changeGender(value);
    console.log('animal', animal);
    this.forceUpdate();
  }

  render() {
    const animal = Animal.getInstance();
    return (
      <div>
        <div>Testing pure cpt:</div>
        <form>
          <label htmlFor="changeAnimalGender">Change gender</label>
          <input
           id="changeAnimalGender"
           value={animal.gender}
           onChange={this.handleChangeAnimalGender}/>
        </form>
        <PureComponent animal={animal}/>
        <ImpureComponent animal={animal}/>
      </div>
    );
  }
}