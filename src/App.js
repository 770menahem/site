import React, { useState } from "react";
import MainNav from "./copmonent/mainNav";
import GlobalState from "./copmonent/globalState";
import Image from "./copmonent/image";
import DeleteTitle from "./copmonent/deleteTitle";
import "./App.css";

function App() {
  const { data, setData, getDataByTitle, getTitles } = GlobalState();

  const [title, setTitle] = useState(data[0].title);

  const handleData = (img, prevTitle, newTitle) => {
    const removeFrom = getDataByTitle(prevTitle).data.filter((i) => i !== img);

    const addedTo = getDataByTitle(newTitle).data;
    addedTo.push(img);

    const newData = data.map((t) => {
      if (t.title === prevTitle) return { title: t.title, data: removeFrom };
      if (t.title === newTitle) return { title: t.title, data: addedTo };
      return t;
    });
    setData(newData);
  };

  function handleDeleteTitle() {
    getDataByTitle(title).data.map((d) => data[0].data.push(d));

    const newData = data.filter((t) => t.title !== title);

    setTitle("All");
    setData(newData);
  }

  return (
    <React.Fragment>
      <MainNav
        titles={data}
        setTitles={setData}
        title={title}
        setTitle={setTitle}
      />
      {title !== "All" && <DeleteTitle handleDeleteTitle={handleDeleteTitle} />}{" "}
      {title && (
        <Image
          setData={handleData}
          data={getDataByTitle(title)}
          titles={getTitles()}
        />
      )}
    </React.Fragment>
  );
}

export default App;
