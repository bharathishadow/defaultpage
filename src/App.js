import React, { useState, useEffect } from "react"
import './App.css';

export default function App() {
  const [version, setVersion] = useState(0);
  function handleReset() {
    setVersion(version + 1);
  }
  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [data, setData] = useState({
    color: "",
    border: ""
  });

  function handleChange(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
  }

  const sty = {
    background: data.color,
    fontSize: `${data.border}px`
    // fontSize: data ? `${data.border}px` : ""
  };
  return (
    <>
      <input
        placeholder="color"
        name="color"
        value={data.color}
        onChange={handleChange}
      />
      <input
        placeholder="color"
        name="border"
        value={data.border}
        onChange={handleChange}
      />
      <p style={sty}>Hello</p>
    </>
  );
}