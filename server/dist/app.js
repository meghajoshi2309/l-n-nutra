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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const cart_route_1 = __importDefault(require("./routes/cart.route"));
const address_route_1 = __importDefault(require("./routes/address.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const phoneNumber_route_1 = __importDefault(require("./routes/phoneNumber.route"));
const models_1 = __importDefault(require("./models"));
const prebooking_route_1 = __importDefault(require("./routes/prebooking.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', auth_route_1.default);
app.use('/api/products', product_route_1.default);
app.use('/api/cart', cart_route_1.default);
app.use('/api/addresses', address_route_1.default);
app.use('/api/orders', order_route_1.default);
app.use('/api/phone-number', phoneNumber_route_1.default);
// Example backend route to fetch mobile number
app.get('/api/phone-number/user/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const phoneNumber = yield models_1.default.phoneNumber.findFirst({
        where: { userId: Number(userId) },
    });
    res.json(phoneNumber);
}));
app.use('/api/prebook', prebooking_route_1.default);
exports.default = app;
