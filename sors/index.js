import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, Username } from "./Greeting";

const root = ReactDom.createRoot(document.getElementById("root"));

function X() {
  const texto = "Hola";
  return <h1>{texto}</h1>;
}

root.render(
  <div>
    <X />
    <Greeting />
    <Username />
  </div>
);