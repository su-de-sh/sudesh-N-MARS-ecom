import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" action="">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p className="text-white">
              Already have an account? <Link to="/login"> Login</Link>
            </p>
            <button className="primary-button ">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
