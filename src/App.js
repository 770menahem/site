import React, { useState, useEffect } from "react";
import useFirestore from "./hooks/useFirestore";
import MainNav from "./copmonent/mainNav";
import Image from "./copmonent/image";
import DeleteTitle from "./copmonent/deleteTitle";
import "./App.css";

function App() {
  const { docs: imgDB, lastImg: lastImgDB } = useFirestore("All");
  const [mainCategory, setMainCategory] = useState({
    title: "All",
    images: imgDB,
  });
  const [userCategories, setUserCategories] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(mainCategory.title);
  const allCategories = [mainCategory, ...userCategories];

  useEffect(() => {
    const imageInMainCategory = mainCategory.images.length;
    const lastImage = mainCategory.images[imageInMainCategory - 1];

    if (!imageInMainCategory) {
      setMainCategory({ title: "All", images: imgDB });
    } else if (lastImgDB && lastImgDB.id !== lastImage.id) {
      const newImg = lastImgDB;
      setMainCategory({
        title: "All",
        images: [...mainCategory.images, newImg],
      });
    }
  }, [lastImgDB]);

  const addCategory = (title) => {
    const titleExist = allCategories.filter((c) => c.title === title)[0];

    if (titleExist) return;

    const newCategory = { title: title, images: [] };
    setUserCategories([...userCategories, newCategory]);
  };

  const changeCategory = (img, newCategory) => {
    const removeFrom = getDataByTitle(currentTitle).filter((i) => i !== img);

    const addedTo = getDataByTitle(newCategory);
    addedTo.push(img);

    const newCategories = allCategories
      .map((c) => {
        if (c.title === currentTitle)
          return { title: c.title, images: removeFrom };
        if (c.title === newCategory) return { title: c.title, images: addedTo };
        return c;
      })
      .filter((c) => (c.title === mainCategory.title ? setMainCategory(c) : c));

    setUserCategories(newCategories);
  };

  function deleteCategory() {
    getDataByTitle(currentTitle).map((img) =>
      allCategories[0].images.push(img)
    );

    const newData = allCategories
      .filter((t) => t.title !== currentTitle)
      .filter((t) => (t.title !== mainCategory.title ? t : setMainCategory(t)));

    setCurrentTitle(mainCategory.title);
    setUserCategories(newData);
  }

  const getDataByTitle = (title) => {
    return allCategories.filter((c) => c.title === title)[0].images;
  };

  const getTitles = () => {
    return allCategories.map((c) => c.title);
  };

  return (
    <React.Fragment>
      <MainNav
        categories={allCategories}
        addTitle={addCategory}
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        titles={getTitles()}
      />
      {currentTitle !== mainCategory.title && (
        <DeleteTitle handleDeleteTitle={deleteCategory} />
      )}
      <Image
        setImage={changeCategory}
        images={getDataByTitle(currentTitle)}
        titles={getTitles()}
        currentTitle={currentTitle}
      />
      )
    </React.Fragment>
  );
}

export default App;
