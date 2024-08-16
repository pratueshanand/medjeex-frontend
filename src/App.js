import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Course from "./pages/course/Course";
import Signup from './pages/register/signup/Signup.jsx';
import Login from './pages/register/logins/Login.jsx';
import ResetPassword from './pages/register/reset/ResetPassword.jsx';
import ForgotPassword from './pages/register/forgot/Forgotpassword.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      
    </Routes>
  );
}

export default App;
