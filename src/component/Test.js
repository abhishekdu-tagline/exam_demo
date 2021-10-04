import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    options: [{ A: " ", B: "" }],
  });
  console.log(`data`, data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`name`, name);
    // console.log(`value`, value);
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <br />
      Password :{" "}
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      A:{" "}
      <input
        type="text"
        name="A"
        value={data.options[0].A}
        onChange={handleChange}
      />
      B:
      <input
        type="text"
        name="B"
        value={data.options[0].B}
        onChange={handleChange}
      />
    </div>
  );
};

export default Test;
