import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../src/Components/AbBotao';
import {AbButtonQtd} from '../src/Components/AbButtonQtd'
import {AbBurguer} from '../src/Components/AbBurguer'
import {AbInput} from '../src/Components/AbInput'
import {AbModal} from '../src/Components/AbModal'

const App = () => {

  const [form, setForm] = React.useState({email: '', password: ''})
  

  const onChangeForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <AbBotao text='test' model='secudary'/>
      <AbButtonQtd 
      BackgroundColorLarger='blue'
      BtnLarger='+' 
      BtnSmaller='-'/>
      <AbBurguer backgroundColor='red'/>

      <AbInput 
        onChange={onChangeForm}
        value={form.email}
        label='E-mail'
        type='email'
        placeholder='Digite seu email...'
      /> 

      <AbModal 
        title='Cadastrar' 
        Open={true}
        CloseModal={() => console.log('opa')}
      > 
        <AbInput 
        onChange={onChangeForm}
        value={form.email}
        label='E-mail'
        type='email'
        name='email'
        placeholder='Digite seu email...'
      /> 

      <AbInput 
        onChange={onChangeForm}
        value={form.password}
        label='Password'
        type='password'
        name='password'
        placeholder='Digite sua senha...'
      /> 
      </AbModal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
