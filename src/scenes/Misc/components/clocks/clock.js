import React from 'react';
import { clearInterval } from 'timers';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: this.getDate()};
    this.tick = this.tick.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    const date = new Date();
    date.setHours(date.getHours() + this.props.timeLag);
    return date;
  }

  tick() {
    this.setState({date: this.getDate()});
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <div>
        {`${this.props.city}: ${this.state.date.toLocaleTimeString()}`}
      </div>
    );
  }
}