import printMe from './print.js';
import {cube} from './math.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack ^3.9.0'], '\n ');

  const mathSection = document.createElement('pre');
  mathSection.innerHTML = '5 cubed is equal to ' + cube(5) + '\n\n';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(mathSection);

  return element;
}
document.getElementById('misc-scene').appendChild(component());

export default component;