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



import React, { useContext, useEffect, useRef, useState } from 'react';
import ProductList from '../Product/ProductList/ProductList';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/client';
import DiscountPopup from '../DiscountPopUp/DiscountPopUp';

const Home: React.FC = () => {
  const productRef = useRef<HTMLDivElement>(null);

  const [isEligibleForDiscount, setIsEligibleForDiscount] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  const { user } = useContext(AuthContext);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // if (user) {
      const checkEligibility = async () => {
        try {
          const response = await apiClient.post('/prebook/check-discount-eligibility', { userId: user?.userId});
          if (response.data.eligible) {
            setIsEligibleForDiscount(true);
            setShowDiscountPopup(true);
          }
        } catch (error) {
          console.error('Failed to check discount eligibility:', error);
        }
      };

      checkEligibility();
    // }
  }, [user]);

  const handleClosePopup = () => {
    setShowDiscountPopup(false);
  };

  useEffect(() =>{
    console.log("showDiscountPopup",showDiscountPopup);
    
  },[showDiscountPopup])

  return (
    <>
      <Slider onViewProducts={scrollToProducts} />
      {/* <div ref={productRef}>
        <ProductList />
      </div> */}
      {showDiscountPopup && (
        <DiscountPopup onClose={handleClosePopup} />
      )}
      <Footer />
    </>
  );
};

export default Home;
