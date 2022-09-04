import React from 'react';
import { Link }from 'react-router-dom'

import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
         <Link className="navbar-brand"  to="/">{props.title} </Link>
         <div className="dropdown">
        <button className="navbar-toggler dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-target="/about" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
  </ul>
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <Link className="nav-link active" aria-current="page"  to="/">{props.home} </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link"  to="/about">Tools</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
            <label className={`form-check-label text-${props.mode=== 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Set Title Here"
}