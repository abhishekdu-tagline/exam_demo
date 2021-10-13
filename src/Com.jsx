import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Com = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};

export default Com;
