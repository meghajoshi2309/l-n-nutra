import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Cart from './components/Cart/Cart';
import ContactPage from './components/ContactUs/ContactUs';
import AdminPanel from './components/Admin/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import Verification from './components/Varification/Varification';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import Products from './components/Products/Products';
import UserProductInputPage from './components/VerifyUserProduct/VerifyUserProduct';
import ProductDetailsPage from './components/VerifyUserProduct/ProductDetailsAfterVerification';
import ProductPopup from './components/Products/ProductPopup';
import OurStory from './components/Footer/OurStory';

const App: React.FC = () => {
  return (
    // <Router>
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-user-product" element={<UserProductInputPage />} />
          <Route path="/product-details-verify" element={<ProductDetailsPage />} />
          <Route path="/verify/:token" element={<Verification />} />

          {/* Layout-based routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path='products' element={<Products/>}/>
            <Route path='product-details/:id' element={<ProductPopup setCartItems={}/>}/>
            <Route path='our-story' element={<OurStory/>}/>
            {/* Protected Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/cart" element={<Cart />} />
            {/* </Route> */}
          </Route>


          {/* Admin Panel Route */}
          <Route
            path="admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </CartProvider>
    </AuthProvider>
    // </Router>
  );
};

export default App;