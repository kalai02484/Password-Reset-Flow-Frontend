import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Register from "./pages/Register";
import ResetPasswod from "./pages/ResetPasswod";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-passowrd" element={<ResetPasswod />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
