import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  
    <div className=' bg-black'>
  
  <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contatti">Contatti</Link>
        </li>
        <li>
          <Link to="/about">Chi Sono</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;