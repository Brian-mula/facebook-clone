import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmpassword.current.value !== password.current.value) {
      password.current.setCustomValidity("passwords dont match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">BrianSocio</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Briansocio
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
              ref={username}
              required
            />
            <input
              type="email"
              required
              ref={email}
              placeholder="Email"
              className="registerInput"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="Password"
              className="registerInput"
              minLength="6"
            />
            <input
              required
              ref={confirmpassword}
              type="password"
              placeholder="confirm password"
              className="registerInput"
            />
            <button className="registerButton" type="submit">
              Sign up
            </button>

            <button className="registerRegisterButton">
              Log into your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
