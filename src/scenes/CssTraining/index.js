import React from 'react';
import {Route, Link} from 'react-router-dom';

import gridScene from './scenes/grid';
import StandardHeader from 'components/standard-header.js';

const Scene = ({match}) => (
  <div>
    <h2>CSS Training</h2>
    <Route exact path={match.url} render={() => (
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/grid`}>
              Grid
            </Link>
          </li>
        </ul>
      </nav>
    )}/>

    <Route path={`${match.url}/:id`} component={StandardHeader}/>
    <hr/>
    <Route path={`${match.url}/grid`} component={gridScene}/>
  </div>
)


export default Scene;