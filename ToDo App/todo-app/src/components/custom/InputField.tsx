import { Input } from '../ui/input'
import { Button } from '../ui/button'
import type { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/slices/todoSlice';
import { toast } from 'sonner';

const InputField = () => {

  const dispatch = useDispatch();

  const addTodoData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = e.currentTarget.todo.value.trim();
    console.log(todo);

    if(todo){
      const id = crypto.randomUUID();

      dispatch(addTodo({
        id: id,
        title: todo,
        completed: false
      }))

      e.currentTarget.reset();

      return;
    }

    toast.error("Enter valid todo");
  }

  return (
    <form className='flex flex-1 gap-5 mt-32'>
      <Input type='text' name='todo' placeholder='Enter the task...' />
      <Button>Add the Task</Button>
    </form>
  )
}

export default InputField