import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, RegisterContainer } from './Register.styled';
import { Link } from 'react-router-dom';



const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      console.log(username, email, password, confirmPassword);

      await axios.post('http://localhost:5000/api/users/register', { username, email, password, confirmPassword });
      alert('Registration Successful');
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <RegisterContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
