import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
// import { Phone, MapPin, Clock } from "lucide-react";

const PageContainer = styled.div`
  min-height: 70vh;

  position: relative;
  font-family: "Inter", sans-serif;
  //   overflow-x: hidden;
  background-position: 50% 50%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  box-sizing: border-box; /* Include padding and border in width */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url("//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2cc1a632c8c5511c86638369/jhhhhhh.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    padding: 6rem 10rem;
  }
`;

const Title = styled.h1`
  color: white;
  font-weight: 600;
  margin: 0 0 1rem;
  text-align: center;
  font-size: 3rem;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
    padding-left: 4rem;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 3rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: fit-content;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;
  padding: 3rem 4rem;

  @media (min-width: 768px) {
    padding-right: 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: #ffc107;
  margin-top: 12px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-family: Oswald, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: none;
  margin: 6px 10px 14px 0px;
`;

const InfoText = styled.p`
  margin: 0;
  line-height: 1.5;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70%;
  @media (max-width: 768px) {
    align-items: center;
    padding-left: 3em;
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-bottom-color: #ffc107;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-bottom-color: #ffc107;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ffc107;
  color: black;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #000;
  }
`;

const MainContent = styled.div`
  padding: 6rem 0 0 0;
`;

const MapSection = styled.section`
  width: 100%; /* Changed from 100vw */
  margin: 4rem 0; /* Adjusted margins */
  position: relative;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden; /* Prevent overflow */
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

// const Footer = styled.footer`
//   background-color: #1c1c1c;
//   color: white;
//   padding: 4rem 0 2rem;
// `;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  &:hover {
    color: #ffffff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #9ca3af;
  &:hover {
    color: #ffffff;
  }
`;

interface ContactFormData {
  email: string;
  name: string;
  address: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    name: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = {
    phone: {
      primary: "1 (234) 567-891",
      secondary: "1 (234) 987-654",
    },
    location: "121 Rock Street, 21 Avenue, New York, NY 92103-9000",
    businessHours: "Mon – Fri ..... 10 am – 8 pm, Sat, Sun ....... Closed",
  };

  return (
    <PageContainer>
      <Overlay />
      <MainContent>
        <ContentWrapper>
          <Title>CONTACT US</Title>
          <ContentGrid>
            <InfoSection>
              <InfoItem>
                <IconWrapper>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  ></img>
                  {/* <Phone size={24} aria-hidden="true" /> */}
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Call Us</InfoTitle>
                  <InfoText>
                    {contactInfo.phone.primary}, {contactInfo.phone.secondary}
                  </InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <img
                    src="data:image/png;base64,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"
                    alt="location"
                    aria-hidden
                    width={24}
                    height={24}
                  ></img>
                  {/* <MapPin size={24} aria-hidden="true" /> */}
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Location</InfoTitle>
                  <InfoText>{contactInfo.location}</InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <img
                    src="data:image/png;base64,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"
                    alt="clock"
                    aria-hidden="true"
                    width={24}
                    height={24}
                  ></img>
                  {/* <Clock size={24} aria-hidden="true" /> */}
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Business Hours</InfoTitle>
                  <InfoText>{contactInfo.businessHours}</InfoText>
                </InfoContent>
              </InfoItem>
            </InfoSection>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <InputGroup>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            </Form>
          </ContentGrid>
        </ContentWrapper>
      </MainContent>
      <MapSection>
        <MapContainer>
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006923413286!2d77.59931067479265!3d12.971599915123703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d1575110d9%3A0x623c6c5c05d5b8ee!2sGENETIC%20NUTRITION!5e0!3m2!1sen!2sin!4v1702612345678!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            aria-label="Google Maps showing our location"
          />
        </MapContainer>
      </MapSection>

      {/* <Footer>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Product</FooterTitle>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Get an Essay</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
            <FooterLink href="#">Walkthrough</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Legal</FooterTitle>
            <FooterLink href="#">Terms of service</FooterLink>
            <FooterLink href="#">Refund policy</FooterLink>
            <FooterLink href="#">Privacy policy</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Twitter">
              </SocialIcon>
              <SocialIcon href="#" aria-label="Facebook">
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
        </FooterContent>
      </Footer> */}

      <Footer />
    </PageContainer>
  );
}