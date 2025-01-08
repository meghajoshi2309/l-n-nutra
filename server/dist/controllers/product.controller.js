"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.updateProductController = exports.createProductController = exports.getProductByIdController = exports.getAllProductsController = void 0;
const product_service_1 = require("../services/product.service");
const product_validation_1 = require("../validators/product.validation");
const zod_1 = require("zod");
const library_1 = require("@prisma/client/runtime/library");
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.getAllProducts)();
    const transformedProducts = products.map(product => (Object.assign(Object.assign({}, product), { Price: new library_1.Decimal(product.Price).toNumber() })));
    res.json(transformedProducts);
});
exports.getAllProductsController = getAllProductsController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    const product = yield (0, product_service_1.getProductById)(id);
    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    const transformedProduct = Object.assign(Object.assign({}, product), { Price: new library_1.Decimal(product.Price).toNumber() });
    res.json(transformedProduct);
});
exports.getProductByIdController = getProductByIdController;
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = product_validation_1.createProductSchema.parse(req.body);
        const product = yield (0, product_service_1.createProduct)(parsedData);
        res.status(201).json(product);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.createProductController = createProductController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = product_validation_1.updateProductSchema.parse(req.body);
        const id = parseInt(req.params.id);
        const product = yield (0, product_service_1.updateProduct)(id, parsedData);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.updateProductController = updateProductController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const product = yield (0, product_service_1.deleteProduct)(id);
    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.json({ message: 'Product deleted successfully' });
});
exports.deleteProductController = deleteProductController;
