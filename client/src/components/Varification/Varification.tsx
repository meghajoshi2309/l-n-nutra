import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../api/client';

const Verification: React.FC = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      apiClient.get(`/auth/verify/${token}`)
        .then(() => {
          alert('Email verified successfully. You can now log in.');
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
          alert('Invalid verification link.');
          navigate('/register');
        });
    }
  }, [token, navigate]);

  return (
    <div>
      <p>Verifying your email...</p>
    </div>
  );
};

export default Verification;