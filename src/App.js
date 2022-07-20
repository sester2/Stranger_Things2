import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Redirect } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
    console.log("INSIDE OUR USE EFFECT the toke is currently:", token);
  }, [token]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/Login">
          {token ? <Redirect to="/Profile" /> : <Login />}
        </Route>
        <Route path="/Posts">
          <Posts />
        </Route>
        <Route path="/Profile">
          {!token ? <Redirect to="Login" /> : <Profile />}
        </Route>
        <Route path="/Signup">
          <Signup setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
