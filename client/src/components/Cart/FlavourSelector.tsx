import React from 'react'
import styled from 'styled-components'

interface FlavorSelectorProps {
  flavors: string[]
  selectedFlavor: string
  onSelectFlavor: (flavor: string) => void
}

const FlavorContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: -0.75rem;
`

const FlavorRadio = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  
  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
  }
`

const FlavorLabel = styled.label`
  position: relative;
  display: inline-block;

  &:hover::after {
    content: attr(data-flavor);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
    white-space: nowrap;
  }
`

const flavorColors: { [key: string]: string } = {
  'Blue Berry': '#4169E1',
  'Fruit Punch': '#FF4136',
  'Watermelon': '#FF6B6B',
}

const FlavorSelector: React.FC<FlavorSelectorProps> = ({ flavors, selectedFlavor, onSelectFlavor }) => {
  return (
    <FlavorContainer>
      {flavors.map((flavor) => (
        <FlavorLabel key={flavor} data-flavor={flavor}>
          <FlavorRadio
            type="radio"
            name="flavor"
            value={flavor}
            checked={selectedFlavor === flavor}
            onChange={() => onSelectFlavor(flavor)}
            style={{ backgroundColor: flavorColors[flavor] }}
          />
        </FlavorLabel>
      ))}
    </FlavorContainer>
  )
}

export default FlavorSelector