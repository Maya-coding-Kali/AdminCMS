import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Post from "../Post/Post";
import Patch from "../Patch/Patch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const TabControl = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="post"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab to="/post" eventKey="post" title="Post">
          <Post></Post>
        </Tab>
        <Tab to="/edit" eventKey="edit" title="Edit">
          <Patch></Patch>
        </Tab>
        <Tab eventKey="delete" title="Delete"></Tab>
      </Tabs>
    </div>
  );
};

export default TabControl;
