import { Todo } from '../App';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
  onRemove: (id: number) => void
}

const TodoList = ({ todos, onRemove }: Props) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default TodoList;
