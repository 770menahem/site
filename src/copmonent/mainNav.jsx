import React from "react";
import Upload from "./Upload";
import AddTitle from "./AddTitle";

function MainNav({
  categories,
  addTitle,
  currentTitle,
  setCurrentTitle,
  titles,
}) {
  const logo = "Myl";

  const handleClick = (t) => {
    setCurrentTitle(t);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <p className="navbar-brand my-2" to="#">
        {logo}
      </p>
      <ul className="navbar-nav mr-auto">
        <Upload />
        {categories.map((category) => {
          return (
            <li
              key={category.title}
              className={
                category.title === currentTitle
                  ? "nav-item my-2 active"
                  : "nav-item my-2"
              }
            >
              <p
                className="nav-link my-auto pointer"
                onClick={() => handleClick(category.title)}
              >
                {category.title}
                <span className="badge badge-primary badge-pill">
                  {category.images.length}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
      <AddTitle addTitle={addTitle} titles={titles} />
    </nav>
  );
}

export default MainNav;
