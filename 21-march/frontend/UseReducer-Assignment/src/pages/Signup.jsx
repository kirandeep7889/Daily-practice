import React, { useReducer } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'; 
import { Link } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function SignupPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'updateField', field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/v1/user/Signup', state);
      toast.success('Signup successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('Error signing up. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className='center'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className='txt_field'>
            <input type='text' name='firstName' placeholder='First Name' value={state.firstName} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='text' name='lastName' placeholder='Last Name' value={state.lastName} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='email' name='email' placeholder='Email' value={state.email} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='text' name='contact' placeholder='Contact' value={state.contact} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='password' name='password' placeholder='Password' value={state.password} onChange={handleChange} required />
            <span></span>
          </div>
          <div className='txt_field'>
            <input type='password' name='confirmPassword' placeholder='Confirm Password' value={state.confirmPassword} onChange={handleChange} required />
            <span></span>
          </div>
          <input type='submit' value='Sign Up' />
          <div className='login_link'>
            Already have an account? <Link to='/login'>Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
