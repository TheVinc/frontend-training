// https://benmccormick.org/2017/07/19/ten-things-javascript/
// https://benmccormick.org/2017/07/10/how-to-follow-the-javascript-roadmap/

import React from 'react';
import {Route, Link} from 'react-router-dom';

import advancedProblems from './scenes/advanced-problems';
import tricks from './scenes/tricks';

const Scene = ({ match }) => (
  <div>
    <h2>JS training:</h2>
    <Route exact path={match.url} render={() => (
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/tricks`}>
              Tricks
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/advanced-problems`}>
              Advanced problems
            </Link>
          </li>
        </ul>
      </nav>
    )}/>
    <Route path={`${match.url}/:id`} component={JSTrainingHeader}/>
    <hr/>
    <Route path={`${match.url}/advanced-problems`} component={advancedProblems}/>
    <Route path={`${match.url}/tricks`} component={tricks}/>
  </div>
)

class JSTrainingHeader extends React.Component {
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

export default Scene;