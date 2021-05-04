import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from '../../App';

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext)
  const renderList=()=>{
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>
      ]
    }else{
      return [
        <li><Link to="/signin">Sign In</Link></li>,
        <li><Link to="/signup">Sign Up</Link></li>
      ]
    }
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left">
            Aliferous
          </Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
