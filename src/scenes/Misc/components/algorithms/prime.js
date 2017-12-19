import React from 'react';

function isPrimeSilly(n) {
  let divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}

function isPrimeSmart(n) {
  if (n === 1 || n === 2)
    return true;
  if (n % 2 === 0)
    return false;
  let divisor = 3;
  const limit = n/2;
  while (divisor <= limit) {
    if (n % divisor === 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}

export default class Prime extends React.Component {

  constructor(props) {
    super(props);
    function createCalculator(name, method) {
      return {
        name,
        method,
        value: null,
        perf: null
      };
    }
    this.state = {calculators: [
      new createCalculator('silly', isPrimeSilly),
      new createCalculator('smart', isPrimeSmart)
    ], results: ''};
  }

  handleChange = (event) => {
    const n = parseInt(event.target.value, 10);
    let results = '';
    if (typeof n === 'number') {
      // results = this.state.calculators.reduce((accumulator, calculator) => {
      //   let t0 = performance.now();
      //   const answer = calculator.method(n);
      //   let t1 = performance.now();
      //   return accumulator + `
      //     ${calculator.name}: ${answer ? 'True' : 'False'}
      //      (calculated in ${(t1 - t0).toFixed(4)} milliseconds) \n
      //   `;
      // }, '');
      console.log('---');
      this.setState({calculators:
        this.state.calculators.map(calculator => {
          let t0 = window.performance.now();
          console.time('primeCalc:'+calculator.name);
          const answer = calculator.method(n);
          let t1 = window.performance.now();
          console.timeEnd('primeCalc:'+calculator.name);
          calculator.value = answer;
          calculator.perf = (t1 - t0).toFixed(4);
          return calculator;
        })
      });
    }
    // this.setState({results});
  }

  render() {
    function ShowResults(props) {
      return props.calculators.map((calculator, index) => (
        <div key={`results-${index}`}>
          {calculator.name}: {calculator.value} (calculated in {calculator.perf} milliseconds)
        </div>
      ));
      // return props.results.split('\n').map((content, index) =>
      //   (<div key={`results-${index}`}>{content}</div>)
      // );
    }
    return (
      <div>
        <br/>
        <div>Is Prime?</div>
        <input onChange={this.handleChange}/>
        <ShowResults calculators={this.state.calculators}/>
        <br/>
      </div>
    );
  }
}