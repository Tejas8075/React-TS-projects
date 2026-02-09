import TodoTile from './TodoTile'

const todos = {
  
}

const TodoDisplay = () => {
  return (
    <div className='my-10'>
      {
        todos.map((todo) => <TodoTile todo={todo} key={todo.id})
      }
    </div>
  )
}

export default TodoDisplay