import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
function SignIn({ loggedIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/")
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://sleepy-lowlands-47115.herokuapp.com/", {
      //
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);          
          loggedIn("post");
          navigate("/post");
        }
      })
      .catch((err) => {
        console.log("Unable to Fetch " + err);
      });
  };
  return (
    <div className="w-25 m-a mx-auto mt-5  myWidth">
      <h1 className="mt-5 text-center text-decoration-underline">Sign In</h1>
      <Form onSubmit={handleSubmit} className="mt-5 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           className=""
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-center">
          <button
            style={{
              margin: "1em 0",
              border: "none",
              padding: "8px 1em ",
              borderRadius: "1em",
              background: "",
            }}
            onClick={() => {
              loggedIn("Register");
              navigate("/Register");
            }}
          >
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;

// sign in page
// register page
// when you sign in you need to connect to the data base
// send information to the data base and see if it is valid
// i need a salt and hash for cryptography
// post page
// should it connet to the dsatabase then go to the fornt end website or vice versa
