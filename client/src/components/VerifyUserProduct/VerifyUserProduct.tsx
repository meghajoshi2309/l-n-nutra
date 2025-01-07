// src/pages/InputPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f5f9;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  margin: 0 auto 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 12px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const UserProductInputPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [productId, setProductId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/product-details-verify?email=${email}&productId=${productId}`);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Logo src="/logo.jpeg" alt="Site Logo" />
        <Message>Please provide your registered email and product ID to view the product details.</Message>
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <StyledInput
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter product ID"
          required
        />
        <SubmitButton type="submit" disabled={!email || !productId}>
          Submit
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default UserProductInputPage;
