import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BrianSocio</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Briansocio
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              minLength="6"
              placeholder="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? (
                <CircularProgress color="secondary" size="25px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot password</span>
            <button className="loginRegisterButton">Create new Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
