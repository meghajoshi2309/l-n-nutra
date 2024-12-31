import React, { useState } from 'react'
import styled from 'styled-components'
import { Minus, Plus, X } from 'lucide-react'
import FlavorSelector from './FlavourSelector'
import ProductImageGallery from '../Products/prod-imgs'

interface ProductPopupProps {
  onClose: () => void
  image: string
}

interface Product {
  id: number
  name: string
  originalPrice: number
  price: number
  discount: number
  images: string[]
  description: string
  flavors: string[]
  weights: string[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-areas: 
      "gallery details"
      "description details";
    gap: 2rem;
    max-width: 1200px;
    padding: 2rem;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s, background-color 0.2s;
  z-index: 10;

  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;
  }

  &:hover {
    color: #000;
    background: rgba(255, 255, 255, 1);
  }
`

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-area: details;
    gap: 1.5rem;
    padding: 2rem;
    width: 400px;
  }
`

const ProductName = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`

const OriginalPrice = styled.span`
  font-size: 0.875rem;
  color: #666;
  text-decoration: line-through;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`

const DiscountText = styled.span`
  color: #00a642;
  font-size: 0.875rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1em;
  padding-right: 2.5rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`

const QuantityContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  height: 44px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 40px;
  }
`

const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #666;

  &:hover:not(:disabled) {
    background: #e5e5e5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 40px;
  }
`

const QuantityText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  background: white;
  font-size: 1rem;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  @media (min-width: 768px) {
    min-width: 40px;
    font-size: 0.875rem;
  }
`

const AddToCartButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.2s;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background: #45a049;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
  }
`

const FlavorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`

const SectionTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0 0 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 0 1rem 0;
  }
`

const Description = styled.div`
  padding: 1rem;
  border-top: 1px solid #ddd;
  white-space: pre-line;
  color: #666;
  font-size: 0.875rem;
  line-height: 1.6;
  background: #f9f9f9;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    grid-area: description;
    padding: 2rem;
  }
`

const GalleryWrapper = styled.div`
  @media (min-width: 1024px) {
    grid-area: gallery;
  }
`

const ProductPopup: React.FC<ProductPopupProps> = ({ onClose, image }) => {
  const [selectedFlavor, setSelectedFlavor] = useState('')
  const [selectedWeight, setSelectedWeight] = useState('')
  const [quantity, setQuantity] = useState(1)

  const product: Product = {
    id: 1,
    name: 'Venom-X Pre-Workout',
    originalPrice: 1055.00,
    price: 675.00,
    discount: 36,
    images: [
      '/product-1.jpeg?height=400&width=400',
      '/product-2.jpeg?height=400&width=400',
      '/product-3.jpeg?height=400&width=400',
      '/product-1.jpeg?height=400&width=400'
    ],
    description: `Experience the ultimate pre-workout formula with Venom-X. 
    Engineered for maximum performance, this premium supplement delivers:
    
    • Explosive Energy & Focus
    • Enhanced Strength & Power
    • Improved Endurance
    • Better Muscle Pumps
    
    Our scientifically formulated blend of ingredients ensures you get the most out of every workout session.`,
    flavors: ['Blue Berry', 'Fruit Punch', 'Watermelon'],
    weights: ['150g', '200g', '250g']
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 5) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log({
      product,
      flavor: selectedFlavor,
      weight: selectedWeight,
      quantity
    })
    onClose()
  }

  return (
    <Container>
      <CloseButton onClick={onClose}>
        <X size={24} />
      </CloseButton>
      <GalleryWrapper>
        <ProductImageGallery images={product.images} productName={product.name} />
      </GalleryWrapper>
      <Description>{product.description}</Description>
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          <Price>₹{product.price.toFixed(2)}</Price>
          <OriginalPrice>₹{product.originalPrice.toFixed(2)}</OriginalPrice>
          <DiscountText>{product.discount}% off</DiscountText>
        </PriceContainer>

        <FlavorSection>
          <SectionTitle>Select Flavor</SectionTitle>
          <FlavorSelector
            flavors={product.flavors}
            selectedFlavor={selectedFlavor}
            onSelectFlavor={setSelectedFlavor}
          />
        </FlavorSection>

        <div>
          <SectionTitle>Select Weight</SectionTitle>
          <Select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
          >
            <option value="">Choose weight</option>
            {product.weights.map((weight) => (
              <option key={weight} value={weight}>
                {weight}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <SectionTitle>Quantity</SectionTitle>
          <QuantityContainer>
            <QuantityButton 
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </QuantityButton>
            <QuantityText>{quantity}</QuantityText>
            <QuantityButton 
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 5}
            >
              <Plus size={16} />
            </QuantityButton>
          </QuantityContainer>
        </div>

        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </ProductDetails>
    </Container>
  )
}

export default ProductPopup
