import React from 'react';
import PropTypes from 'prop-types';

function Repeat(props) {
  let items = [];
  // props.children is a function
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>
}

export default function ListOfTenThings () {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={`repeat-${index}`}>This is item number {index} in the list</div>}
    </Repeat>
  );
}

Repeat.propTypes = {
  numTimes: PropTypes.number
}

