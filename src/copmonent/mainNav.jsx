import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainNav({ titles, setTitles, title, setTitle }) {
  const logo = "Myl";
  const [input, setInput] = useState("");

  const onInputChange = ({ currentTarget: input }) => {
    setInput(input.value);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }

    setTitles([...titles, { title: input, data: [] }]);
    setInput("");
  };

  const handleTitle = (t) => {
    setTitle(t);
  };

  let id = 1;

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <p className="navbar-brand my-auto" to="#">
        {logo}
      </p>
      <ul className="navbar-nav mr-auto">
        {titles.map((t) => (
          <li
            key={id++}
            className={t.title === title ? "nav-item active" : "nav-item"}
          >
            <Link
              className="nav-link"
              to={`/${t.title}`}
              onClick={() => handleTitle(t.title)}
            >
              {t.title}
              <span className="badge badge-primary badge-pill">
                {t.data.length}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <form className="form my-2 my-lg-0" onSubmit={submitTitle}>
        <input
          className="mx-2 my-lg-0"
          type="text"
          placeholder="Enter title"
          value={input}
          onChange={onInputChange}
        />
        <button className="btn btn-outline-success" type="submit">
          ADD
        </button>
      </form>
    </nav>
  );
}

export default MainNav;
