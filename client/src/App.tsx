import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
