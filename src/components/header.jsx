import React from 'react';
import { Link } from 'react-router-dom';

const Component = () => (
  <nav>
    <Link to="/">Home</Link> -
    <Link to="/misc">Misc</Link> -
    <Link to="/css-training">CSS Training</Link> -
    <Link to="/js-training">JS Training</Link> -
    <Link to="/design-pattern">Design Patterns Training</Link>
  </nav>
);

export default Component;
