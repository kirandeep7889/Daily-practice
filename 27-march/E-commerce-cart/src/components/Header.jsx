import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink exact to="/">
          <img src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo_23-2149738985.jpg?size=626&ext=jpg" alt="Logo" />
        </NavLink>
      </div>
      <div className="links">
        <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
        <NavLink to="/cart" className="link" activeClassName="active">Cart</NavLink>
      </div>
    </div>
  );
}

export default Header;
