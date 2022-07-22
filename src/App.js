import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/login";
import Signup from "./components/Signup";

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
      <Routes>
        <Route exact path="/Login">
          {token ? <Navigate to="/Profile" /> : <Login />}
        </Route>
        <Route path="/Posts">
          <Posts />
        </Route>
        <Route path="/Profile">
          {!token ? <Navigate to="Login" /> : <Profile />}
        </Route>
        <Route path="/Signup">
          <Signup setToken={setToken} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
