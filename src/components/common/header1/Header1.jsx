import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head1";
import "./header.css";
import { Button } from "@mui/material";

const Header1 = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: "black" } : {};
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/project' style={getLinkStyle('/project')}>Home</Link>
            </li>
            <li>
              <Link to='/reference' style={getLinkStyle('/reference')}>Reference</Link>
            </li>
            <li>
              <Link to='/wsubmit' style={getLinkStyle('/wsubmit')}>Submission</Link>
            </li>
            <li>
              <Link to='/discussion' style={getLinkStyle('/discussion')}>Discussion</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><Link to='/'><Button style={{color:"white"}}>Logout</Button></Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header1;
