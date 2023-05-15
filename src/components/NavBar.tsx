import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className='navbar-brand ml-10'>Contact App</Link>
  </nav>
  
};

export default NavBar;