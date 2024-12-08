// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   RegisterContainer,
//   RegisterSection,
//   IllustrationSection,
//   Form,
//   Title,
//   InputGroup,
//   Label,
//   Input,
//   Button,
//   StyledLink,
//   IllustrationImage,
//   ErrorMessage
// } from './Register.styled';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//       await axios.post('http://localhost:5000/api/users/register', {
//         username,
//         email,
//         password,
//         confirmPassword
//       });
//       alert('Registration Successful');
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <RegisterContainer>
//       <RegisterSection>
//         <Form onSubmit={handleSubmit}>
//           <Title>Create Your Account</Title>
//           {error && <ErrorMessage>{error}</ErrorMessage>}
          
//           <InputGroup>
//             <Label htmlFor="username">Username</Label>
//             <Input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <Input
//               id="confirmPassword"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               required
//             />
//           </InputGroup>

//           <Button type="submit">Register</Button>

//           <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
//             Already have an account?{' '}
//             <StyledLink to="/login">Login here</StyledLink>
//           </div>
//         </Form>
//       </RegisterSection>

//       <IllustrationSection>
//         <IllustrationImage
//           src="/logo.png?height=400&width=400"
//           alt="Medical professional illustration"
//         />
//       </IllustrationSection>
//     </RegisterContainer>
//   );
// };

// export default Register;







import React, { useState } from 'react';
import axios from 'axios';
import {
  RegisterContainer,
  RegisterSection,
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  StyledLink,
  ErrorMessage,
  LogoBackground
} from './Register.styled';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
        confirmPassword
      });
      alert('Registration Successful');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <RegisterContainer>
      <LogoBackground />
      <RegisterSection>
        <Form onSubmit={handleSubmit}>
          <Title>Create Your Account</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </InputGroup>

          <Button type="submit">Register</Button>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            Already have an account?{' '}
            <StyledLink to="/login">Login here</StyledLink>
          </div>
        </Form>
      </RegisterSection>
    </RegisterContainer>
  );
};

export default Register;

