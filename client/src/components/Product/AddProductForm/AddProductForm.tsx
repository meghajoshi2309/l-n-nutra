// src/ProductForm.tsx
import axios from "axios";
import { log } from "console";
import React, { useState } from "react";
import styled from "styled-components";

// Define the Product interface for TypeScript
interface Product {
    Name: string;
    Description: string;
    Price: number;
    Tag: string;
    StockQuantity: number;
}

// Styled Components for the form
const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

interface Product {
    Name: string;
    Description: string;
    Price: number;
    Tag: string;
    StockQuantity: number;
    ImageUrl?: string;
}

const ProductForm: React.FC = () => {
    const [formData, setFormData] = useState<Product>({
        Name: "",
        Description: "",
        Price: 0,
        Tag: "",
        StockQuantity: 0,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageFile) {
            alert("Please upload an image.");
            return;
        }

        try {
            setUploading(true);
            // Upload image to Cloudinary
            const formDataForImage = new FormData();
            formDataForImage.append("file", imageFile);
            formDataForImage.append("upload_preset", "lnnutra"); // Replace with your Cloudinary preset

            const cloudinaryResponse = await axios.post(
                "https://api.cloudinary.com/v1_1/djj0dl6dz/image/upload", // Replace with your Cloudinary URL
                formDataForImage
            );
            const imageUrl = cloudinaryResponse.data.secure_url;

            // Add image URL to form data
            const fullData = { ...formData, ImageUrl: imageUrl };

            // Submit the product data
            const response = await axios.post(
                "http://localhost:5000/api/products",
                fullData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 201) {
                alert("Product added successfully!");
                setFormData({
                    Name: "",
                    Description: "",
                    Price: 0,
                    Tag: "",
                    StockQuantity: 0,
                    ImageUrl: "",
                });
                setImageFile(null);
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the product.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <FormContainer>
            <FormTitle>Add Product</FormTitle>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="Name">Name</Label>
                    <Input
                        type="text"
                        id="Name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Description">Description</Label>
                    <TextArea
                        id="Description"
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Price">Price</Label>
                    <Input
                        type="number"
                        id="Price"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Tag">Tag</Label>
                    <Input
                        type="text"
                        id="Tag"
                        name="Tag"
                        value={formData.Tag}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="StockQuantity">Stock Quantity</Label>
                    <Input
                        type="number"
                        id="StockQuantity"
                        name="StockQuantity"
                        value={formData.StockQuantity}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Image">Image</Label>
                    <Input type="file" id="Image" name="Image" onChange={handleFileChange} />
                </FormGroup>
                <Button type="submit" disabled={uploading}>
                    {uploading ? "Uploading..." : "Add Product"}
                </Button>
            </form>
        </FormContainer>
    );
};

export default ProductForm;
