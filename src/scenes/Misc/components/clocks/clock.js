import React from 'react';
import PropTypes from 'prop-types';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.getDate() };
    this.tick = this.tick.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  getDate() {
    const date = new Date();
    date.setHours(date.getHours() + this.props.timeLag);
    return date;
  }

  tick() {
    console.log('tick');
    this.setState({ date: this.getDate() });
  }

  render() {
    return (
      <div>
        {`${this.props.city}: ${this.state.date.toLocaleTimeString()}`}
      </div>
    );
  }
}

Clock.defaultProps = {
  city: '',
  timeLag: 0,
};

Clock.propTypes = {
  city: PropTypes.string,
  timeLag: PropTypes.number,
};
