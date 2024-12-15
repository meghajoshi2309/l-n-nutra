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
import ContactUsPage from "./components/ContactUs/ContactUs";
import About from "./components/About/About";

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
                <Route path="/contact" element={<ContactUsPage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />

                {/*       <Route path="/blogs" element={<Blogs />} /> */}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
