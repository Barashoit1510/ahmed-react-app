import { Fragment } from "react";

// src/components/Greeting.jsx
function Greeting(props) {
  return (
    <>
      <h1>
        Hello, {props.name} {props.surname}
      </h1>
      <h2>This text was not there </h2>
    </>
  );
}

export default Greeting;
