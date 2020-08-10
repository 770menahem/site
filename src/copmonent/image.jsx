import React from "react";

const Image = ({ images, setImage, titles, currentTitle }) => {
  const handleSelectTitle = (img, targetTitle) => {
    setImage(img, targetTitle);
  };

  const noImages = !images.length;

  return (
    <div className="list mx-auto my-2 row">
      {noImages
        ? `No images added to category ${currentTitle}`
        : images.map((img) => (
            <div key={img.id} className="m-2 image-div">
              <img alt="q" className="image" src={img.url} />
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
    </div>
  );
};

export default Image;
