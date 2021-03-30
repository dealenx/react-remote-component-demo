import React, { Component } from "react";
import "./App.css";

import { RemoteComponent } from "./RemoteComponent";

// const url = "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js";

const urlHelloWorldCoponent = "/remote/HelloWorld.js";

const urlAntDesignExample = "/remote/AntDesignExample.js";

const HelloWorld = (props) => (
  <RemoteComponent url={urlHelloWorldCoponent} {...props} />
);

const AntDesignExample = (props) => (
  <RemoteComponent url={urlAntDesignExample} {...props} />
);

export default function App() {
  return (
    <div className="App">
      <HelloWorld name="User" />
      <AntDesignExample />
    </div>
  );
}
