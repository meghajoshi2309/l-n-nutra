import React from 'react';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  AnimatedText,
  HeroTitle,
  HeroText,
  ProductsSection,
  ProductGrid,
  ProductCard,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from './Home.styled';

const products = [
  {
    id: 1,
    name: "VENOM-X Pre-Workout",
    description: "Ultimate pre-workout formula with Black Currant flavor. Enhanced with L-Citrulline, Beta Alanine, and Caffeine for maximum performance.",
    price: "$49.99",
    image: "venom-x-pre.jpg",
    color: "purple"
  },
  {
    id: 2,
    name: "PRE Workout Red Lion",
    description: "Powerful pre-workout with Red Apple flavor. Features a premium blend of performance enhancers for intense workouts.",
    price: "$54.99",
    image: "pre-workout-red.jpg",
    color: "red"
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    description: "Premium Creatine Monohydrate with refreshing Pink Lemonade flavor. 5g per serving for optimal muscle strength and recovery.",
    price: "$39.99",
    image: "creatine-pink.jpg",
    color: "pink"
  }
];

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <AnimatedText>
            <HeroTitle>Transform Your Limits</HeroTitle>
          </AnimatedText>
          
          <AnimatedText>
            <HeroText>
              Elevate your workout performance with our premium range of supplements. 
              Scientifically formulated to help you break through plateaus and achieve 
              your fitness goals faster than ever before.
            </HeroText>
          </AnimatedText>
        </HeroContent>
      </HeroSection>

      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
      <ProductsSection>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} color={product.color}>
              <img src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsSection>
    </HomeContainer>
  );
};

export default Home;