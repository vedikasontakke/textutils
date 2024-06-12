import React , { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import About from './About'; // Your About component



export default function Navbar(props) {

  return (
    <>
                {/* Navbar with dynamic class based on the current mode */}
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
                
              </ul>

            

                          {/* Switch to toggle between light and dark mode */}
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label me-3" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark': 'light'} Mode</label>
              </div>

            </div>
          </div>
        </nav>

  

   </>
  )
}

// to check validations like prop type should be string only / number only etc....
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string
}

// if pops will not get passed 
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'about text here '
}