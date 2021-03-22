import React from "react";
import { HelloWorld } from "./components/HelloWorld";

export const App = ({ name = "World" }) => {
  return <HelloWorld>Hello from Remote Component, {name}!</HelloWorld>;
};
