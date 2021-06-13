import { Todo } from '../App';
import TodoListItem from './TodoListItem';

interface Prop {
  todos: Todo[];
}

const TodoList = ({ todos }: Prop) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
