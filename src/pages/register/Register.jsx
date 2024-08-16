import React from 'react';
import './Register.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './logins/Login';
import ResetPassword from './reset/ResetPassword';
import ForgotPassword from './forgot/Forgotpassword';

import Medjeex_Logo from '../../asset/images/Medjeex_Logo.png';

const Register = () => {
  return (
    <div className="register-container">
     
      <div className="logo-container">
        <img src={Medjeex_Logo} alt="Logo" className="logo" />
      </div>
      <div className="form-section">
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Register;
