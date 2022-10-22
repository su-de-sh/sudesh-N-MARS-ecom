import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md ">
          <form className="width-md" action="">
            <input type="text" placeholder="Fullname" />
            <input type="text" placeholder="Lastname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="primary-button">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
