import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Delete, Pencil } from 'lucide-react'
import type { Todo } from 'redux/slices/todoSlice'

const TodoTile = ({todo}: {todo: Todo}) => {
  return (
    <div className='flex border-b-2 justify-between p-2'>
      <div className='flex items-center gap-2'>
        <Checkbox />
        <h3 className='font-semibold capitalize'>{todo.title}</h3>
      </div>

      <div className='flex gap-2 items-center'>
        <Pencil size={20} cursor={"pointer"}/>
        <Delete size={20} cursor={"pointer"}/>
      </div>
    </div>
  )
}

export default TodoTile