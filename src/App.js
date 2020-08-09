import React, { useState, useEffect } from "react";
import MainNav from "./copmonent/mainNav";
import Image from "./copmonent/image";
import DeleteTitle from "./copmonent/deleteTitle";
import "./App.css";
import Upload from "./copmonent/Upload";
import useFirestore from "./hooks/useFirestore";

function App() {
  const { docs } = useFirestore("All");
  const [all, setAll] = useState({ title: "All", data: [] });
  const [data, setData] = useState([]);
  const datas = [all, ...data];
  const [title, setTitle] = useState(all.title);

  useEffect(() => {
    setAll({ title: "All", data: docs });
  }, [docs]);

  // useEffect(() => {
  //   setData(
  //     data.map((d) => {
  //       if (d.title === "All") return all;
  //       return d;
  //     })
  //   );
  // }, [all]);

  const setDatas = (t) => {
    setData([...data, t]);
  };

  const handleData = (img, prevTitle, newTitle) => {
    const removeFrom = getDataByTitle(prevTitle).data.filter((i) => i !== img);

    const addedTo = getDataByTitle(newTitle).data;
    addedTo.push(img);

    const newData = datas
      .map((t) => {
        if (t.title === prevTitle) return { title: t.title, data: removeFrom };
        if (t.title === newTitle) return { title: t.title, data: addedTo };
        return t;
      })
      .filter((t) => (t.title !== "All" ? t : setAll(t)));

    setData(newData);
  };

  function handleDeleteTitle() {
    getDataByTitle(title).data.map((d) => datas[0].data.push(d));

    const newData = datas
      .filter((t) => t.title !== title)
      .filter((t) => (t.title !== "All" ? t : setAll(t)));

    setTitle("All");
    setData(newData);
  }

  const getDataByTitle = (title) => {
    return datas.filter((d) => d.title === title)[0];
  };

  const getTitles = () => {
    return datas.map((i) => i.title);
  };

  return (
    <React.Fragment>
      <MainNav
        titles={datas}
        setTitles={setDatas}
        title={title}
        setTitle={setTitle}
      />
      {title !== "All" && title && (
        <DeleteTitle handleDeleteTitle={handleDeleteTitle} />
      )}
      {title ? (
        <Image
          setData={handleData}
          data={getDataByTitle(title)}
          titles={getTitles()}
        />
      ) : (
        <Upload />
      )}
    </React.Fragment>
  );
}

export default App;
