// src/pages/ProductDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../Type/Product';
import axios from 'axios';

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const productId = queryParams.get('productId');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Failed to fetch product details not valid user or product');
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [email, productId]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  if (!product) return <div>No product found</div>;

  return (
    <div>
      <h1>{product.Name}</h1>
      <p>{product.Description}</p>
      <p>Price: ${product.Price}</p>
      {/* Render more product details here */}
    </div>
  );
};

export default ProductDetailsPage;
