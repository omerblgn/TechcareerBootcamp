import React, { useState } from "react";

function App() {
  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const calc = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };

  return (
    <>
      <label>Width: </label>
      <input onChange={(e) => setInputWidth(e.target.value)} />
      <br />
      <label>Height: </label>
      <input onChange={(e) => setInputHeight(e.target.value)} />
      <br />
      <button onClick={calc}>Calc</button>

      <div
        style={{
          border: "1px solid",
          width: width + "px",
          height: height + "px",
        }}
      ></div>
    </>
  );
}

export default App;
