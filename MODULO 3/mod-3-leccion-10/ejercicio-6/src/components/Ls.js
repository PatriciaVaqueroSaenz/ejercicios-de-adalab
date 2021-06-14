import React, { useState, useEffect } from "react";

const LocalStorage = () => {
  const [text, setText] = useState(
    localStorage.getItem("Text") || ""
);

  const handleChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    setText(inputValue);
  };

  useEffect(() => localStorage.setItem("Text", text));

  return (
    <>
      <input
        placeholder="Introduce un texto"
        onChange={handleChange}
        type="text"
        name="input"
      />
      <p>{text}</p>
    </>
  );
};

export default LocalStorage;