// what to do next
// have only 4 news articles display
// then another page with all news

import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Post({ isLoggedIn }) {
  const [title, setTitle] = useState();//
  const [date, setDate] = useState();
  const [info, setInfo] = useState();
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState();
  const saveFile = (event) => {
    
  };
  const onSubmitHandle = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("image", image);
    // formData.append("imageName", imageName);
    // formData.append("title", title)
    // formData.append("date", date)
    // formData.append("info", info)
    // try {
    //   const res = await axios.post("http://localhost:3000/post",formData);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    fetch("http://localhost:3000/post", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        date: date,
        info: info,
        image: image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((err) => {
        console.error("Unable to Post Post " + err);
      });
  };
  return (
    <div className="w-25 m-a mx-auto mt-5 mb-3">
      <h1 className="text-center text-decoration-underline my-5">Post</h1>
      <Form onSubmit={onSubmitHandle}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="Title"
            placeholder="Title"
            encType="multipart/form-data"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            encType="multipart/form-data"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Info</Form.Label>
          <Form.Control
            name="info"
            as="textarea"
            encType="multipart/form-data"
            aria-label="With textarea"
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
          <input
            type="file"
            id="avatar"
            name="image"
            encType="multipart/form-data"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              new Promise((resolve, reject) => {
              const reader = new FileReader();
              const file = event.target.files[0]
              console.log(file)
              reader.readAsDataURL(file);
              reader.onload = () => resolve(setImage( reader.result));
              reader.onerror = (error) => reject(error);
              
              
            })}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h6
        className="mt-3 text-center text-decoration-underline"
        onChange={() => {
          isLoggedIn("/");
        }}
      >
        {" "}
        <a href="/" className=" text-decoration-none">
          {" "}
          LogOut
        </a>
      </h6>
    </div>
  );
}

export default Post;
