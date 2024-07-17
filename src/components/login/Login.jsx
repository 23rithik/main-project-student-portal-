import React from 'react'
import { Link } from "react-router-dom"
import Breadcrumbs from '../Breadcrumbs'
import './login.css'

const Login = () => {
  return (
    <>
    <Breadcrumbs/>
    <div className="mt-bc"></div>
    <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="loginBox">
                                <h2>Welcome back!</h2>
                                <p>Hey there! Ready to log in? Just enter your username and password below and you will be back in action in no time. Letss go!</p>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" id="InputEmail" aria-describedby="email" placeholder="Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                                    </div>
                                    <button type="submit" className="btn signup-btn">Sign Up</button>
                                    <p className='member-pgh'>Don't have an account? <Link to='/signup'> Sign Up</Link></p>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
  )
}

export default Login