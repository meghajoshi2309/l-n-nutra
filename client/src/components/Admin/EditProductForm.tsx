import React, { useState } from "react";
import { Form, Button, Spinner, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const productSchema = Yup.object({
    Name: Yup.string().min(6, "Name must be at least 6 characters").required("Name is required"),
    Price: Yup.number().positive("Price must be a positive number").required("Price is required"),
    StockQuantity: Yup.number().positive("Stock Quantity must be a positive number").required("Stock Quantity is required"),
    Description: Yup.string().optional(),
    Tag: Yup.string().optional(),
    ImageUrl: Yup.string().optional(),
});

interface EditProductFormProps {
    onSubmit: (values: any) => void;
    initialValues: any;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProductForm: React.FC<EditProductFormProps> = ({ 
    onSubmit, 
    initialValues,
    setShowEditModal
}) => {
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL || "";

    const handleFileUpload = async (file: File): Promise<string | null> => {
        try {
            setUploading(true);
            setUploadError(null);

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "lnnutra"); // Replace with your Cloudinary preset

            const response = await axios.post(cloudinaryUrl, formData);

            return response.data.secure_url;
        } catch (error) {
            console.error("Image upload failed:", error);
            setUploadError("Image upload failed. Please try again.");
            return null;
        } finally {
            setUploading(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={async (values) => {
                onSubmit(values);
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-4" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="Name"
                            value={formik.values.Name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.Name && !!formik.errors.Name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.touched.Name && typeof formik.errors.Name === "string" && formik.errors.Name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="Price"
                            value={formik.values.Price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.Price && !!formik.errors.Price}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.touched.Price && typeof formik.errors.Price === "number" && formik.errors.Price}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="StockQuantity">
                        <Form.Label>Stock Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="StockQuantity"
                            value={formik.values.StockQuantity}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.StockQuantity && !!formik.errors.StockQuantity}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.touched.StockQuantity && typeof formik.errors.StockQuantity === "number" && formik.errors.StockQuantity}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="Description"
                            value={formik.values.Description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="Tag">
                        <Form.Label>Tag</Form.Label>
                        <Form.Control
                            type="text"
                            name="Tag"
                            value={formik.values.Tag}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="ImageUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                                if (e.target.files && e.target.files[0]) {
                                    const uploadedUrl = await handleFileUpload(e.target.files[0]);
                                    if (uploadedUrl) {
                                        formik.setFieldValue("ImageUrl", uploadedUrl);
                                    }
                                }
                            }}
                        />
                        {uploading && <Spinner animation="border" />}
                        {uploadError && <div className="text-danger">{uploadError}</div>}
                        {formik.values.ImageUrl && (
                            <img
                                src={formik.values.ImageUrl}
                                alt="Uploaded Preview"
                                style={{ maxWidth: "100%", marginTop: "10px", width: "50px", height: "50px"}}
                            />
                        )}
                    </Form.Group>

                    <Modal.Footer className="d-flex">
                        <Button type="submit" disabled={uploading} variant="primary">
                            {uploading ? "Uploading..." : "Save Changes"}
                        </Button>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            )}
        </Formik>
    );
};

export default EditProductForm;