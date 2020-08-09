import React from "react";

const Image = ({ data: images, setData, titles }) => {
  const handleTitle = (img, t) => {
    if (!t) return;
    setData(img, images.title, t);
  };

  return (
    <div className="list mx-auto my-2 row">
      {images.data.length
        ? images.data.map((img) => (
            <div
              key={img.id}
              className="m-2"
              style={{ backgroundColor: "#e3f2fd" }}
            >
              <img alt="q" src={img.url} width="50px" height="70px" />
              <br />
              <select onChange={(e) => handleTitle(img, e.target.value)}>
                {["", ...titles].map(
                  (t) =>
                    t !== images.title && (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    )
                )}
              </select>
            </div>
          ))
        : "empty"}
    </div>
  );
};

export default Image;
