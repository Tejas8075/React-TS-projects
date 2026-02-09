import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string,
  title: string,
  completed: boolean
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[]
  },
  reducers: {
    addTodo: (state, action: {payload: Todo}) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: {payload: Todo}) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);

      state.todos[index] = {...state.todos[index], ...action.payload};
    },
    deleteTodo: (state, action: {payload: Pick<Todo, 'id'>}) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    completeTodo: (state, action: {payload: Pick<Todo, 'id'>}) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);

      const [completedTodo] = state.todos.splice(index, 1);

      completedTodo.completed = true

      state.todos.push(completedTodo);
    }
  }
})

export const { addTodo, updateTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;