import React, { useState, useEffect } from "react";
import useFirestore from "./hooks/useFirestore";
import MainNav from "./copmonent/mainNav";
import Image from "./copmonent/image";
import DelOrEmptyBtn from "./copmonent/DelOrEmptyBtn";
import "./App.css";

function App() {
  const { docs: imgDB } = useFirestore("All");
  const [mainCategory, setMainCategory] = useState({
    title: "All",
    images: imgDB,
  });
  const [userCategories, setUserCategories] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(mainCategory.title);
  let allCategories = [mainCategory, ...userCategories];

  useEffect(() => {
    const imageInMainCategory = mainCategory.images.length;
    const lastImage = mainCategory.images[imageInMainCategory - 1];
    const lastImgDB = imgDB[0];

    if (!imageInMainCategory) {
      setMainCategory({ title: mainCategory.title, images: imgDB });
    } else if (lastImgDB && lastImgDB.id !== lastImage.id) {
      const newImg = lastImgDB;
      setMainCategory({
        title: mainCategory.title,
        images: [...mainCategory.images, newImg],
      });
    }
  }, [imgDB]);

  const addCategory = (title) => {
    const titleExist = allCategories.filter((c) => c.title === title)[0];

    if (titleExist) return;

    const newCategory = { title: title, images: [] };
    setUserCategories([...userCategories, newCategory]);
  };

  const changeCategory = (img, newCategory) => {
    const removeFrom = getImagesByTitle(currentTitle).filter((i) => i !== img);

    const addedTo = getImagesByTitle(newCategory);
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

  const deleteCategory = () => {
    emptyCategory();

    const newUserCategory = userCategories.filter(
      (t) => t.title !== currentTitle
    );

    setCurrentTitle(mainCategory.title);
    setUserCategories(newUserCategory);
  };

  const emptyCategory = () => {
    getImagesByTitle(currentTitle).map((img) =>
      allCategories[0].images.push(img)
    );

    const newUserCategory = allCategories
      .map((c) =>
        c.title === currentTitle ? { title: c.title, images: [] } : c
      )
      .filter((t) => (t.title !== mainCategory.title ? t : setMainCategory(t)));

    setUserCategories(newUserCategory);
  };

  const getImagesByTitle = (title) => {
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
        <DelOrEmptyBtn
          handleEmptyCategory={emptyCategory}
          handleDeleteCategory={deleteCategory}
        />
      )}
      <Image
        setImage={changeCategory}
        images={getImagesByTitle(currentTitle)}
        titles={getTitles()}
        currentTitle={currentTitle}
      />
    </React.Fragment>
  );
}

export default App;
