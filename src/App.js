import React, { Component } from "react";
import "./App.css";

import { RemoteComponent } from "./RemoteComponent";

const url = "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js"; // prettier-ignore

const HelloWorld = (props) => <RemoteComponent url={url} {...props} />;

export default function App() {
  return (
    <div className="App">
      <HelloWorld name="Paciolan" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
