import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
