import React, { useState } from "react";

export default function AddTitle({ addTitle, titles }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setInput(input.value);
    setError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    if (titles.includes(input)) return setError(`${input} already exist`);

    addTitle(input);
    setInput("");
  };

  return (
    <>
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
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
}
