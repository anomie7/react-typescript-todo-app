import React, { FunctionComponent, useReducer, useState } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef } from 'react';
import { useCallback } from 'react';

export interface Todo {
  id: number;
  text?: string;
  checked?: boolean;
}

function createBulkTodos(): Todo[] {
  const array: Todo[] = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

type Action =
  | { type: 'INSERT'; todo: Todo }
  | { type: 'REMOVE'; todo: Todo }
  | { type: 'TOGGLE'; todo: Todo };

function todoReducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.todo.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.todo.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App: FunctionComponent = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text: string) => {
    const todo: Todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({type: 'INSERT', todo})
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    dispatch({type: 'REMOVE', todo: {id}})
  }, []);

  const onToggle = useCallback((id: number) => {
   dispatch({type: 'TOGGLE', todo: {id}})
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
