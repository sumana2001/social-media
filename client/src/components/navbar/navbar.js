import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">
            Aliferous
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/createpost">Create Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
