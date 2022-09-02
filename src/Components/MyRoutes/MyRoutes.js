import React, { useState, useEffect } from "react";
import SignIn from "../SignIn/SignIn";
import { BrowserRouter, Routes, Route, useNavigate, Redirect , Router  } from "react-router-dom";
import Post from "../Post/Post";
import Register from "../Register/Register";
import TabControl from "../CMS-Tabs/TabControl";
function MyRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState("/");

  
  const onloggedIn = (path) => {
    console.log(path);
    setIsLoggedIn(path);
  };
  useEffect(() => {
    
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem("isLoggedIn")));
  }, []);

  useEffect(() => {
    console.log(isLoggedIn);
    window.sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  if (isLoggedIn === "Register") {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/Register"
            element={<Register loggedIn={onloggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    );
  } else if (isLoggedIn === "post") {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/post" element={<TabControl loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn loggedIn={onloggedIn} />} />
          <Route path="*" element={<SignIn loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default MyRoutes;
