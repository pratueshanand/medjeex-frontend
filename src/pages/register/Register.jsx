import React from 'react';
import './Register.css';
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
        {/* Forms will be rendered here based on routing */}
      </div>
    </div>
  );
}

export default Register;
