import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory(); // Initialize history for React Router

  const handleLogin = () => {
    // Implement your login logic here.
    // For this example, let's assume a simple check for a hardcoded username and password.
    if (username === 'exampleUser' && password === 'examplePassword') {
      // Successful login
      history.push('/profile'); // Redirect to the profile page upon successful login
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

