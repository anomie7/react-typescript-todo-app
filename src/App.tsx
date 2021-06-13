import React, { FunctionComponent } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

const App: FunctionComponent = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
    </TodoTemplate>
  )
}

export default App;
