import React from "react";
import 'antd/dist/antd.css'

import { HelloWorld } from "./components/HelloWorld";



export const App = ({ name = "World" }) => {
  return <HelloWorld>Hello from Remote Component, {name}!</HelloWorld>;
};
