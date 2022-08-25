import React, { useState, useEffect } from "react";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";
import Register from "./Components/Register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("/");
  
  useEffect(() => {
    console.log(isLoggedIn);
  });
  const onloggedIn = (path) => {
    console.log(path);
    setIsLoggedIn(path);
  };
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
          <Route path="/post" element={<Post loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn loggedIn={onloggedIn} />} />
          <Route path="/" element={<SignIn loggedIn={onloggedIn} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
