import { useSelector } from 'react-redux'
import TodoTile from './TodoTile'
import type { Todo } from 'redux/slices/todoSlice';

const TodoDisplay = () => {
  const todos = useSelector(
    (state) => (state as { todo: { todos: Todo[] } }).todo.todos
  );


  return (
    <>
      <div className="my-10">
        {todos.map((todo) => (
          <TodoTile todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );

}

export default TodoDisplay