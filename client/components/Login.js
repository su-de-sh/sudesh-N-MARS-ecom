import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p className="text-white margin-top-md">
              Not registered? <Link to="/signup">SignUp</Link>
            </p>
            <button className="primary-button ">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
