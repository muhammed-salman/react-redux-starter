import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <div className="header--top mb-5">
      <div className="alert alert-info">
        My-New-Project
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
