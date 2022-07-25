import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import login from "./components/login";
import Signup from "./components/Signup";
import { fetchPosts } from "./api";

function App() {
  const [token, setToken] = useState(null);

  const [originalposts, setoriginalposts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setoriginalposts(result);
      console.log("These are the posts from API:", result);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
    console.log("INSIDE OUR USE EFFECT the toke is currently:", token);
  }, [token]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />
            }
          />
          <Route
            path="/Posts"
            element={
              <Posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />
            }
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {token ? <Navigate to="/Profile" /> : <login />}
// {!token ? <Navigate to="login" /> : <Profile />}
