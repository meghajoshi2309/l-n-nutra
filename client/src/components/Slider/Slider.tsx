// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
//   background-color: #121212;
// `;

// const Slide = styled.div<{ active: boolean, bg: string }>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: ${(props) => (props.active ? '0' : '100%')};
//   opacity: ${(props) => (props.active ? '1' : '0')};
//   transition: all 2s ease-in-out;
//   z-index: ${(props) => (props.active ? '1' : '0')};
//   background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
// `;

// const TextContainer = styled.div<{ position: string }>`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   ${(props) => (props.position === 'left' ? 'left: 10%;' : 'right: 10%;')}
//   color: #fff;
//   z-index: 2;
//   text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
//   animation: ${fadeIn} 1s ease-in-out;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     left: ${(props) => (props.position === 'left' ? '5%' : 'unset')};
//     right: ${(props) => (props.position === 'right' ? '5%' : 'unset')};
//   }
// `;

// const slides = [
//   {
//     id: 1,
//     image: '/slider-1.jpg',
//     text: 'This is the first slide.',
//     textPosition: 'left',
//     bg: '#1b1b1b',
//   },
//   {
//     id: 2,
//     image: '/slider-2.jpg',
//     text: 'This is the second slide.',
//     textPosition: 'right',
//     bg: '#2a2a2a',
//   },
// ];

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container>
//       {slides.map((slide, index) => (
//         <Slide
//           key={slide.id}
//           active={index === activeIndex}
//           bg={slide.bg}
//         >
//           <Image src={slide.image} alt={`Slide ${index + 1}`} />
//           <TextContainer position={slide.textPosition}>{slide.text}</TextContainer>
//         </Slide>
//       ))}
//     </Container>
//   );
// };

// export default Slider;












/* 





import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #121212;
`;

const BackgroundImage = styled.div<{bgImage: string,active: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

const Slide = styled.div<{bg: string,active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.active ? '0' : '100%')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: all 1s ease-in-out;
  z-index: ${(props) => (props.active ? '2' : '1')};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const TextContainer = styled.div<{position: string}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === 'left' ? 'left: 10%;' : 'right: 10%;')}
  color: #fff;
  z-index: 3;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
    left: ${(props) => (props.position === 'left' ? '5%' : 'unset')};
    right: ${(props) => (props.position === 'right' ? '5%' : 'unset')};
  }
`;

const slides = [
  {
    id: 1,
    image: 'slider-1.jpg',
    text: 'This is the first slide.',
    textPosition: 'left',
    bg: '#1b1b1b',
    bgImage: 'slider-bg.png',
  },
  {
    id: 2,
    image: 'slider-2.jpg',
    text: 'This is the second slide.',
    textPosition: 'right',
    bg: '#2a2a2a',
    bgImage: 'slider-bg.png',
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {slides.map((slide, index) => (
        <BackgroundImage
          key={`bg-${slide.id}`}
          bgImage={slide.bgImage}
          active={index === activeIndex}
        />
      ))}
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          active={index === activeIndex}
          bg={slide.bg}
        >
          <Image src={slide.image} alt={`Slide ${index + 1}`} />
          <TextContainer position={slide.textPosition}>{slide.text}</TextContainer>
        </Slide>
      ))}
    </Container>
  );
};

export default Slider; */







import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #121212;
`;

const BackgroundImage = styled.div<{ bgImage: string; active: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: opacity 1.5s ease-in-out;
  opacity: ${(props) => (props.active ? '1' : '0.5')};
`;

const Slide = styled.div<{ bg: string; active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.active ? '0' : '100%')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: all 2.5s ease-in-out;
  z-index: ${(props) => (props.active ? '2' : '1')};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const TextContainer = styled.div<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === 'left' ? 'left: 10%;' : 'right: 10%;')}
  color: #fff;
  z-index: 3;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 1.5s ease-in-out;
  max-width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    transform: none;
    left: 50%;
    right: unset;
    padding: 1rem;
    transform: translateX(-50%);
    width: 90%;
  }
`;

export const AnimatedText = styled.div`
  animation: ${slideIn} 1.5s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8fee0d, #c6ed95);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 90%; /* Allow the text to be responsive */
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #8fee0d, #b7ed75);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  text-align: center; /* Center the text */

  @media (min-width: 768px) {
    font-size: 1.25rem;
    max-width: 600px; /* Set max-width for larger screens */
  }
`;

const ViewButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #7ae40f, #677d4d);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  animation: ${fadeIn} 1.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const slides = [
    {
        id: 1,
        image: 'slider-5.jpg',
        text: (
            <>
                <AnimatedText>
                    <HeroTitle>Transform Your Limits</HeroTitle>
                </AnimatedText>
                <AnimatedText>
                    <HeroText>
                        Elevate your workout performance with our premium range of supplements. Scientifically formulated to help you break through plateaus and achieve your fitness goals faster than ever before.
                    </HeroText>
                </AnimatedText>
            </>
        ),
        textPosition: 'left',
        bg: '#2a2a2a',
        bgImage: 'slider-bg.png',
    },
    {
        id: 2,
        image: 'slider-2.jpg',
        text: (
            <>
                <AnimatedText>
                    <HeroTitle>Achieve More</HeroTitle>
                </AnimatedText>
                <AnimatedText>
                    <HeroText>
                        Discover our expertly crafted solutions designed to maximize your energy, endurance, and recovery. Push past your limits and redefine your potential.
                    </HeroText>
                </AnimatedText>
            </>
        ),
        textPosition: 'right',
        bg: '#2a2a2a',
        bgImage: 'slider-bg.png',
    },
];

const Slider = ({ onViewProducts }: { onViewProducts: () => void }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setShowText(false);
        const timeout = setTimeout(() => {
            setShowText(true);
        }, 1000); // Delay the text and button appearance after the slide transition

        return () => clearTimeout(timeout);
    }, [activeIndex]);

    return (
        <Container>
            {slides.map((slide, index) => (
                <BackgroundImage
                    key={`bg-${slide.id}`}
                    bgImage={slide.bgImage}
                    active={index === activeIndex}
                />
            ))}
            {slides.map((slide, index) => (
                <Slide key={slide.id} active={index === activeIndex} bg={slide.bg}>
                    <Image src={slide.image} alt={`Slide ${index + 1}`} />
                    <TextContainer position={slide.textPosition}>
                        {index === activeIndex && showText && slide.text}
                        {index === activeIndex && showText && (
                            <ViewButton onClick={onViewProducts}>View Products</ViewButton>
                        )}
                    </TextContainer>
                </Slide>
            ))}
        </Container>
    );
};

export default Slider;