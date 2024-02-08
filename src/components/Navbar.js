import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =()=> {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Financial Website</Link>
        </li>
        {/* exchange also points to root because i want root to show exchange details as default */}
        <li>
          <Link to="/">Exchange</Link>
        </li>
        <li>
          <Link to="/instruments">Instrument</Link>
        </li>
        <li>
          <Link to="/candles">Candle</Link>
        </li>
      </ul>
      <input type="text" placeholder="Search..." />
    </nav>
  );
}

export default NavBar;
