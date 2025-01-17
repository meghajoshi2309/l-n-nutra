"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
// Get all products - accessible by all users
router.get('/', product_controller_1.getAllProductsController);
// Get product by ID - accessible by all users
router.get('/:id', product_controller_1.getProductByIdController);
// Create a product - only admins can access
router.post('/', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)([client_1.Role.ADMIN]), product_controller_1.createProductController);
// Update a product - only admins can access
router.put('/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)([client_1.Role.ADMIN]), product_controller_1.updateProductController);
// Delete a product - only admins can access
router.delete('/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)([client_1.Role.ADMIN]), product_controller_1.deleteProductController);
exports.default = router;
