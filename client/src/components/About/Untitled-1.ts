// import React, { useState } from "react";
// import styled from "styled-components";
// import { Phone, MapPin, Clock } from "lucide-react";

// const PageContainer = styled.div`
//   min-height: 70vh;
//   width: 100%;
//   background-image: linear-gradient(
//       0deg,
//       rgba(0, 0, 0, 0.65),
//       rgba(0, 0, 0, 0.65)
//     ),
//     url("//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2cc1a632c8c5511c86638369/jhhhhhh.jpg");
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   position: relative;
//   font-family: "Inter", sans-serif;
//   //   overflow-x: hidden;
//   background-position: 50% 50%;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 1;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 4rem 1rem;

//   @media (min-width: 768px) {
//     padding: 6rem 2rem;
//   }
// `;

// const Title = styled.h1`
//   color: white;
//   font-weight: 600;
//   margin: 0 0 1rem;
//   text-align: center;
//   font-size: 3rem;
//   line-height: 1.1;
//   text-transform: uppercase;

//   @media (min-width: 768px) {
//     font-size: 3rem;
//     text-align: left;
//   }
// `;

// const Subtitle = styled.p`
//   color: rgba(255, 255, 255, 0.7);
//   margin: 0 0 3rem;
//   text-align: center;

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// const ContentGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   flex-direction: row;
//   flex-wrap: wrap;
//   min-height: fit-content;
//   max-width: 100%;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//     gap: 4rem;
//   }
// `;

// const InfoSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
//   color: white;
//   padding: 4rem 0;

//   @media (min-width: 768px) {
//     padding-right: 4rem;
//   }
// `;

// const InfoItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 1rem;
// `;

// const IconWrapper = styled.div`
//   color: #ffc107;
//   margin-top: 12px;
// `;

// const InfoContent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const InfoTitle = styled.h3`
//   font-family: Oswald, sans-serif;
//   font-size: 2rem;
//   font-weight: 700;
//   letter-spacing: 1px;
//   text-transform: none;
//   margin: 6px 10px 14px 0px;
// `;

// const InfoText = styled.p`
//   margin: 0;
//   line-height: 1.5;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   width: 100%;
// `;

// const FormGroup = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 2rem;

//   @media (min-width: 640px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Label = styled.label`
//   color: white;
//   font-size: 1rem;
//   font-weight: 500;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 0;
//   background: transparent;
//   border: none;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.7);
//   color: white;
//   font-size: 1rem;

//   &::placeholder {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   &:focus {
//     outline: none;
//     border-bottom-color: #ffc107;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem 0;
//   background: transparent;
//   border: none;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.7);
//   color: white;
//   font-size: 1rem;
//   min-height: 100px;
//   resize: vertical;

//   &::placeholder {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   &:focus {
//     outline: none;
//     border-bottom-color: #ffc107;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 1rem;
//   background-color: #ffc107;
//   color: black;
//   border: none;
//   border-radius: 30px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background-color 0.2s;
//   margin-top: 1rem;

//   &:hover {
//     color: black;
//     background-color: #ffffff;
//   }
// `;
// const MapSection = styled.section`
//   width: 100vw;
//   margin: 4rem -1rem -4rem -1rem;
//   position: relative;

//   @media (min-width: 768px) {
//     margin: 4rem calc(-50vw + 50%) 0 calc(-50vw + 50%);
//   }
// `;

// const MapContainer = styled.div`
//   width: 100%;
//   height: 600px;
//   position: relative;
// `;

// const MapIframe = styled.iframe`
//   width: 100%;
//   height: 100%;
//   border: 0;
// `;

// interface ContactFormData {
//   email: string;
//   name: string;
//   address: string;
//   message: string;
// }

interface ContactFormData {
    email: string;
    name: string;
    address: string;
    message: string;
}

