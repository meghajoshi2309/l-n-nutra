// import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const float = keyframes`
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// `;

// export const RegisterContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background: #ffffff;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// export const RegisterSection = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   animation: ${fadeIn} 0.6s ease-out;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// export const IllustrationSection = styled.div`
//   flex: 1;
//   background: linear-gradient(135deg, #434e48 0%, #000000 100%);
//   /* background-color: black; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     min-height: 300px;
//   }
// `;

// export const Form = styled.form`
//   width: 100%;
//   max-width: 400px;
//   padding: 2rem;
//   border-radius: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   background: white;
// `;

// export const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 2rem;
//   color: #1f2937;
//   text-align: center;
// `;

// export const InputGroup = styled.div`
//   margin-bottom: 1.5rem;
// `;

// export const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   color: #4b5563;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border: 2px solid #e5e7eb;
//   border-radius: 0.5rem;
//   font-size: 1rem;
//   transition: all 0.2s;

//   &:focus {
//     outline: none;
//     border-color: #4ADE80;
//     box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
//   }
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background: linear-gradient(135deg, #4ADE80 0%, #64748B 100%);
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     opacity: 0.9;
//     transform: translateY(-1px);
//   }
// `;

// export const StyledLink = styled(Link)`
//   color: #4ADE80;
//   text-decoration: none;
//   font-weight: 500;
//   transition: color 0.2s;

//   &:hover {
//     color: #64748B;
//   }
// `;

// export const IllustrationImage = styled.img`
//   width: 80%;
//   max-width: 500px;
//   animation: ${float} 6s ease-in-out infinite;
// `;

// export const ErrorMessage = styled.div`
//   color: #ef4444;
//   margin-bottom: 1rem;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background-color: #fee2e2;
//   text-align: center;
// `;









import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
`;

export const RegisterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/logo.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: 0;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4ADE80;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #4ADE80 0%, #64748B 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export const StyledLink = styled(Link)`
  color: #4ADE80;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #64748B;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fee2e2;
  text-align: center;
`;

