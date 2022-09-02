// what to do next
// have only 4 news articles display
// then another page with all news

import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FindPatch from "./FindPatch/FindPatch";
import "./Patch.css"
function Post({ isLoggedIn }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState();
  const [find, setFind] = useState();
  const [updateData, setUpdateData] = useState({
    title: "",
    date: "",
    info: "",
    img: "",
  });
  
  const onFindHandle = async (event) => {
    event.preventDefault();
    document.getElementById("PostEdit").reset();
    fetch(`http://localhost:3000/getedit?title=${find}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.length > 0) {
          setTitle(data[0].post_title);
          setDate(data[0].post_date.substring(0, 10));
          setInfo(data[0].post_info);
          setImage(data[0].post_image);
          console.log(title, date, info, image);
        }
        else{
          alert("Could not find Post")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitHandle = (event) => {
    event.preventDefault();
     document.getElementById("PostEdit").reset();
    console.log(find, title, date, info, image);
    fetch("http://localhost:3000/edit", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foundTitle: find,
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
    <div className="w-25 m-a mx-auto mt-5 mb-3 myWidth">
      <h1 className="text-center text-decoration-underline my-5">Edit</h1>
      <Form onSubmit={onFindHandle} className="myWidth">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Find</Form.Label>
          <Form.Control
            type="text"
            name="Title"
            placeholder="Title"
            encType="multipart/form-data"
            onChange={(event) => {
              setFind(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Form onSubmit={onSubmitHandle} id="PostEdit">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="Title"
            defaultValue={`${title}`} //
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
            defaultValue={`${date}`}
            encType="multipart/form-data"
            onChange={(event) => {
              setDate(event.target.value);
              console.log("this be date  " + date);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Info</Form.Label>
          <Form.Control
            name="info"
            as="textarea"
            defaultValue={`${info}`}
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
                const file = event.target.files[0];
                console.log(file);
                reader.readAsDataURL(file);
                reader.onload = () => resolve(setImage(reader.result));
                reader.onerror = (error) => reject(error);
              });
            }}
          />
          <img src={image} width={"200px"} alt="" />
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
