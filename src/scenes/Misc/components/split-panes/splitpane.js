import React from 'react';

export function Splitpane(props) {
  return (
    <div className="splitpane">
      <div className="splitpane--left">
        {props.left}
      </div>
      <div className="splitpane--right">
        {props.right}
      </div>
    </div>
  );
}

export class Leftpane extends React.Component {
  render() {
    return (
      <div>leftpane</div>
    );
  }
}
export class Rightpane extends React.Component {
  render() {
    return (
      <div>rightpane</div>
    );
  }
}