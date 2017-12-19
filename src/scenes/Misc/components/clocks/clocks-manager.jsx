import React from 'react';
import Clock from './clock.js';

export default class ClocksManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [],
      availableClocks: [
        { city: 'Paris', timeLag: 0 },
        { city: 'Dublin', timeLag: -1 },
        { city: 'Berlin', timeLag: 1 },
        { city: 'New York', timeLag: -6 },
        { city: 'Tokyo', timeLag: 8 },
      ],
    };
    this.addClock = this.addClock.bind(this);
  }

  // addClock = (event) => {
  addClock(event) {
    const newClock = this.state.availableClocks
      .find(clock => clock.city === event.target.value);
    this.setState(prevState => (
      { clocks: [...prevState.clocks, newClock] }
    ));
  }

  render() {
    function OptionsList(props) {
      return props.clocks.map((clock, index) => (
        <option
          key={`${clock.city}-${index}`}
          value={clock.city}
        >
          {clock.city}
        </option>
      ));
    }

    const clocksList = this.state.clocks.map((clock, index) => (
      <Clock
        key={`${clock.city}-${index}`}
        city={clock.city}
        timeLag={clock.timeLag}
      />
    ));

    return (
      <div>
        <div>Number of clocks: {this.state.clocks.length}</div>
        <form>
          <label htmlFor="selectNewClock">
            Add a new clock
            <select
              id="selectNewClock"
              name="selectNewClock"
              onChange={this.addClock}
            >
              <OptionsList clocks={this.state.availableClocks} />
            </select>
          </label>
        </form>
        <ul>{clocksList}</ul>
      </div>
    );
  }
}
