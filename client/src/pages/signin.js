import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Aliferous</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn waves-effect waves-light">Sign In</button>
        <p>
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
