import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Post from "./Components/Post/Post";
import Register from "./Components/Register/Register";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: "/" };
  }
  loggedIn = (path) => {
    this.setState({ isLoggedIn: path });
    console.log(path)
  };
  render() {
    if (this.state.isLoggedIn === "/") {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn isLoggedIn={this.loggedIn} />} />
          </Routes>
        </BrowserRouter>
      );
    } else if (this.state.isLoggedIn === "Register") {
      <BrowserRouter>
        <Routes>
          <Route
            path="/Register"
            element={<Register isLoggedIn={this.loggedIn} />}
          />
        </Routes>
      </BrowserRouter>;
    } else if (this.state.isLoggedIn === "post") {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/post" element={<Post isLoggedIn={this.loggedIn} />} />
          </Routes>
        </BrowserRouter>
      );
    }
  }
}
export default App;
