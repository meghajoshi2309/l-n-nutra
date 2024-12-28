import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Navbar, Nav, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import apiClient from "../../api/client";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import { Product } from "../Type/Product";


const AdminPanel: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product>({} as Product);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await apiClient.get("/products");
            setProducts(response.data);
        } catch (error) {
            toast.error("Failed to fetch products.");
        }
    };

    const handleAddProduct = async (values: any) => {
        try {
            await apiClient.post("/products", values);
            toast.success("Product added successfully.");
            setShowAddModal(false);
            fetchProducts();
        } catch (error) {
            toast.error("Failed to add product.");
        }
    };

    const handleUpdateProduct = async (values: any) => {
        try {
            await apiClient.put(`/products/${selectedProduct.id}`, values);
            toast.success("Product updated successfully.");
            setShowEditModal(false);
            fetchProducts();
        } catch (error) {
            toast.error("Failed to update product.");
        }
    };

    const handleDeleteProduct = async () => {
        try {
            await apiClient.delete(`/products/${selectedProduct.id}`);
            toast.success("Product deleted successfully.");
            setShowDeleteModal(false);
            fetchProducts();
        } catch (error) {
            toast.error("Failed to delete product.");
        }
    };

    return (
        <div className="">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" className="container-fluid">
                <Container>
                    <Navbar.Brand href="/admin">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/admin">Product</Nav.Link>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Admin Panel Content */}
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <h2 className="text-center w-100">Product Management</h2>
            </div>
            <div className="d-flex align-items-center mb-3">
                <Button onClick={() => setShowAddModal(true)} className="ms-auto me-3">
                    Add Product
                </Button>
            </div>



            <div className="table-responsive container-fluid">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{product.StockQuantity}</td>
                                <td>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setShowEditModal(true);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setShowDeleteModal(true);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

            {/* Add Product Modal */}
            <Modal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
                size="lg"
                aria-labelledby="addProductModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProductForm
                        onSubmit={handleAddProduct}
                        initialValues={{
                            Name: "",
                            Price: null,
                            StockQuantity: null,
                            Description: "",
                            Tag: "",
                            ImageUrl: "",
                        }}
                        setShowAddModal={setShowAddModal}
                    />
                </Modal.Body>
            </Modal>

            {/* Edit Product Modal */}
            <Modal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                size="lg"
                aria-labelledby="editProductModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProductForm
                        onSubmit={handleUpdateProduct}
                        initialValues={{
                            Name: selectedProduct?.Name || "",
                            Price: selectedProduct?.Price || null,
                            StockQuantity: selectedProduct?.StockQuantity || null,
                            Description: selectedProduct?.Description || "",
                            Tag: selectedProduct?.Tag || "",
                            ImageUrl: selectedProduct?.ImageUrl || "",
                        }}
                        setShowEditModal={setShowEditModal}
                    />
                </Modal.Body>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                aria-labelledby="deleteProductModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteProduct}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminPanel;
