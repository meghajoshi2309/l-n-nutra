'use client'

import { useState } from 'react'
import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`

const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.isSelected ? '#4CAF50' : 'transparent'};
  transition: border-color 0.2s;
  
  &:hover {
    border-color: ${props => props.isSelected ? '#4CAF50' : '#ddd'};
  }
`

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <GalleryContainer>
      <MainImage 
        src={images[selectedImage]} 
        alt={`${productName} - View ${selectedImage + 1}`} 
      />
      <ThumbnailsContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`${productName} - Thumbnail ${index + 1}`}
            isSelected={selectedImage === index}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </ThumbnailsContainer>
    </GalleryContainer>
  )
}

