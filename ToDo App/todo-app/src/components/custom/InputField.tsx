import { Input } from '../ui/input'
import { Button } from '../ui/button'
import type { FormEvent } from 'react';

const InputField = () => {

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = e.currentTarget.todo.value.trim();
    console.log(todo);
  }

  return (
    <form className='flex flex-1 gap-5 mt-32'>
      <Input type='text' name='todo' placeholder='Enter the task...' />
      <Button>Add the Task</Button>
    </form>
  )
}

export default InputField