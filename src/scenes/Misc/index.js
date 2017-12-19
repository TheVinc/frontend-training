import React from 'react';

import Bundle from 'components/bundle';
import Clock from './components/clock.js';
import ClocksManager from './components/clocks/clocks-manager.js';
import StopwatchsManager from './components/stopwatchs/stopwatchs-manager.js';
import Prime from './components/algorithms/prime.js';
import Fibonaci from './components/algorithms/fibonaci.js';
import PuretestManager from './components/puretest/puretest-manager';
import { Splitpane, Leftpane, Rightpane } from './components/split-panes/splitpane';
import ListOfTenThings from './components/listofthings/listofthings';
import {CustomTextInput, ParentCustomTextInput2} from './components/customtextinput/customtextinput';

const MiscScene = () => (
  <div id="misc-scene">
    <h1>Hello, world!</h1>
    <StopwatchsManager/>
    <Clock/>
    <ClocksManager/>
    <Prime/>
    <Fibonaci/>
    <PuretestManager/>
    <Splitpane left={<Leftpane/>} right={<Rightpane/>}/>
    <ListOfTenThings/>
    <CustomTextInput/>
    <ParentCustomTextInput2/>
  </div>
)

export default MiscScene;