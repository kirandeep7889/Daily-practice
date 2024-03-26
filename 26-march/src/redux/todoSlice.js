// redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Learn Redux' },
  { id: 2, text: 'Build a Todo App' },
  { id: 3, text: 'Read a book' },
  { id: 4, text: 'Exercise' },
  { id: 5, text: 'Go to GYM' }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
