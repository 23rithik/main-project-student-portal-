import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/reference'>Reference</Link>
            </li>
            <li>
              <Link to='/wsubmit'>Submission</Link>
            </li>
            <li>
              <Link to='/discussion'>Discussion</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button' style={{textDecoration:"none"}}><Link to='/login'>Logout</Link></div>
            {/* <span>|</span> */}
            {/* <div className='button'><Link to='/signup'>Signup</Link></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
