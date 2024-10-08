import React, { useState } from "react";

import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Medjeex_Logo from '../../../asset/images/Designer.jpeg';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3000/auth/reset-password/${token}`, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for reset password link.");
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
    <div className="logo-container">
        <img src={Medjeex_Logo} alt="Logo" className="logo" />
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
