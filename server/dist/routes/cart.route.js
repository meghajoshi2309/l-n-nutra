"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Get all cart items - accessible by authenticated users
router.get('/', auth_middleware_1.authenticate, cart_controller_1.getCartItemsController);
// Add a product to cart - accessible by authenticated users
router.post('/', auth_middleware_1.authenticate, cart_controller_1.addCartItemController);
// Update cart item quantity - accessible by authenticated users
router.put('/soft-delete-all', auth_middleware_1.authenticate, cart_controller_1.softDeleteAllCartItemsController);
router.put('/:id', auth_middleware_1.authenticate, cart_controller_1.updateCartItemController);
// Delete cart item - accessible by authenticated users
router.delete('/:id', auth_middleware_1.authenticate, cart_controller_1.deleteCartItemController);
exports.default = router;
