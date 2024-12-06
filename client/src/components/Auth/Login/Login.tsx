import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, LoginContainer } from './Login.styled';
import { Link } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log('Login Successful:', response.data);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
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
        <Button type="submit">Login</Button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </Form>
    </LoginContainer>
  );
};

export default Login;
