// pages/CreatePage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useNavigate } from 'react-router-dom';
import './CreatePage.css'; 

function CreatePage() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const navigate=useNavigate();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    navigate('/');
  };

  return (
    <div className="create-page">
      <h1>Add Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">Add</button>
    </div>
  );
}

export default CreatePage;