const MainContent = styled.div`
    padding: 6rem 0;
  `;

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
        < MainContent >
        <ContentWrapper>
        <Title>CONTACT US </Title>
            <Subtitle>
              Images from{ " " }
    <a
                href="https://www.freepik.com"
    target = "_blank"
    rel = "noopener noreferrer"
        >
        Freepik
        </a>
        </Subtitle>
        < ContentGrid >
        <InfoSection>
        <InfoItem>
        <IconWrapper>
        <Phone size={ 24 } aria - hidden="true" />
            </IconWrapper>
            < InfoContent >
            <InfoTitle>Call Us </InfoTitle>
                < InfoText > 1(234) 567 - 891, 1(234) 987 - 654 </InfoText>
                    </InfoContent>
                    </InfoItem>

                    < InfoItem >
                    <IconWrapper>
                    <MapPin size={ 24 } aria - hidden="true" />
                        </IconWrapper>
                        < InfoContent >
                        <InfoTitle>Location </InfoTitle>
                        <InfoText>
    121 Rock Street, 21 Avenue, New York, NY 92103 - 9000
        </InfoText>
        </InfoContent>
        </InfoItem>

        < InfoItem >
        <IconWrapper>
        <Clock size={ 24 } aria - hidden="true" />
            </IconWrapper>
            < InfoContent >
            <InfoTitle>Business Hours </InfoTitle>
                <InfoText>
    Mon – Fri .....10 am – 8 pm, Sat, Sun .......Closed
        </InfoText>
        </InfoContent>
        </InfoItem>
        </InfoSection>

        < Form onSubmit = { handleSubmit } >
            <FormGroup>
            <InputGroup>
            <Label htmlFor="email" > Email </Label>
                < Input
    id = "email"
    type = "email"
    name = "email"
    placeholder = "Enter a valid email address"
    required
    value = { formData.email }
    onChange = { handleInputChange }
        />
        </InputGroup>
        < InputGroup >
        <Label htmlFor="name" > Name </Label>
            < Input
    id = "name"
    type = "text"
    name = "name"
    placeholder = "Enter your Name"
    required
    value = { formData.name }
    onChange = { handleInputChange }
        />
        </InputGroup>
        </FormGroup>
        < InputGroup >
        <Label htmlFor="address" > Address </Label>
            < Input
    id = "address"
    type = "text"
    name = "address"
    placeholder = "Enter your address"
    required
    value = { formData.address }
    onChange = { handleInputChange }
        />
        </InputGroup>
        < InputGroup >
        <Label htmlFor="message" > Message </Label>
            < TextArea
    id = "message"
    name = "message"
    placeholder = "Enter your message"
    required
    value = { formData.message }
    onChange = { handleInputChange }
        />
        </InputGroup>
        < SubmitButton type = "submit" > Submit </SubmitButton>
            </Form>
            </ContentGrid>
            </ContentWrapper>
            </MainContent>

            < MapSection >
            <MapContainer>
            <MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006923413286!2d77.59931067479265!3d12.971599915123703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d1575110d9%3A0x623c6c5c05d5b8ee!2sGENETIC%20NUTRITION!5e0!3m2!1sen!2sin!4v1702612345678!5m2!1sen!2sin"
    loading = "lazy"
    referrerPolicy = "no-referrer-when-downgrade"
    title = "Location Map"
    aria - label="Google Maps showing our location"
        />
        </MapContainer>
        </MapSection>

        < Footer >
        <FooterContent>
        <FooterColumn>
        <FooterTitle>Product </FooterTitle>
        < FooterLink href = "#" > Features </FooterLink>
            < FooterLink href = "#" > Get an Essay </FooterLink>
                < FooterLink href = "#" > Pricing </FooterLink>
                    </FooterColumn>
                    < FooterColumn >
                    <FooterTitle>Support </FooterTitle>
                    < FooterLink href = "#" > Walkthrough </FooterLink>
                        < FooterLink href = "#" > Blog </FooterLink>
                            < FooterLink href = "#" > Contact </FooterLink>
                                </FooterColumn>
                                < FooterColumn >
                                <FooterTitle>Legal </FooterTitle>
                                < FooterLink href = "#" > Terms of service </FooterLink>
                                    < FooterLink href = "#" > Refund policy </FooterLink>
                                        < FooterLink href = "#" > Privacy policy </FooterLink>
                                            </FooterColumn>
                                            < FooterColumn >
                                            <SocialIcons>
                                            <SocialIcon href="#" aria - label="Twitter" >
                                                <Twitter size={ 24 } />
                                                    </SocialIcon>
                                                    < SocialIcon href = "#" aria - label="Facebook" >
                                                        <Facebook size={ 24 } />
                                                            </SocialIcon>
                                                            < SocialIcon href = "#" aria - label="LinkedIn" >
                                                                <Linkedin size={ 24 } />
                                                                    </SocialIcon>
                                                                    </SocialIcons>
                                                                    </FooterColumn>
                                                                    </FooterContent>
                                                                    </Footer>
                                                                    </PageContainer>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import {
    Phone,
    MapPin,
    Clock,
    Twitter,
    Facebook,
    Linkedin,
} from "lucide-react";

