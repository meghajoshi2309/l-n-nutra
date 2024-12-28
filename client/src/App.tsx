import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Cart from "./components/Cart/Cart";
import ContactPage from "./components/ContactUs/ContactUs";
import ProductForm from "./components/Product/AddProductForm/AddProductForm";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./components/Blogs/Blogs";

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product" element={<ProductForm />} />
              <Route path="/blogs" element={<Blog/>}/>
            </Routes>
          </Layout>
        }
      />
    </Routes>
    <ToastContainer />
  </Router>
  );
};

export default App;
