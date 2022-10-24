import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserObject } from "../reducers/userReducer";
import loginServices from "../services/loginServices";

const Login = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await loginServices.login(email, password);

    if (response.error) {
      setMessage(response.error);
      setTimeout(() => setMessage(null), 3000);
    } else {
      window.localStorage.setItem("loggedinUser", JSON.stringify(response));
      dispatch(setUserObject(response));
      navigate("/");
    }
  };

  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <p className="message">{message}</p>

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
