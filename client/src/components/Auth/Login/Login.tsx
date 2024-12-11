import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { useIsMobile } from "../../../Hook/isMobileView";
import { log } from "console";
import { useNavigate } from "react-router-dom";

const illustrations = [
  '/product-1.jpeg?height=400&width=400',
  '/product-2.jpeg?height=400&width=400',
  '/product-3.jpeg?height=400&width=400',
]


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #434e48 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  height: 35rem;
  display: flex;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    background: transparent;
  }
`;

const IllustrationSection = styled.div`
  flex: 1.5;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Ensures the image doesn't overflow the section */

  @media (max-width: 768px) {
    display: none;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const IllustrationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the section */
  animation: ${fadeIn} 0.5s ease;
  position: absolute; /* Optional: if you need absolute positioning for animations */
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
  text-align: center; /* Center-align text */
  max-width: 400px; /* Restrict the width for better alignment */
  margin: auto; /* Center it on the page */

  @media (max-width: 768px) {
    border: 2px solid #444; /* Subtle border */
    border-radius: 12px; /* Smooth rounded corners */
    background: linear-gradient(
      145deg,
      #1e1e1e,
      #2b2b2b
    ); /* Stylish gradient background */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.1); /* Outer and inner shadows */
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 70px;
  text-align: center;

  @media (max-width: 768px) {
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 33px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-bottom-color: #137903;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 768px) {
    color: white;
    background: transparent;

    width: 100%;
    padding: 12px;
    margin: 10px 0;
    background-color: #222; /* Match the dark background */
    color: #fff; /* White text for contrast */
    outline: none;
    font-size: 16px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5); /* Subtle inner shadow */
    transition: all 0.3s ease;

    &:focus {
      border-bottom-color: #666; /* Highlighted border on focus */
    }
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 8px;
  font-size: 16px;
  color: #666;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const EyeIcon = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EyeShape = styled.div<{ $isOpen: boolean }>`
  width: 20px;
  height: 12px;
  border: 1.5px solid #000000;
  border-radius: 100%;
  position: relative;
  transform: rotate(180deg);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  /* For closed eye, hide the eyeball and show the curve with lashes */
  ${(props) =>
    !props.$isOpen &&
    `border: none;
    border-bottom: 1.5px solid #000000;
    height: 6px;
    transform: none;
    overflow: visible;`}

  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    background: #000000;
    border-radius: 50%;
    top: 2px;
    left: 5px;
    transition: transform 0.3s ease;
    ${(props) => !props.$isOpen && `display: none;`}
  }

  @media (max-width: 768px) {
    border: 1.5px solid white;

    ${(props) =>
      !props.$isOpen &&
      `border: none;
    border-bottom: 1.5px solid white;
    height: 6px;
    transform: none;
    overflow: visible;`}

    &::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: 5px;
      transition: transform 0.3s ease;
      ${(props) => !props.$isOpen && `display: none;`}
    }
  }
`;

const EyePupil = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: 5px;
  height: 5px;
  background: #fbf7f7;
  border-radius: 50%;
  top: ${(props) => 2 + props.$y * 2}px;
  left: ${(props) => 5 + props.$x * 2}px;
  transition: all 0.1s ease;
`;

const Button = styled.button`
  /* background: linear-gradient(135deg, #6a8a79 0%, #000000 100%); */
  background: #000000;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 100px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;

  &:hover {
    /* background: linear-gradient(135deg, #488e68, #1a7142, #000000); */
    background: #137903;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    margin: 15px 0;
    border: none;
    border-radius: 8px;
    background-color: #4caf50; /* Green for call-to-action */
    color: #fff; /* White text */
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background-color: #45a049;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ErrorMessage = styled.div`
  color: #ff3333;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

const Link = styled.a`
  color: #137903;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    color: #68f752;
  }
`;

const SignupText = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    color: white;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  const isMobileView = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current && showPassword) {
        const eye = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eye.left + eye.width / 2;
        const eyeCenterY = eye.top + eye.height / 2;

        // Calculate angle between mouse and eye center
        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );

        // Convert angle to x,y coordinates within range -1 to 1
        const x = Math.cos(angle);
        const y = Math.sin(angle);

        setPupilPosition({ x, y });
      }
    };

    if (showPassword) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showPassword]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % illustrations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        { email, password }
      );
      console.log("Login Successful:", response.data);
      if (response.data) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Container>
      <Card>
        <IllustrationSection>
          <IllustrationImage
            src={illustrations[currentImage]}
            alt={`Illustration ${currentImage + 1}`}
          />
        </IllustrationSection>
        <FormSection>
          <Title>Welcome back!</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor="email">Email</Label>
            </InputGroup>

            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Label htmlFor="password">Password</Label>
              <EyeIcon
                onClick={() => setShowPassword(!showPassword)}
                $isOpen={showPassword}
                ref={eyeRef}
              >
                {showPassword && (
                  <EyeShape $isOpen={showPassword}>
                    {showPassword && (
                      <EyePupil $x={pupilPosition.x} $y={pupilPosition.y} />
                    )}
                  </EyeShape>
                )}
                {!showPassword && !isMobileView && (
                  <img
                    src="close_eye.png"
                    style={{ width: "24px", height: "24px" }}
                  />
                )}
                {!showPassword && isMobileView && (
                  <img
                    src="white_close_eye.png"
                    style={{ width: "24px", height: "24px" }}
                  />
                )}
              </EyeIcon>
            </InputGroup>

            <Button type="submit">Login</Button>

            <SignupText>
              Don't have an account? <Link href="/register">Sign Up</Link>
            </SignupText>
          </Form>
        </FormSection>
      </Card>
    </Container>
  );
};

export default Login;
