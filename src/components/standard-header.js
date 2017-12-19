import React from 'react';

export default class StandardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button onClick={this.goBack}>
          Back
        </button>
        &nbsp;-&nbsp;
        <h3 style={{textTransform: 'capitalize'}}>{this.props.match.params.id} Training</h3>
      </div>
    );
  }
}