import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(res.data);
      alert('Login successful!');
      navigate('/project'); // Navigate to the project page after login
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.msg);
    }
  };

  return (
    <>
      <Breadcrumbs />
      <div className="mt-bc"></div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="loginBox">
                <h2>Welcome back!</h2>
                <p>Hey there! Ready to log in? Just enter your username and password below and you will be back in action in no time. Let's go!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="InputEmail" aria-describedby="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="btn signup-btn">Log In</button>
                  <p className='member-pgh'>Don't have an account? <Link to='/signup'> Sign Up</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
