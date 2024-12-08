import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For eye icons
import axios from "axios";
import {
  Button,
  Input,
  PasswordInput,
  PasswordInputWrapper,
  RegisterContainer,
  ToggleIcon,
} from "./Register.styled";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });
      alert("Registration Successful");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <RegisterContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
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
        <PasswordInputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </ToggleIcon>
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <ToggleIcon
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </ToggleIcon>
        </PasswordInputWrapper>
        <Button type="submit">Register</Button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
