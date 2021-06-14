import React, { FunctionComponent, useState } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef } from 'react';
import { useCallback } from 'react';

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, text: '리액트의 기초 알아보기', checked: false },
    { id: 2, text: '컴포넌트 스타일링해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: true },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text: string) => {
      const todo: Todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
};

export default App;
