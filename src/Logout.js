import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase authentication module

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;