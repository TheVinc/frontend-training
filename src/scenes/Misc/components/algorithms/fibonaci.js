import React from 'react';

function fibonaciImperative(n) {
  var fibo = [0, 1];
  if (n <= 2)
    return 1;
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo[n];
}

function fibonaciRecursive(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaciRecursive(n - 1) + fibonaciRecursive(n - 2);
}

export default class Fibonaci extends React.Component {

  handleChange = event => {
    const n = parseInt(event.target.value, 10);
    this.setState({fibonaciImperative: fibonaciImperative(n)});
    this.setState({fibonaciRecursive: fibonaciRecursive(n)});
  }

  render() {
    const ShowResults = () => {
      if (this.state && this.state.fibonaciImperative) {
        return (
          <div>
            fibonaciImperative: {this.state.fibonaciImperative}
            fibonaciRecursive: {this.state.fibonaciRecursive}
          </div>
        );
      }
      return '';
    }
    return (
      <div>
        <div>Fibonaci</div>
        <input onChange={this.handleChange}/>
        <ShowResults/>
      </div>
    )
  }
}