// pages/UpdatePage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from '../redux/todoSlice';
import './UpdatePage.css';

function UpdatePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(id))
  );

  const [updatedTodo, setUpdatedTodo] = useState(todo.text);

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: parseInt(id), text: updatedTodo }));
    navigate('/');
  };

  return (
    <div className="update-page">
      <h1>Update Todo</h1>
      <input
        type="text"
        value={updatedTodo}
        onChange={(e) => setUpdatedTodo(e.target.value)}
        placeholder="Enter Updated Todo"
        className="todo-input"
      />
      <button onClick={handleUpdateTodo} className="update-button">Update</button>
    </div>
  );
}

export default UpdatePage;
