import React from 'react';
import Animal from './animal.js';

class ImpureComponent extends React.Component {
  render() {
    return (
      <div>
        ImpureCpt: {this.props.words.join(',')}
        <br/>
        {this.props.animal.get('gender')}
      </div>
    );
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        PureCpt: {this.props.words.join(',')}
        <br/>
        {this.props.animal.get('gender')}
      </div>
    );
  }
}

export default class PuretestManager extends React.Component {
  constructor(props) {
    super(props);
    const animal = Animal;
    animal.add('age', 42);
    animal.add('gender', 'male');
    this.state = {
      words: ['hello'],
      animal
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAnimalGender = this.handleChangeAnimalGender.bind(this);
  }

  handleChangeAnimalGender(event) {
    const value = event.target.value;
    const animal = this.state.animal;
    animal.change('gender', value);
    this.setState({animal});
  }

  handleSubmit(event) {
    event.preventDefault();
    const words = this.state.words;
    const newWord = this.refs.addWordsInput.value;
    if (typeof newWord === 'string' && newWord !== '') {
      words.push(newWord);
      this.setState({words});
    }
  }

  render() {
    return (
      <div>
        <div>Testing pure cpt:</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="addWordsInput">Add words</label>
          <input
           id="addWordsInput"
           ref="addWordsInput"/>
          <input type="submit" value="Submit" />
        </form>
        <form>
          <label htmlFor="changeAnimalGender">Change gender</label>
          <input
           id="changeAnimalGender"
           value={this.state.animal.get('gender')}
           onChange={this.handleChangeAnimalGender}/>
        </form>
        <PureComponent words={this.state.words} animal={this.state.animal}/>
        <ImpureComponent words={this.state.words} animal={this.state.animal}/>
      </div>
    );
  }
}