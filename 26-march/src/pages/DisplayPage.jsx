// pages/DisplayPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from '../redux/todoSlice';
import './DisplayPage.css';

function DisplayPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="display-page">
      <h1>Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <div className="actions">
              <Link to={`/update/${todo.id}`} className="update-link">
                Update
              </Link>
              <button onClick={() => handleDelete(todo.id)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/create" className="create-button">Add New Todo</Link>
    </div>
  );
}

export default DisplayPage;
