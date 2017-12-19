// https://www.alsacreations.com/quiz/

import React from 'react';
import {Route, Link} from 'react-router-dom';

import AssignTricks from './components/assign-tricks';
import ClassTricks from './components/class-tricks';
import FunctionOverloadingTricks from './components/function-overloading-tricks';
import GetterTricks from './components/getter-tricks';
import KeydownPressTricks from './components/keydown-press-tricks';
import PrefixPostfixTricks from './components/prefix-postfix-tricks';
import RegexTricks from './components/regex-tricks';
import ScopingTricks from './components/scoping-tricks';
import SetterTricks from './components/setter-tricks';
import SpliceTricks from './components/splice-tricks';
import StrictModeTricks from './components/strict-mode-tricks';
import TimeoutTricks from './components/timeout-tricks';
import TruthyFalsyTricks from './components/truthy-falsy-tricks';
import VarNanNullUndeinfedTricks from './components/var-nan-null-undefined-tricks';

const Scene = ({ match }) => (
  <div>
    <AssignTricks/>
    <ClassTricks/>
    <FunctionOverloadingTricks/>
    <GetterTricks/>
    <KeydownPressTricks/>
    <PrefixPostfixTricks/>
    <RegexTricks/>
    <ScopingTricks/>
    <SetterTricks/>
    <StrictModeTricks/>
    <SpliceTricks/>
    <TruthyFalsyTricks/>
    <VarNanNullUndeinfedTricks/>
    <TimeoutTricks/>
  </div>
)

export default Scene;