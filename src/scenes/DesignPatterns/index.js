// https://addyosmani.com/resources/essentialjsdesignpatterns/book/
import React from 'react';
import {Route, Link} from 'react-router-dom';

import ConstructorPattern from './scenes/ConstructorPattern';
import ModulePattern from './scenes/ModulePattern';
import RevealingPattern from './scenes/RevealingPattern';
import SingletonPattern from './scenes/SingletonPattern';
import ObserverPattern from './scenes/ObserverPattern';

const DesignPatterns = ({ match }) => (
  <div>
    <h2>JS Design Patterns</h2>
    <Route exact path={match.url} render={() => (
      <div>
        <h3>Please select a pattern.</h3>
        <ul>
          <li>
            <Link to={`${match.url}/constructor`}>
              Constructor
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/module`}>
              Module
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/revealing`}>
              Revealing
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/singleton`}>
              Singleton
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/observer`}>
              Observer
            </Link>
          </li>
        </ul>
      </div>
    )}/>

    <Route path={`${match.url}/:patternId`} component={PatternHeader}/>
    <hr/>
    <Route path={`${match.url}/constructor`} component={ConstructorPattern}/>
    <Route path={`${match.url}/module`} component={ModulePattern}/>
    <Route path={`${match.url}/revealing`} component={RevealingPattern}/>
    <Route path={`${match.url}/singleton`} component={SingletonPattern}/>
    <Route path={`${match.url}/observer`} component={ObserverPattern}/>
  </div>
)

class PatternHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="design-patterns__header">
        <button onClick={this.goBack}>
          Back to list
        </button>
        &nbsp;-&nbsp;
        <h3 style={{textTransform: 'capitalize'}}>{this.props.match.params.patternId} Pattern</h3>
      </div>
    );
  }
}

export default DesignPatterns;