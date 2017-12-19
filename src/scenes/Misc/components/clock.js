import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.clockInterval = setInterval(
      () => this.setState({date: new Date()}),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.clockInterval);
  }

  render() {
    return (<div>{this.state.date.toLocaleTimeString()}</div>);
  }
}