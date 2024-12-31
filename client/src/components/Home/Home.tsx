// import React from 'react';
// import {
//   HomeContainer,
//   HeroSection,
//   HeroContent,
//   AnimatedText,
//   HeroTitle,
//   HeroText,
// } from './Home.styled';
// import ProductList from '../Product/ProductList/ProductList';
// import Slider from '../Slider/Slider';

// const Home: React.FC = () => {
//   return (
//     <>
//       {/* <HomeContainer>
//         <HeroSection>
//           <HeroContent>
//             <AnimatedText>
//               <HeroTitle>Transform Your Limits</HeroTitle>
//             </AnimatedText>
//             <AnimatedText>
//               <HeroText>
//                 Elevate your workout performance with our premium range of supplements.
//                 Scientifically formulated to help you break through plateaus and achieve
//                 your fitness goals faster than ever before.
//               </HeroText>
//             </AnimatedText>
//           </HeroContent>
//         </HeroSection>
//       </HomeContainer> */}
//       <Slider />
//       <ProductList />
//     </>

//   );
// };

// export default Home;



import React, { useRef } from 'react';
import ProductList from '../Product/ProductList/ProductList';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';

const Home: React.FC = () => {
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Slider onViewProducts={scrollToProducts} />
      {/* <div ref={productRef}>
        <ProductList />
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
