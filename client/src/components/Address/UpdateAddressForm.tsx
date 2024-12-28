import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "../../api/client"; // Import your API client
import { AddressInput } from "../Cart/Cart";

interface UpdateAddressFormProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (id: number, address: AddressInput) => void;
  initialValues1: AddressInput;
  addressId: number;
}

// Yup validation schema
const addressSchema = Yup.object({
  lineOne: Yup.string().required("Address Line 1 is required"),
  lineTwo: Yup.string().optional(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be 6 digits"),
  userId: Yup.number().required("User ID is required"),
});

const UpdateAddressForm: React.FC<UpdateAddressFormProps> = ({
  show,
  onHide,
  onSubmit,
  initialValues1,
  addressId,
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues1,
    validationSchema: addressSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await onSubmit(addressId, values);
        onHide();
      } catch (error) {
        toast.error("Failed to update address.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="lineOne">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              name="lineOne"
              value={formik.values.lineOne}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.lineOne && !!formik.errors.lineOne}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lineOne}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="lineTwo">
            <Form.Label>Address Line 2 (Optional)</Form.Label>
            <Form.Control
              type="text"
              name="lineTwo"
              value={formik.values.lineTwo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.lineTwo && !!formik.errors.lineTwo}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lineTwo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.city && !!formik.errors.city}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.city}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.country && !!formik.errors.country}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.country}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.pincode && !!formik.errors.pincode}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pincode}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Update Address"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateAddressForm;