import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const illustrations = [
  '/ill1.png?height=400&width=400',
  '/logo.jpeg?height=400&width=400',
]


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #434e48 0%, #000000 100%);;;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  display: flex;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const IllustrationSection = styled.div`
  flex: 1.5;
  background: #f8f8f8;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const IllustrationImage = styled.img`
  max-width: 100%;
  height: auto;
  animation: ${fadeIn} 0.5s ease;
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#333" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`

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
    font-size: 12px;
    color: #137903;
  }
`

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 16px;
  color: #666;
  transition: all 0.3s ease;
  pointer-events: none;
`

const EyeIcon = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
    `
    border: none;
    border-bottom: 1.5px solid #000000;
    height: 6px;
    transform: none;
    overflow: visible;
  `}

  &::before {
    content: '';
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

`;


const EyePupil = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: 5px;
  height: 5px;
  background: #fbf7f7;
  border-radius: 50%;
  top: ${props => 2 + props.$y * 2}px;
  left: ${props => 5 + props.$x * 2}px;
  transition: all 0.1s ease;
`

const Button = styled.button`
  background: linear-gradient(135deg, #434e48 0%, #000000 100%);;;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 100px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #4ADE80 0%, #64748B 100%);;
  }
`

const ErrorMessage = styled.div`
  color: #ff3333;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`

const Link = styled.a`
  color: #137903;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [currentImage, setCurrentImage] = useState(0)

  const [showPassword, setShowPassword] = useState(false)
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 })
  const eyeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current && showPassword) {
        const eye = eyeRef.current.getBoundingClientRect()
        const eyeCenterX = eye.left + eye.width / 2
        const eyeCenterY = eye.top + eye.height / 2

        // Calculate angle between mouse and eye center
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)

        // Convert angle to x,y coordinates within range -1 to 1
        const x = Math.cos(angle)
        const y = Math.sin(angle)

        setPupilPosition({ x, y })
      }
    }

    if (showPassword) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showPassword])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % illustrations.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      })
      console.log('Login Successful:', response.data)
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred')
    }
  }

  return (
    <Container>
      <Card>
        <IllustrationSection>
          <DotsWrapper>
            {illustrations.map((_, index) => (
              <Dot
                key={index}
                isActive={currentImage === index}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </DotsWrapper>
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
                {showPassword && <EyeShape $isOpen={showPassword}>
                  {showPassword && (
                    <EyePupil
                      $x={pupilPosition.x}
                      $y={pupilPosition.y}
                    />
                  )}
                </EyeShape>}
                {!showPassword && <img src='close_eye.png' style={{ width: '24px', height: '24px' }} />}
              </EyeIcon>
            </InputGroup>

            <Button type="submit">Login</Button>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account? <Link href="/register">Sign Up</Link>
            </div>
          </Form>
        </FormSection>
      </Card>
    </Container>
  )
}

export default Login;