const PageContainer = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url("//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2cc1a632c8c5511c86638369/jhhhhhh.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const Title = styled.h1`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 3rem;
  text-align: center;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    text-align: left;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    min-height: 500px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: white;
  padding: 2rem 0;

  @media (min-width: 768px) {
    justify-content: center;
    padding-right: 4rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: #ffc107;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
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
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;

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
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;
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
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;

  &:hover {
    background-color: #ffb300;
  }
`;

const MapSection = styled.section`
  width: 100%;
  height: 600px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Footer = styled.footer`
  background-color: #1c1c1c;
  color: white;
  padding: 4rem 0 2rem;
`;

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

// interface ContactFormData {
//   email: string;
//   name: string;
//   address: string;
//   message: string;
// }

// const MainContent = styled.div`
//   padding: 6rem 0;
// `;

// export default function ContactPage() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     email: "",
//     name: "",
//     address: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission here
//   };

//   return (
//     <>
//       {/* <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Inter:wght@400;500&display=swap');
//       `}</style> */}
//       <PageContainer>
//         <Overlay />
//         <MainContent>
//           <ContentWrapper>
//             <Title>CONTACT US</Title>
//             <Subtitle>
//               Images from{" "}
//               <a
//                 href="https://www.freepik.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Freepik
//               </a>
//             </Subtitle>
//             <ContentGrid>
//               <InfoSection>
//                 <InfoItem>
//                   <IconWrapper>
//                     <Phone size={24} aria-hidden="true" />
//                   </IconWrapper>
//                   <InfoContent>
//                     <InfoTitle>Call Us</InfoTitle>
//                     <InfoText>1 (234) 567-891, 1 (234) 987-654</InfoText>
//                   </InfoContent>
//                 </InfoItem>

//                 <InfoItem>
//                   <IconWrapper>
//                     <MapPin size={24} aria-hidden="true" />
//                   </IconWrapper>
//                   <InfoContent>
//                     <InfoTitle>Location</InfoTitle>
//                     <InfoText>
//                       121 Rock Street, 21 Avenue, New York, NY 92103-9000
//                     </InfoText>
//                   </InfoContent>
//                 </InfoItem>

//                 <InfoItem>
//                   <IconWrapper>
//                     <Clock size={24} aria-hidden="true" />
//                   </IconWrapper>
//                   <InfoContent>
//                     <InfoTitle>Business Hours</InfoTitle>
//                     <InfoText>
//                       Mon – Fri ..... 10 am – 8 pm, Sat, Sun ....... Closed
//                     </InfoText>
//                   </InfoContent>
//                 </InfoItem>
//               </InfoSection>

//               <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                   <InputGroup>
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       name="email"
//                       placeholder="Enter a valid email address"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                   </InputGroup>
//                   <InputGroup>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       type="text"
//                       name="name"
//                       placeholder="Enter your Name"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                     />
//                   </InputGroup>
//                 </FormGroup>
//                 <InputGroup>
//                   <Label htmlFor="address">Address</Label>
//                   <Input
//                     id="address"
//                     type="text"
//                     name="address"
//                     placeholder="Enter your address"
//                     required
//                     value={formData.address}
//                     onChange={handleInputChange}
//                   />
//                 </InputGroup>
//                 <InputGroup>
//                   <Label htmlFor="message">Message</Label>
//                   <TextArea
//                     id="message"
//                     name="message"
//                     placeholder="Enter your message"
//                     required
//                     value={formData.message}
//                     onChange={handleInputChange}
//                   />
//                 </InputGroup>
//                 <SubmitButton type="submit">Submit</SubmitButton>
//               </Form>
//             </ContentGrid>
//           </ContentWrapper>
//         </MainContent>

//         <MapSection>
//           <MapContainer>
//             <MapIframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006923413286!2d77.59931067479265!3d12.971599915123703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d1575110d9%3A0x623c6c5c05d5b8ee!2sGENETIC%20NUTRITION!5e0!3m2!1sen!2sin!4v1702612345678!5m2!1sen!2sin"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Location Map"
//               aria-label="Google Maps showing our location"
//             />
//           </MapContainer>
//         </MapSection>

//         <Footer>
//           <FooterContent>
//             <FooterColumn>
//               <FooterTitle>Product</FooterTitle>
//               <FooterLink href="#">Features</FooterLink>
//               <FooterLink href="#">Get an Essay</FooterLink>
//               <FooterLink href="#">Pricing</FooterLink>
//             </FooterColumn>
//             <FooterColumn>
//               <FooterTitle>Support</FooterTitle>
//               <FooterLink href="#">Walkthrough</FooterLink>
//               <FooterLink href="#">Blog</FooterLink>
//               <FooterLink href="#">Contact</FooterLink>
//             </FooterColumn>
//             <FooterColumn>
//               <FooterTitle>Legal</FooterTitle>
//               <FooterLink href="#">Terms of service</FooterLink>
//               <FooterLink href="#">Refund policy</FooterLink>
//               <FooterLink href="#">Privacy policy</FooterLink>
//             </FooterColumn>
//             <FooterColumn>
//               <SocialIcons>
//                 <SocialIcon href="#" aria-label="Twitter">
//                   <Twitter size={24} />
//                 </SocialIcon>
//                 <SocialIcon href="#" aria-label="Facebook">
//                   <Facebook size={24} />
//                 </SocialIcon>
//                 <SocialIcon href="#" aria-label="LinkedIn">
//                   <Linkedin size={24} />
//                 </SocialIcon>
//               </SocialIcons>
//             </FooterColumn>
//           </FooterContent>
//         </Footer>
//       </PageContainer>
//     </>
//   );
// }
