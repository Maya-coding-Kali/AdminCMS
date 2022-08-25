import React, { useState, useEffect } from "react";
import SignIn from "../SignIn/SignIn";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Post from "../Post/Post";
import Register from "../Register/Register";
function MyRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState("/");
  useEffect(() => {});
  const onloggedIn = (path) => {
    console.log(path);
    setIsLoggedIn(path);
  };
  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (isLoggedIn === "Register") {
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
          <Route path="/post" element={<Post loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default MyRoutes;
