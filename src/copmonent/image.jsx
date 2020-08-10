import React, { useState } from "react";
import ImageZoom from "./imageZoom";

const Image = ({ images, setImage, titles, currentTitle }) => {
  const [currentImg, setCurrentImg] = useState(null);

  const handleSelectTitle = (img, targetTitle) => {
    setImage(img, targetTitle);
  };

  const handleClick = (img) => {
    setCurrentImg(img);
  };

  const noImages = !images.length;

  return (
    <div className="list mx-auto my-2 row">
      {noImages
        ? `No images added to category ${currentTitle}`
        : images.map((img) => (
            <div key={img.id} className="m-2 image-div">
              <img
                alt="q"
                className="image"
                src={img.url}
                onClick={() => handleClick(img.url)}
              />
              <br />
              <select onChange={(e) => handleSelectTitle(img, e.target.value)}>
                {["", ...titles].map(
                  (title) =>
                    title !== currentTitle && (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    )
                )}
              </select>
            </div>
          ))}
      {currentImg && (
        <ImageZoom currentImg={currentImg} setCurrentImg={setCurrentImg} />
      )}
    </div>
  );
};

export default Image;
