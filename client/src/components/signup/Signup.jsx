import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs'
import './signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    password: '',
  });

  const { name, email, phone, batch, password } = formData;
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log(res.data);
      alert('Signup successful!');
      navigate('/login'); // Navigate to the login page
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
              <div className="signupbox">
                <h2>Create Your Account</h2>
                <p>We just need a few details from you to get started. Lets do this!</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="InputName" aria-describedby="Name" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="InputEmail" aria-describedby="email" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className="form-control" id="InputPassword" placeholder="Password" />
                  </div>
                  {/* <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="InputConfirmPassword" placeholder="Confirm Password"/>
                                </div> */}
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={phone} onChange={handleChange} className="form-control" id="InputPhoneNumber" aria-describedby="PhoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Batch Name</label>
                    <input type="text" name="batch" value={batch} onChange={handleChange} className="form-control" id="InputBatchName" aria-describedby="BatchName" placeholder="Batch Name" />
                  </div>
                  <button type="submit" className="btn signup-btn">Sign Up</button>
                  <p className='member-pgh'>Already have an account? <Link to='/login'> Login</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup