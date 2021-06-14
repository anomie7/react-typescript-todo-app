import { Todo } from '../App';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
