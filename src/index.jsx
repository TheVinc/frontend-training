// https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
// http://bonsaiden.github.io/JavaScript-Garden/
// https://bumbu.github.io/facebook-engineering-interview
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HeaderCpt from 'components/header.jsx';
import CSSTrainingScene from 'scenes/CssTraining';
import DesignPatterns from 'scenes/DesignPatterns';
import HomeScene from 'scenes/Home';
import JsTrainingScene from 'scenes/JsTraining';
import MiscScene from 'scenes/Misc/index.jsx';

import './style.scss';

console.log(`Looks like we are in ${process.env.NODE_ENV} mode!`);

const MainRoutes = () => {
  const customHistory = createHistory();
  return (
    <Router history={customHistory}>
      <div>
        <HeaderCpt />
        <hr />
        <Route exact path="/" component={HomeScene} />
        <Route path="/misc" component={MiscScene} />
        <Route path="/css-training" component={CSSTrainingScene} />
        <Route path="/js-training" component={JsTrainingScene} />
        <Route path="/design-pattern" component={DesignPatterns} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <div>
    <MainRoutes />
  </div>,
  document.getElementById('root'),
);
