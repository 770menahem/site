import React, { useState } from "react";

export default function AddTitle({ addTitle }) {
  const [input, setInput] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setInput(input.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    addTitle(input);
    setInput("");
  };

  return (
    <form className="form my-2 my-lg-0" onSubmit={onSubmit}>
      <input
        className="mx-2 my-lg-0"
        type="text"
        placeholder="Enter title"
        value={input}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        ADD
      </button>
    </form>
  );
}
