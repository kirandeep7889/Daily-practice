import React, { useReducer } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'updateField', field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/v1/user/Login', state);
      toast.success('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Error logging in. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className='center'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='txt_field'>
            <input type='email' name='email' placeholder='Email' value={state.email} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='password' name='password' placeholder='Password' value={state.password} onChange={handleChange} required />
            <span></span>
          </div>
          <input type='submit' value='Login' />
          <div className='login_link'>
            New User? <Link to='/Signup'>Signup Here</Link>
          </div>

        </form>
      </div>
    </div>
  );
}



export default LoginPage;
