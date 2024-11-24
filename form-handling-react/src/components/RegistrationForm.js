import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!username || !email || !password) {
      setError('All fields are required!');
    } else {
      setError('');
      console.log('Form submitted', { username, email, password });
      // Here, you would typically send the data to an API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
