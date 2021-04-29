import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Aliferous</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn waves-effect waves-light">Sign Up</button>
        <p>
          <Link to="/signin">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;