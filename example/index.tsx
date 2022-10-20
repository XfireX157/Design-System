import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../.';
import {AbButtonQtd} from '../src/Components/AbButtonQtd'
import {AbBurguer} from '../src/Components/AbBurguer'


const App = () => {
  return (
    <div>
      <AbBotao text='test' model='secudary'/>
      <AbButtonQtd 
      BackgroundColorLarger='blue'
      BtnLarger='+' 
      BtnSmaller='-'/>
      <AbBurguer backgroundColor='red'/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
