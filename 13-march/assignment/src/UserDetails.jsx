import React, { useState } from 'react';

const usersData = [
  { id: 1, name: 'kirandeep Singh', email: 's.kirandeep999@gmail.com.com', contactNo: '7889313265', age: 22 },
  { id: 2, name: 'Amneet Singh', email: 'amneet@gmail.com', contactNo: '9876543210', age: 24},
  { id: 3, name: 'Jeet Singh', email: 'jeet@gmail.com', contactNo: '9894849575', age: 23},
  { id: 4, name: 'Jane Doe', email: 'jane@example.com', contactNo: '9876543210', age: 25 },
  { id: 5, name: 'John Doe', email: 'john@example.com', contactNo: '1234567890', age: 30 },
];


const UserDetails = () => {
    const [searchId, setSearchId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [searchPerformed, setSearchPerformed] = useState(false);
  
    const handleSearch = (e) => {
      e.preventDefault();
      const user = usersData.find(user => user.id === parseInt(searchId));
      setUserDetails(user);
      setSearchPerformed(true);
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSearch} className="form">
          <input
            type="number"
            placeholder="Enter ID (1-5)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="input"
            min="1"
            max="5"
          />
          <button type="submit" className="button">Search</button>
        </form>
  
        {searchPerformed && userDetails ? (
          <div className="user-details">
            <h2>User Details</h2>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>Contact No: {userDetails.contactNo}</p>
            <p>Age: {userDetails.age}</p>
          </div>
        ) : searchPerformed ? (
          <p>No user exists with this ID. Choose an ID from 1 to 5.</p>
        ) : null}
      </div>
    );
  };
  
  export default UserDetails;